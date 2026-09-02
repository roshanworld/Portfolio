// import React, { useEffect, useRef } from 'react';
// // import useP5Ready from '../hooks/useP5';
// import p5 from 'p5'

// const NODE_LABELS = ['React', 'Node.js', 'Supabase', 'Python', 'Tailwind', 'Socket.IO', 'PostgreSQL', 'Express'];

// export default function StackCanvas() {
//   const hostRef = useRef(null);
//   const instanceRef = useRef(null);
//   const ready = useP5Ready();

//   useEffect(() => {
//     if (!ready || !hostRef.current || !p5) return;

//     const sketch = (p) => {
//       let nodes = [];
//       const colors = ['#E3B23C', '#5FD9A4'];

//       const size = () => ({
//         w: hostRef.current ? hostRef.current.clientWidth : 400,
//         h: hostRef.current ? hostRef.current.clientHeight : 400,
//       });

//       p.setup = () => {
//         const { w, h } = size();
//         p.createCanvas(w, h);
//         nodes = NODE_LABELS.map((label, i) => ({
//           label,
//           x: p.random(w),
//           y: p.random(h),
//           vx: p.random(-0.2, 0.2),
//           vy: p.random(-0.2, 0.2),
//           color: colors[i % 2],
//         }));
//       };

//       p.draw = () => {
//         p.background(10, 13, 19, 55);
//         const hasMouse = p.mouseX > 0 && p.mouseY > 0 && p.mouseX < p.width && p.mouseY < p.height;

//         for (const n of nodes) {
//           if (hasMouse) {
//             const dx = n.x - p.mouseX;
//             const dy = n.y - p.mouseY;
//             const d = Math.sqrt(dx * dx + dy * dy) || 0.001;
//             if (d < 120) {
//               const force = ((120 - d) / 120) * 0.6;
//               n.vx += (dx / d) * force;
//               n.vy += (dy / d) * force;
//             }
//           }
//           n.vx *= 0.95;
//           n.vy *= 0.95;
//           n.x += n.vx;
//           n.y += n.vy;

//           if (n.x < 20 || n.x > p.width - 20) n.vx *= -1;
//           if (n.y < 20 || n.y > p.height - 20) n.vy *= -1;
//           n.x = p.constrain(n.x, 20, p.width - 20);
//           n.y = p.constrain(n.y, 20, p.height - 20);
//         }

//         p.strokeWeight(1);
//         for (let i = 0; i < nodes.length; i++) {
//           for (let j = i + 1; j < nodes.length; j++) {
//             const d = p.dist(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
//             if (d < 170) {
//               p.stroke(139, 147, 167, p.map(d, 0, 170, 80, 0));
//               p.line(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
//             }
//           }
//         }

//         p.noStroke();
//         p.textSize(11);
//         p.textFont('monospace');
//         p.textAlign(p.CENTER, p.CENTER);
//         for (const n of nodes) {
//           p.fill(n.color);
//           p.circle(n.x, n.y, 6);
//           p.fill(236, 232, 223, 210);
//           p.text(n.label, n.x, n.y - 14);
//         }
//       };

//       p.windowResized = () => {
//         const { w, h } = size();
//         p.resizeCanvas(w, h);
//       };
//     };

//     instanceRef.current = new p5(sketch, hostRef.current);
//     return () => {
//       if (instanceRef.current) {
//         instanceRef.current.remove();
//         instanceRef.current = null;
//       }
//     };
//   }, [ready]);

//   return (
//     <div ref={hostRef} className="w-full h-72 md:h-full min-h-[280px]" style={{ background: 'var(--bg)' }}>
//       {!ready && (
//         <div className="w-full h-full flex items-center justify-center">
//           <span className="font-mono text-xs" style={{ color: 'var(--text-dim)' }}>
//             loading sketch…
//           </span>
//         </div>
//       )}
//     </div>
//   );
// }


import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const NODE_LABELS = ['React', 'Node.js', 'Supabase', 'Python', 'Tailwind', 'Socket.IO', 'PostgreSQL', 'Express'];

export default function StackCanvas() {
  const hostRef = useRef(null);
  const instanceRef = useRef(null);

  useEffect(() => {
    if (!hostRef.current) return;

    const sketch = (p) => {
      let nodes = [];
      const colors = ['#E3B23C', '#5FD9A4'];

      const size = () => ({
        w: hostRef.current ? hostRef.current.clientWidth : 400,
        h: hostRef.current ? hostRef.current.clientHeight : 400,
      });

      p.setup = () => {
        const { w, h } = size();
        p.createCanvas(w, h);
        nodes = NODE_LABELS.map((label, i) => ({
          label,
          x: p.random(w),
          y: p.random(h),
          vx: p.random(-0.2, 0.2),
          vy: p.random(-0.2, 0.2),
          color: colors[i % 2],
        }));
      };

      p.draw = () => {
        p.background(10, 13, 19, 55);
        const hasMouse = p.mouseX > 0 && p.mouseY > 0 && p.mouseX < p.width && p.mouseY < p.height;

        for (const n of nodes) {
          if (hasMouse) {
            const dx = n.x - p.mouseX;
            const dy = n.y - p.mouseY;
            const d = Math.sqrt(dx * dx + dy * dy) || 0.001;
            if (d < 120) {
              const force = ((120 - d) / 120) * 0.6;
              n.vx += (dx / d) * force;
              n.vy += (dy / d) * force;
            }
          }
          n.vx *= 0.95;
          n.vy *= 0.95;
          n.x += n.vx;
          n.y += n.vy;

          if (n.x < 20 || n.x > p.width - 20) n.vx *= -1;
          if (n.y < 20 || n.y > p.height - 20) n.vy *= -1;
          n.x = p.constrain(n.x, 20, p.width - 20);
          n.y = p.constrain(n.y, 20, p.height - 20);
        }

        p.strokeWeight(1);
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const d = p.dist(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            if (d < 170) {
              p.stroke(139, 147, 167, p.map(d, 0, 170, 80, 0));
              p.line(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            }
          }
        }

        p.noStroke();
        p.textSize(11);
        p.textFont('monospace');
        p.textAlign(p.CENTER, p.CENTER);
        for (const n of nodes) {
          p.fill(n.color);
          p.circle(n.x, n.y, 6);
          p.fill(236, 232, 223, 210);
          p.text(n.label, n.x, n.y - 14);
        }
      };

      p.windowResized = () => {
        const { w, h } = size();
        p.resizeCanvas(w, h);
      };
    };

    instanceRef.current = new p5(sketch, hostRef.current);
    return () => {
      if (instanceRef.current) {
        instanceRef.current.remove();
        instanceRef.current = null;
      }
    };
  }, []);

  return <div ref={hostRef} className="w-full h-72 md:h-full min-h-[280px]" style={{ background: 'var(--bg)' }} />;
}