// import React, { useEffect, useRef, useState } from 'react';
// // import useP5Ready from '../hooks/useP5';
// import p5 from 'p5'

// const BUG_LABELS = ['undefined', 'NaN', '404', 'null ptr', 'timeout', 'CORS', 'race cond.', 'leak'];

// export default function BugSquashGame() {
//   const hostRef = useRef(null);
//   const instanceRef = useRef(null);
//   const ready = useP5Ready();
//   const [hud, setHud] = useState({ score: 0, lives: 3, over: false });
//   const hudRef = useRef(hud);
//   hudRef.current = hud;

//   useEffect(() => {
//     if (!ready || !hostRef.current || !p5) return;

//     const sketch = (p) => {
//       let paddleX = 0;
//       let paddleW = 70;
//       let paddleH = 10;
//       let bugs = [];
//       let keys = { left: false, right: false };
//       let touchX = null;

//       const size = () => ({
//         w: hostRef.current ? hostRef.current.clientWidth : 400,
//         h: hostRef.current ? hostRef.current.clientHeight : 320,
//       });

//       const resetGame = () => {
//         bugs = [];
//         setHud({ score: 0, lives: 5, over: false });
//       };

//       p.setup = () => {
//         const { w, h } = size();
//         p.createCanvas(w, h);
//         p.canvas.style.display = 'block'; //added
//         paddleW = w < 420 ? 54 : 70;
//         paddleX = w / 2;
//         resetGame();
//       };

//       p.keyPressed = () => {
//         if (p.keyCode === p.LEFT_ARROW) keys.left = true;
//         if (p.keyCode === p.RIGHT_ARROW) keys.right = true;
//       };
//       p.keyReleased = () => {
//         if (p.keyCode === p.LEFT_ARROW) keys.left = false;
//         if (p.keyCode === p.RIGHT_ARROW) keys.right = false;
//       };

//       p.touchMoved = () => {
//         if (p.touches && p.touches.length > 0) {
//           touchX = p.touches[0].x;
//         }
//         // return false; // stop the page from scrolling while playing
//       };
//       p.touchStarted = () => {
//         if (hudRef.current.over) {
//           resetGame();
//         }
//         if (p.touches && p.touches.length > 0) {
//           touchX = p.touches[0].x;
//         }
//         // return false;
//       };
//       p.touchEnded = () => {
//         touchX = null;
//         return false;
//       };

//       p.draw = () => {
//         p.background(10, 13, 19);

//         if (hudRef.current.over) {
//           p.noStroke();
//           p.fill(236, 232, 223);
//           p.textFont('monospace');
//           p.textAlign(p.CENTER, p.CENTER);
//           p.textSize(13);
//           p.text('game over — click to retry', p.width / 2, p.height / 2);
//           return;
//         }

//         const mouseValid = p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY < p.height;
//         const targetX = touchX !== null ? touchX : mouseValid ? p.mouseX : paddleX;
//         paddleX = p.lerp(paddleX, targetX, 0.25);
//         if (keys.left) paddleX -= 5;
//         if (keys.right) paddleX += 5;
//         paddleX = p.constrain(paddleX, paddleW / 2, p.width - paddleW / 2);

//         if (p.frameCount % 55 === 0) {
//           bugs.push({
//             x: p.random(20, p.width - 20),
//             y: -10,
//             vy: p.random(1.4, 2.4),
//             label: p.random(BUG_LABELS),
//             color: p.random(['#E3B23C', '#5FD9A4']),
//           });
//         }

//         p.noStroke();
//         p.textFont('monospace');
//         p.textSize(10);
//         p.textAlign(p.CENTER, p.CENTER);

//         for (let i = bugs.length - 1; i >= 0; i--) {
//           const b = bugs[i];
//           b.y += b.vy;

//           const caught =
//             b.y > p.height - 22 - paddleH &&
//             b.y < p.height - 10 &&
//             Math.abs(b.x - paddleX) < paddleW / 2;

//           if (caught) {
//             setHud((h) => ({ ...h, score: h.score + 1 }));
//             bugs.splice(i, 1);
//             continue;
//           }
//           if (b.y > p.height) {
//             bugs.splice(i, 1);
//             setHud((h) => {
//               const lives = h.lives - 1;
//               return { ...h, lives, over: lives <= 0 };
//             });
//             continue;
//           }

//           p.fill(b.color);
//           p.circle(b.x, b.y, 12);
//           p.fill(236, 232, 223, 200);
//           p.text(b.label, b.x, b.y - 12);
//         }

//         p.fill('#ECE8DF');
//         p.rect(paddleX - paddleW / 2, p.height - 18, paddleW, paddleH, 2);

//         p.fill(139, 147, 167);
//         p.textAlign(p.LEFT, p.TOP);
//         p.text(`score ${hudRef.current.score}`, 10, 10);
//         p.textAlign(p.RIGHT, p.TOP);
//         p.text(`lives ${hudRef.current.lives}`, p.width - 10, 10);
//       };

//       p.mousePressed = () => {
//         if (hudRef.current.over) resetGame();
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
//     <div ref={hostRef} className="w-full h-72 md:h-80" style={{ background: 'var(--bg)', position: 'relative' }}>
//       {!ready && (
//         <div className="w-full h-full flex items-center justify-center">
//           <span className="font-mono text-xs" style={{ color: 'var(--text-dim)' }}>
//             loading game…
//           </span>
//         </div>
//       )}
//     </div>
//   );
// }



