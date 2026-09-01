import React from 'react';
import { Menu, X } from 'lucide-react';
import { useNav } from '../Context/Navcontext';

const LINKS = [
  { href: '#work', label: 'work' },
  { href: '#skills', label: 'skills' },
  { href: '#play', label: 'play' },
  { href: '#contact', label: 'contact' },
];

export default function Nav() {
  const { mobileOpen, toggleMenu, closeMenu } = useNav();

  return (
    <header
      className="sticky top-0 z-20 backdrop-blur border-b hairline"
      style={{ background: 'rgba(10,13,19,0.75)' }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-base tracking-tight" onClick={closeMenu}>
          Roshan
        </a>
        <nav className="hidden sm:flex items-center gap-8 font-mono text-xs" style={{ color: 'var(--text-dim)' }}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="link-underline pb-1" style={{ color: 'inherit' }}>
              {link.label}
            </a>
          ))}
        </nav>
        <button
          className="sm:hidden p-2 -mr-2"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={toggleMenu}
          style={{ color: 'var(--text)' }}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          className="sm:hidden flex flex-col gap-1 px-6 pb-5 border-t hairline font-mono text-sm"
          style={{ color: 'var(--text-dim)' }}
        >
          {LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`py-3 ${i < LINKS.length - 1 ? 'border-b hairline' : ''}`}
              style={{ color: 'inherit' }}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
