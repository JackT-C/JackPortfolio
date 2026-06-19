'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiBook, FiActivity } from 'react-icons/fi';

const GITHUB_USER = 'jacktilfordcarey';

const LANG_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python:     '#3572a5',
  CSS:        '#563d7c',
  HTML:       '#e34c26',
  PHP:        '#4f5d95',
  Kotlin:     '#7f52ff',
  Shell:      '#89e051',
  Other:      '#8b949e',
};

interface GHUser {
  public_repos: number;
}

interface GHRepo {
  language: string | null;
  fork: boolean;
}

function AnimatedCount({ target }: { target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (target === 0) { setCount(0); return; }
    setCount(0);
    let cancelled = false;
    let current = 0;
    const duration = 900;
    const step = Math.max(1, Math.ceil(target / (duration / 16)));
    const timer = setInterval(() => {
      if (cancelled) return;
      current = Math.min(current + step, target);
      setCount(current);
      if (current >= target) clearInterval(timer);
    }, 16);
    return () => { cancelled = true; clearInterval(timer); };
  }, [target]);

  return <span>{count}</span>;
}

export default function GitHubStats() {
  const [user, setUser] = useState<GHUser | null>(null);
  const [repos, setRepos] = useState<GHRepo[]>([]);
  const [contributions, setContributions] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USER}`).then((r) => r.json()),
      fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100`).then((r) => r.json()),
      fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}?y=last`)
        .then((r) => r.json())
        .catch(() => null),
    ])
      .then(([u, r, c]) => {
        if (u.message) { setError(true); return; }
        setUser(u as GHUser);
        setRepos(Array.isArray(r) ? (r as GHRepo[]) : []);
        if (c && c.total) {
          const vals = Object.values(c.total as Record<string, number>);
          setContributions(vals.reduce((a: number, b: number) => a + b, 0));
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  // Language distribution from primary language per non-fork repo
  const langMap: Record<string, number> = {};
  repos.filter((r) => !r.fork && r.language).forEach((r) => {
    const lang = r.language!;
    langMap[lang] = (langMap[lang] || 0) + 1;
  });
  const total = Object.values(langMap).reduce((a, b) => a + b, 0);
  const sortedLangs = Object.entries(langMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);

  // Build SVG pie slices
  const PIE_R = 54;
  const PIE_CX = 70;
  const PIE_CY = 70;
  type Slice = { lang: string; pct: number; color: string; d: string };
  const slices: Slice[] = [];
  if (total > 0) {
    let startAngle = -Math.PI / 2;
    sortedLangs.forEach(([lang, count]) => {
      const pct = count / total;
      const angle = pct * 2 * Math.PI;
      const endAngle = startAngle + angle;
      const x1 = PIE_CX + PIE_R * Math.cos(startAngle);
      const y1 = PIE_CY + PIE_R * Math.sin(startAngle);
      const x2 = PIE_CX + PIE_R * Math.cos(endAngle);
      const y2 = PIE_CY + PIE_R * Math.sin(endAngle);
      const largeArc = angle > Math.PI ? 1 : 0;
      slices.push({
        lang,
        pct,
        color: LANG_COLORS[lang] ?? LANG_COLORS.Other,
        d: `M ${PIE_CX} ${PIE_CY} L ${x1} ${y1} A ${PIE_R} ${PIE_R} 0 ${largeArc} 1 ${x2} ${y2} Z`,
      });
      startAngle = endAngle;
    });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="bg-card border border-line rounded-xl overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center gap-2 px-5 py-4 border-b border-line">
        <a
          href={`https://github.com/${GITHUB_USER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:opacity-70 transition-opacity"
          aria-label="GitHub profile"
        >
          <FiGithub size={15} />
        </a>
        <h2 className="text-sm font-semibold text-fg">GitHub Stats</h2>
        <a
          href={`https://github.com/${GITHUB_USER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto text-xs text-muted hover:text-accent transition-colors"
        >
          @{GITHUB_USER}
        </a>
      </div>

      {loading ? (
        <div className="p-5 space-y-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-12 bg-card-2 rounded-lg animate-pulse" />
          ))}
        </div>
      ) : error ? (
        <div className="p-5 text-center text-muted text-sm">
          Could not load GitHub stats.
        </div>
      ) : (
        <>
          {/* Stat boxes */}
          <div className="grid grid-cols-2 gap-px bg-line m-4 rounded-lg overflow-hidden">
            {[
              { label: 'Repositories',        value: user?.public_repos ?? 0, icon: FiBook },
              { label: 'Contributions (yr)',   value: contributions ?? 0,      icon: FiActivity },
            ].map(({ label, value, icon: Icon }) => (
              <div key={label} className="bg-card px-3 py-3.5 flex flex-col items-center gap-1 text-center">
                <Icon size={15} className="text-accent" />
                <div className="text-lg font-bold text-fg leading-none">
                  {value > 0 ? <AnimatedCount target={value} /> : '—'}
                </div>
                <div className="text-[11px] text-muted">{label}</div>
              </div>
            ))}
          </div>

          {/* Language pie chart */}
          {slices.length > 0 && (
            <div className="px-4 pb-5">
              <p className="text-[11px] font-semibold text-muted uppercase tracking-wider mb-3">
                Languages
              </p>

              <div className="flex items-center gap-4">
                {/* SVG pie */}
                <svg width="140" height="140" viewBox="0 0 140 140" className="flex-shrink-0">
                  {slices.map((s) => (
                    <path
                      key={s.lang}
                      d={s.d}
                      fill={s.color}
                      stroke="var(--card)"
                      strokeWidth="2"
                      className="hover:opacity-80 transition-opacity"
                    >
                      <title>{s.lang}: {Math.round(s.pct * 100)}%</title>
                    </path>
                  ))}
                </svg>

                {/* Legend */}
                <div className="space-y-1.5 flex-1 min-w-0">
                  {sortedLangs.map(([lang]) => {
                    const pct = Math.round((langMap[lang] / total) * 100);
                    const color = LANG_COLORS[lang] ?? LANG_COLORS.Other;
                    return (
                      <div key={lang} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                        <span className="text-xs text-fg truncate flex-1">{lang}</span>
                        <span className="text-xs text-muted font-mono">{pct}%</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </motion.div>
  );
}
