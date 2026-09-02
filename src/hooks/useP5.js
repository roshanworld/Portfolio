// import { useEffect, useState } from 'react';

// const P5_SRC = 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.4/p5.min.js';

// function loadP5Script(onReady) {
//   if (typeof window === 'undefined') return;

//   if (window.p5) {
//     onReady();
//     return;
//   }

//   const existing = document.querySelector('script[data-p5-cdn]');
//   if (existing) {
//     existing.addEventListener('load', onReady);
//     return;
//   }

//   const script = document.createElement('script');
//   script.src = P5_SRC;
//   script.async = true;
//   script.dataset.p5Cdn = 'true';
//   script.onload = onReady;
//   document.body.appendChild(script);
// }

// /**
//  * Loads the p5.js CDN script (once, no matter how many components ask for it)
//  * and reports back whether window.p5 is ready to use.
//  *
//  * Used by both StackCanvas and BugSquashGame so the loading logic
//  * only lives in one place.
//  */
// export default function useP5Ready() {
//   const [ready, setReady] = useState(typeof window !== 'undefined' && !!window.p5);

//   useEffect(() => {
//     if (ready) return;
//     loadP5Script(() => setReady(true));
//   }, [ready]);

//   return ready;
// }
