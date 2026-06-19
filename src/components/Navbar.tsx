'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    },
    [isOpen]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (isOpen && menuRef.current) {
      menuRef.current.querySelector('a')?.focus();
    }
  }, [isOpen]);

  const navLinks = [
    { href: '#projects',       label: 'Projects'       },
    { href: '#experience',     label: 'Experience'     },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact',        label: 'Contact'        },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-card/95 backdrop-blur-lg border-b border-line shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            href="/"
            className="text-base font-bold text-fg hover:text-accent transition-colors font-mono"
          >
            jack<span className="text-accent">.</span>dev
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm text-muted hover:text-fg hover:bg-card-2 rounded-md transition-all duration-150 font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="ml-3 pl-3 border-l border-line flex items-center gap-2">
              <ThemeToggle />
              <a
                href="/jacktilfordcareycv.docx"
                download
                className="px-4 py-1.5 bg-accent text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity active:scale-95"
              >
                CV
              </a>
            </div>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              ref={buttonRef}
              className="text-fg text-xl p-2 touch-target"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div
            ref={menuRef}
            className="md:hidden pb-4 border-t border-line mt-1"
            role="menu"
          >
            <div className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  role="menuitem"
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2.5 text-sm text-muted hover:text-fg hover:bg-card-2 rounded-md transition-all font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/jacktilfordcareycv.docx"
                download
                role="menuitem"
                className="mt-2 px-3 py-2.5 bg-accent text-white rounded-lg text-sm font-medium text-center touch-target"
              >
                Download CV
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
