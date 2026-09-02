// import React from 'react';

// export default function Contact() {
//   return (
//     <section id="contact" className="max-w-6xl mx-auto px-6 md:px-10 py-16 border-t hairline">
//       <h2 className="font-display text-2xl mb-4">Get in touch</h2>
//       <p className="max-w-md leading-relaxed mb-8" style={{ color: 'var(--text-dim)' }}>
//         Open to internships, hackathon teams, and freelance builds. The fastest way to reach me
//         is email.
//       </p>
//       <div className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm">
//         <a href="mailto:you@example.com" className="link-underline pb-1" style={{ color: 'var(--text)' }}>
//           you@example.com
//         </a>
//         <a
//           href="https://github.com/yourusername"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="link-underline pb-1"
//           style={{ color: 'var(--text)' }}
//         >
//           github
//         </a>
//         <a
//           href="https://linkedin.com/in/yourusername"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="link-underline pb-1"
//           style={{ color: 'var(--text)' }}
//         >
//           linkedin
//         </a>
//       </div>
//     </section>
//   );
// }



import React, { useState } from 'react';

const EMAIL = 'innovatewithroshan@gmail.com';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || 'your site'}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ''}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const inputStyle = {
    background: 'var(--surface)',
    borderColor: 'var(--border)',
    color: 'var(--text)',
  };

  return (
    <section id="contact" className="scroll-mt-20 max-w-6xl mx-auto px-6 md:px-10 py-16 border-t hairline">
      <h2 className="font-display text-2xl mb-4">Get in touch</h2>
      <p className="max-w-md leading-relaxed mb-8" style={{ color: 'var(--text-dim)' }}>
        Open to internships, hackathon teams, and freelance builds. Send a message and it'll open
        straight in your email app, addressed to me.
      </p>

      <form onSubmit={handleSubmit} className="max-w-md space-y-4 mb-10">
        <div>
          <label htmlFor="name" className="block font-mono text-xs mb-2" style={{ color: 'var(--text-dim)' }}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full text-base px-4 py-3 rounded-lg border outline-none focus:border-[var(--accent)] transition-colors"
            style={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-mono text-xs mb-2" style={{ color: 'var(--text-dim)' }}>
            Your email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full text-base px-4 py-3 rounded-lg border outline-none focus:border-[var(--accent)] transition-colors"
            style={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-mono text-xs mb-2" style={{ color: 'var(--text-dim)' }}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={form.message}
            onChange={handleChange}
            placeholder="What are you looking to build?"
            className="w-full text-base px-4 py-3 rounded-lg border outline-none focus:border-[var(--accent)] transition-colors resize-none"
            style={inputStyle}
          />
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto font-mono text-sm px-6 py-3 border hairline hover:border-[var(--accent)] transition-colors"
          style={{ color: 'var(--text)', touchAction: 'manipulation' }}
        >
          Send message
        </button>
      </form>

      <div className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm">
        <a href={`mailto:${EMAIL}`} className="link-underline pb-1 inline-block py-1" style={{ color: 'var(--text)' }}>
          {EMAIL}
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline pb-1 inline-block py-1"
          style={{ color: 'var(--text)' }}
        >
          github
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline pb-1 inline-block py-1"
          style={{ color: 'var(--text)' }}
        >
          linkedin
        </a>
      </div>
    </section>
  );
}