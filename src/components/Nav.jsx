// import React from 'react';
// import { Menu, X } from 'lucide-react';
// import { useNav } from '../Context/Navcontext';

// const LINKS = [
//   { href: '#work', label: 'work' },
//   { href: '#skills', label: 'skills' },
//   { href: '#play', label: 'play' },
//   { href: '#contact', label: 'contact' },
// ];

// export default function Nav() {
//   const { mobileOpen, toggleMenu, closeMenu } = useNav();

//   return (
//     <header
//       className="sticky top-0 z-50 backdrop-blur border-b hairline"
//       style={{ background: 'rgba(10,13,19,0.75)' }}
//     >
//       <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
//         <a href="#top" className="font-display text-base tracking-tight" onClick={closeMenu}>
//           Roshan
//         </a>
//         <nav className="hidden sm:flex items-center gap-8 font-mono text-xs" style={{ color: 'var(--text-dim)' }}>
//           {LINKS.map((link) => (
//             <a key={link.href} href={link.href} className="link-underline pb-1" style={{ color: 'inherit' }}>
//               {link.label}
//             </a>
//           ))}
//         </nav>
//         <button
//           className="sm:hidden p-2 -mr-2"
//           aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
//           onClick={toggleMenu}
//           style={{ color: 'var(--text)' }}
//         >
//           {mobileOpen ? <X size={20} /> : <Menu size={20} />}
//         </button>
//       </div>

//       {mobileOpen && (
//         <nav
//           className="sm:hidden flex flex-col gap-1 px-6 pb-5 border-t hairline font-mono text-sm"
//           style={{ color: 'var(--text-dim)',
//                     background: 'var(--bg)'           
//            }}
//         >
//           {LINKS.map((link, i) => (
//             <a
//               key={link.href}
//               href={link.href}
//               className={`py-3 ${i < LINKS.length - 1 ? 'border-b hairline' : ''}`}
//               style={{ color: 'inherit' }}
//               onClick={closeMenu}
//             >
//               {link.label}
//             </a>
//           ))}
//         </nav>
//       )}
//     </header>
//   );
// }


import React, { useEffect } from 'react';
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

  // Lock body scroll while the mobile menu is open. Without this, a
  // swipe on the open menu can still scroll the page behind it on
  // iOS Safari, which is a common source of "the menu feels broken
  // on my phone" reports.
  useEffect(() => {
    if (!mobileOpen) return undefined;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [mobileOpen]);

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur border-b hairline"
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

        {/* 44x44 touch target (Apple/Google's minimum), not just the
            20px icon with a bit of padding. */}
        <button
          type="button"
          className="sm:hidden flex items-center justify-center -mr-2"
          style={{ color: 'var(--text)', width: 44, height: 44, touchAction: 'manipulation' }}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={toggleMenu}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Full-height overlay (not an inline dropdown) so the open menu
          owns all touch input below the header — a swipe never leaks
          through to scroll the page behind it — and every link gets a
          large, unambiguous tap target. */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          className="sm:hidden fixed inset-x-0 top-16 bottom-0 overflow-y-auto"
          style={{ background: 'var(--bg)' }}
        >
          <nav className="flex flex-col font-mono text-base px-6" style={{ color: 'var(--text-dim)' }}>
            {LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className={`py-4 ${i < LINKS.length - 1 ? 'border-b hairline' : ''}`}
                style={{ color: 'inherit', touchAction: 'manipulation' }}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}