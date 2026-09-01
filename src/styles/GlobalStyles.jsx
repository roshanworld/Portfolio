import React from 'react';

export default function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
      :root {
        --bg: #0A0D13;
        --surface: #10141C;
        --border: #232838;
        --text: #ECE8DF;
        --text-dim: #8B93A7;
        --accent: #E3B23C;
        --accent2: #5FD9A4;
      }
      .font-display { font-family: 'Space Grotesk', sans-serif; }
      .font-mono { font-family: 'JetBrains Mono', monospace; }
      .hairline { border-color: var(--border); }
      .link-underline {
        background-image: linear-gradient(var(--accent), var(--accent));
        background-position: 0 100%;
        background-repeat: no-repeat;
        background-size: 0% 1px;
        transition: background-size 0.25s ease;
      }
      .link-underline:hover { background-size: 100% 1px; }
      .tag-chip { border: 1px solid var(--border); color: var(--text-dim); }
      .tag-chip-accent { border: 1px solid var(--accent); color: var(--accent); }
      ::selection { background: var(--accent); color: #0A0D13; }
    `}</style>
  );
}
