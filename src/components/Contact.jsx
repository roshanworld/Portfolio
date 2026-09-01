import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 md:px-10 py-16 border-t hairline">
      <h2 className="font-display text-2xl mb-4">Get in touch</h2>
      <p className="max-w-md leading-relaxed mb-8" style={{ color: 'var(--text-dim)' }}>
        Open to internships, hackathon teams, and freelance builds. The fastest way to reach me
        is email.
      </p>
      <div className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm">
        <a href="mailto:you@example.com" className="link-underline pb-1" style={{ color: 'var(--text)' }}>
          you@example.com
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline pb-1"
          style={{ color: 'var(--text)' }}
        >
          github
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline pb-1"
          style={{ color: 'var(--text)' }}
        >
          linkedin
        </a>
      </div>
    </section>
  );
}
