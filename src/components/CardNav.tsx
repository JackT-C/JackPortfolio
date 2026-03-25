'use client';

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

interface NavLink {
  label: string;
  ariaLabel: string;
  href: string;
}

interface NavItem {
  label: string;
  bgColor: string;
  textColor: string;
  links: NavLink[];
}

interface CardNavProps {
  items: NavItem[];
  baseColor?: string;
  menuColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
  ease?: string;
}

const CardNav = ({
  items,
  baseColor = '#fff',
  menuColor = '#000',
  buttonBgColor = '#111',
  buttonTextColor = '#fff',
  ease = 'power3.out',
}: CardNavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const overlayRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    // Build the GSAP timeline on mount
    const tl = gsap.timeline({ paused: true });

    // Fade in overlay
    tl.to(overlayRef.current, {
      opacity: 1,
      pointerEvents: 'auto',
      duration: 0.3,
      ease,
    });

    // Stagger cards sliding in from top
    tl.fromTo(
      cardsRef.current,
      { yPercent: -110, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.08,
        ease,
      },
      '-=0.1'
    );

    tlRef.current = tl;

    return () => {
      tl.kill();
    };
  }, [ease, items.length]);

  const openMenu = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
    tlRef.current?.play();
  };

  const closeMenu = () => {
    tlRef.current?.reverse();
    setTimeout(() => {
      setIsOpen(false);
      document.body.style.overflow = '';
    }, 600);
  };

  const handleLinkClick = (href: string) => {
    closeMenu();
    if (href.startsWith('#')) {
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 650);
    } else {
      // For file downloads or external links
      setTimeout(() => {
        const a = document.createElement('a');
        a.href = href;
        a.download = '';
        a.click();
      }, 650);
    }
  };

  return (
    <>
      {/* Fixed Menu Button */}
      <button
        onClick={openMenu}
        className="fixed top-6 right-6 z-[60] flex items-center gap-3 px-5 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg backdrop-blur-md"
        style={{
          backgroundColor: isOpen ? 'transparent' : buttonBgColor,
          color: buttonTextColor,
          border: isOpen ? 'none' : `1px solid rgba(255,255,255,0.1)`,
          opacity: isOpen ? 0 : 1,
          pointerEvents: isOpen ? 'none' : 'auto',
        }}
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
      >
        <svg
          width="20"
          height="14"
          viewBox="0 0 20 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="0" y1="1" x2="20" y2="1" stroke={baseColor} strokeWidth="2" />
          <line x1="0" y1="7" x2="20" y2="7" stroke={baseColor} strokeWidth="2" />
          <line x1="0" y1="13" x2="20" y2="13" stroke={baseColor} strokeWidth="2" />
        </svg>
        <span className="text-sm font-semibold tracking-wider uppercase">Menu</span>
      </button>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[70] bg-black/80 backdrop-blur-sm"
        style={{ opacity: 0, pointerEvents: 'none' }}
        onClick={closeMenu}
      />

      {/* Sidebar Nav */}
      <div
        ref={navRef}
        className="fixed top-0 right-0 z-[80] h-full flex flex-col justify-center items-end pr-6 sm:pr-10 pointer-events-none"
        style={{ width: 'min(420px, 90vw)' }}
      >
        {/* Close Button */}
        <button
          onClick={closeMenu}
          className="absolute top-6 right-6 z-[90] w-12 h-12 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110 pointer-events-auto"
          style={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            color: baseColor,
            opacity: isOpen ? 1 : 0,
            pointerEvents: isOpen ? 'auto' : 'none',
          }}
          aria-label="Close navigation menu"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <line x1="1" y1="1" x2="15" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="15" y1="1" x2="1" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Cards */}
        <div className="flex flex-col gap-4 w-full">
          {items.map((item, index) => (
            <div
              key={item.label}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="rounded-2xl p-6 sm:p-8 pointer-events-auto cursor-pointer transition-transform duration-200 hover:scale-[1.02] shadow-2xl"
              style={{
                backgroundColor: item.bgColor,
                color: item.textColor,
                opacity: 0,
              }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight">
                {item.label}
              </h3>
              <div className="flex flex-wrap gap-3">
                {item.links.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleLinkClick(link.href)}
                    aria-label={link.ariaLabel}
                    className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
                    style={{
                      backgroundColor: `rgba(255,255,255,0.12)`,
                      color: item.textColor,
                      backdropFilter: 'blur(4px)',
                    }}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardNav;