import React, { useEffect, useRef, useState } from 'react';
import p5 from 'p5';

const BUG_LABELS = ['undefined', 'NaN', '404', 'null ptr', 'timeout', 'CORS', 'race cond.', 'leak'];

export default function BugSquashGame() {
  const hostRef = useRef(null);
  const instanceRef = useRef(null);
  const [hud, setHud] = useState({ score: 0, lives: 3, over: false });
  const hudRef = useRef(hud);
  hudRef.current = hud;

  useEffect(() => {
    if (!hostRef.current) return;

    const sketch = (p) => {
      let paddleX = 0;
      let paddleW = 70;
      let paddleH = 10;
      let bugs = [];
      let keys = { left: false, right: false };
      let touchX = null;

      const size = () => ({
        w: hostRef.current ? hostRef.current.clientWidth : 400,
        h: hostRef.current ? hostRef.current.clientHeight : 320,
      });

      const resetGame = () => {
        bugs = [];
        setHud({ score: 0, lives: 3, over: false });
      };

      p.setup = () => {
        const { w, h } = size();
        const canvas = p.createCanvas(w, h);
        // "Don't scroll/zoom the page from this element" — belt-and-braces
        // alongside the touchMoved handlers below, since some mobile
        // browsers only fully honor preventDefault() when it's backed
        // by this CSS property too.
        canvas.elt.style.touchAction = 'none';
        paddleW = w < 420 ? 54 : 70;
        paddleX = w / 2;
        resetGame();
      };

      p.keyPressed = () => {
        if (p.keyCode === p.LEFT_ARROW) keys.left = true;
        if (p.keyCode === p.RIGHT_ARROW) keys.right = true;
      };
      p.keyReleased = () => {
        if (p.keyCode === p.LEFT_ARROW) keys.left = false;
        if (p.keyCode === p.RIGHT_ARROW) keys.right = false;
      };

      p.touchMoved = () => {
        if (p.touches && p.touches.length > 0) touchX = p.touches[0].x;
        return false;
      };
      p.touchStarted = () => {
        if (hudRef.current.over) resetGame();
        if (p.touches && p.touches.length > 0) touchX = p.touches[0].x;
        return false;
      };
      p.touchEnded = () => {
        touchX = null;
        return false;
      };

      p.draw = () => {
        p.background(10, 13, 19);

        if (hudRef.current.over) {
          p.noStroke();
          p.fill(236, 232, 223);
          p.textFont('monospace');
          p.textAlign(p.CENTER, p.CENTER);
          p.textSize(13);
          const retryLabel = 'ontouchstart' in window ? 'game over — tap to retry' : 'game over — click to retry';
          p.text(retryLabel, p.width / 2, p.height / 2);
          return;
        }

        const mouseValid = p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY < p.height;
        const targetX = touchX !== null ? touchX : mouseValid ? p.mouseX : paddleX;
        paddleX = p.lerp(paddleX, targetX, 0.25);
        if (keys.left) paddleX -= 5;
        if (keys.right) paddleX += 5;
        paddleX = p.constrain(paddleX, paddleW / 2, p.width - paddleW / 2);

        if (p.frameCount % 55 === 0) {
          bugs.push({
            x: p.random(20, p.width - 20),
            y: -10,
            vy: p.random(1.4, 2.4),
            label: p.random(BUG_LABELS),
            color: p.random(['#E3B23C', '#5FD9A4']),
          });
        }

        p.noStroke();
        p.textFont('monospace');
        p.textSize(10);
        p.textAlign(p.CENTER, p.CENTER);

        for (let i = bugs.length - 1; i >= 0; i--) {
          const b = bugs[i];
          b.y += b.vy;

          const caught =
            b.y > p.height - 22 - paddleH &&
            b.y < p.height - 10 &&
            Math.abs(b.x - paddleX) < paddleW / 2;

          if (caught) {
            setHud((h) => ({ ...h, score: h.score + 1 }));
            bugs.splice(i, 1);
            continue;
          }
          if (b.y > p.height) {
            bugs.splice(i, 1);
            setHud((h) => {
              const lives = h.lives - 1;
              return { ...h, lives, over: lives <= 0 };
            });
            continue;
          }

          p.fill(b.color);
          p.circle(b.x, b.y, 12);
          p.fill(236, 232, 223, 200);
          p.text(b.label, b.x, b.y - 12);
        }

        p.fill('#ECE8DF');
        p.rect(paddleX - paddleW / 2, p.height - 18, paddleW, paddleH, 2);

        p.fill(139, 147, 167);
        p.textAlign(p.LEFT, p.TOP);
        p.text(`score ${hudRef.current.score}`, 10, 10);
        p.textAlign(p.RIGHT, p.TOP);
        p.text(`lives ${hudRef.current.lives}`, p.width - 10, 10);
      };

      p.mousePressed = () => {
        if (hudRef.current.over) resetGame();
      };

      p.windowResized = () => {
        const { w, h } = size();
        p.resizeCanvas(w, h);
        paddleW = w < 420 ? 54 : 70;
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

  return (
    <div
      ref={hostRef}
      className="w-full h-72 md:h-80"
      style={{ background: 'var(--bg)', touchAction: 'none' }}
    />
  );
}