import React from 'react';

const LINKS = [
  // { href: '#top', label: 'home' },
  { href: '#work', label: 'work' },
  { href: '#skills', label: 'skills' },
  // { href: '#play', label: 'play' },
  { href: '#contact', label: 'contact' },
];

export default function Nav() {
  return (
    <header
      className="sticky top-0 z-50 backdrop-blur border-b hairline"
      style={{ background: 'rgba(10,13,19,0.75)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 h-16 flex items-center">
        <a
          href="#top"
          className="font-display text-base tracking-tight shrink-0 pr-4"
          style={{ color: 'var(--text)' }}
        >
          Roshan
        </a>

        {/* No toggle, no hidden state — the links themselves are always
            in the DOM and always tappable. On narrow screens they
            become a horizontally-scrollable row instead of collapsing
            behind a hamburger, so there's no click handler that can
            silently fail on a phone. */}
        <nav
          className="flex-1 flex items-center gap-1 overflow-x-auto"
          style={{
            scrollbarWidth: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs sm:text-sm whitespace-nowrap px-3 py-2 rounded-md shrink-0"
              style={{ color: 'var(--text-dim)', touchAction: 'manipulation' }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
