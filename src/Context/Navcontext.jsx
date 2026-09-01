import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';

const NavContext = createContext(null);

/**
 * Wraps the app and owns the mobile-nav open/closed state so any
 * component (the header, an in-page link, a section) can read or
 * change it without it being passed down as props.
 */
export function NavProvider({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const openMenu = useCallback(() => setMobileOpen(true), []);
  const closeMenu = useCallback(() => setMobileOpen(false), []);
  const toggleMenu = useCallback(() => setMobileOpen((v) => !v), []);

  const value = useMemo(
    () => ({ mobileOpen, openMenu, closeMenu, toggleMenu }),
    [mobileOpen, openMenu, closeMenu, toggleMenu]
  );

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
}

export function useNav() {
  const ctx = useContext(NavContext);
  if (!ctx) {
    throw new Error('useNav must be used within a NavProvider');
  }
  return ctx;
}
