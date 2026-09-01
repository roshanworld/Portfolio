import React from 'react';
import StackCanvas from './StackCanvas';

export default function Hero() {
  return (
    <>
      <section
        id="top"
        className="max-w-6xl mx-auto px-6 md:px-10 py-10 sm:py-14 md:py-20 grid md:grid-cols-2 gap-8 md:gap-10 items-center"
      >
        <div>
          <p className="font-mono text-xs mb-5" style={{ color: 'var(--text-dim)' }}>
            Computer Science &amp; Engineering Student · Full Stack Web Developer
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.15] mb-6">
            I build the tools my classmates needed and didn't have.
          </h1>
          <p className="text-base leading-relaxed max-w-md mb-8" style={{ color: 'var(--text-dim)' }}>
            Interested in building practical web applications and understanding how frontend,
            backend, APIs, databases, and real-time systems work together.
          </p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            <a
              href="#work"
              className="font-mono text-sm px-5 py-3 border hairline hover:border-[var(--accent)] transition-colors"
              style={{ color: 'var(--text)' }}
            >
              See the work
            </a>
            <a href="#contact" className="font-mono text-sm link-underline pb-1" style={{ color: 'var(--text-dim)' }}>
              Say hello
            </a>
          </div>
        </div>
        <div className="border hairline h-72 md:h-96">
          <StackCanvas />
        </div>
      </section>

      <section className=" scroll-mt-20 max-w-6xl mx-auto px-6 md:px-10 py-10 border-t hairline">
        <p className="max-w-2xl leading-relaxed" style={{ color: 'var(--text-dim)' }}>
          Seeking a web development internship where I can work on real-world applications,
          improve my engineering skills, and contribute to meaningful products.
        </p>
      </section>
    </>
  );
}
