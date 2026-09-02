// import React from 'react';
// import { SKILLS, LEARNING } from '../data/skills';

// export default function Skills() {
//   return (
//     <section id="skills" className="max-w-6xl mx-auto px-6 md:px-10 py-10 border-t hairline">
//       <h2 className="font-display text-2xl mb-10">Stack</h2>
//       <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
//         {SKILLS.map((group) => (
//           <div key={group.group}>
//             <p className="font-mono text-xs mb-4" style={{ color: 'var(--accent)' }}>
//               {group.group}
//             </p>
//             <ul className="space-y-2">
//               {group.items.map((item) => (
//                 <li key={item} className="text-sm" style={{ color: 'var(--text-dim)' }}>
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//       <p className="font-mono text-xs mb-4" style={{ color: 'var(--accent)' }}>
//         Currently learning
//       </p>
//       <div className="flex flex-wrap gap-2">
//         {LEARNING.map((item) => (
//           <span key={item} className="tag-chip font-mono text-xs px-2 py-1">
//             {item}
//           </span>
//         ))}
//       </div>
//     </section>
//   );
// }




import React from 'react';
import { SKILLS, LEARNING } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 max-w-6xl mx-auto px-6 md:px-10 py-10 border-t hairline">
      <h2 className="font-display text-2xl mb-10">Stack</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 items-start gap-x-6 gap-y-8 sm:gap-y-10 mb-10 sm:mb-12">
        {SKILLS.map((group) => (
          <div key={group.group} className="min-w-0">
            <p className="font-mono text-xs mb-4" style={{ color: 'var(--accent)' }}>
              {group.group}
            </p>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-sm break-words" style={{ color: 'var(--text-dim)' }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="font-mono text-xs mb-4" style={{ color: 'var(--accent)' }}>
        Currently learning
      </p>
      <div className="flex flex-wrap gap-2">
        {LEARNING.map((item) => (
          <span key={item} className="tag-chip font-mono text-xs px-2 py-1">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}