import React from 'react';
import { NavProvider } from './Context/Navcontext';
import GlobalStyles from './styles/GlobalStyles';

import Nav from './components/Nav';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import BugSquashGame from './components/BugSquashGame';
import Contact from './components/Contact';

export default function App() {
  return (
    <NavProvider>
      <div
        className="min-h-screen w-full"
        style={{ background: 'var(--bg)', color: 'var(--text)', fontFamily: "'Inter', sans-serif" }}
      >
        <GlobalStyles />

        <Nav />
        <Hero />
        <Projects />
        <Skills />

        <section id="play" className="max-w-6xl mx-auto px-6 md:px-10 py-10 border-t hairline">
          <h2 className="font-display text-2xl mb-3">Squash the bug</h2>
          <p className="max-w-md leading-relaxed mb-6" style={{ color: 'var(--text-dim)' }}>
            A small p5.js break. Move the paddle with your mouse or the arrow keys and catch the
            bugs before they hit the console.
          </p>
          <div className="border hairline">
            <BugSquashGame />
          </div>
        </section>

        <Contact />

        <footer className="max-w-6xl mx-auto px-6 md:px-10 py-8 border-t hairline">
          <p className="font-mono text-xs" style={{ color: 'var(--text-dim)' }}>
            © {new Date().getFullYear()} Roshan
          </p>
        </footer>
      </div>
    </NavProvider>
  );
}
