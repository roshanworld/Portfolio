import React from 'react';
import { PROJECTS } from '../data/projects';

export default function Projects() {
  return (
    <section id="work" className="max-w-6xl mx-auto px-6 md:px-10 py-10 border-t hairline">
      <h2 className="font-display text-2xl mb-10">Selected work</h2>
      <div className="flex flex-col">
        {PROJECTS.map((proj) => (
          <div
            key={proj.index}
            className="grid md:grid-cols-[auto_1fr] gap-4 md:gap-10 py-8 border-t hairline first:border-t-0"
          >
            <div className="flex md:flex-col items-baseline md:items-start gap-3 md:gap-2 md:w-28">
              <span className="font-mono text-sm" style={{ color: 'var(--accent)' }}>
                {proj.index}
              </span>
              <span className="font-mono text-xs" style={{ color: 'var(--text-dim)' }}>
                {proj.tag}
              </span>
            </div>
            <div>
              <h3 className="font-display text-xl mb-3">{proj.title}</h3>
              <p className="leading-relaxed max-w-2xl mb-4" style={{ color: 'var(--text-dim)' }}>
                {proj.description}
              </p>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {proj.stack.map((s) => (
                  <span key={s} className="tag-chip-accent font-mono text-xs px-2 py-1">
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {proj.features.map((f) => (
                  <span key={f} className="tag-chip font-mono text-xs px-2 py-1">
                    {f}
                  </span>
                ))}
              </div>
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs link-underline pb-1"
                  style={{ color: 'var(--accent2)' }}
                >
                  {proj.linkLabel}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
