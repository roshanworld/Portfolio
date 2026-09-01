export const PROJECTS = [
  {
    index: '01',
    title: 'Dreamysha',
    tag: 'Live',
    description:
      'Visual design and creator marketplace. Upload a photo of a room, desk, or garden and get an AI-redesigned version back, browse design inspiration from other creators, and buy the products used to pull a look together.',
    stack: ['React', 'Tailwind CSS', 'Supabase', 'AI'],
    features: [
      'Space design inspiration',
      'AI image redesign',
      'Product recommendations',
      'Creator profiles',
      'Designer and vendor discovery',
      'Product search',
      'Design and product uploads',
      'Product stories',
      'Creator onboarding',
      'Likes and saved designs',
      'Shopping cart',
      'External product links',
      'Admin dashboard',
    ],
    link: 'https://dreamysha.vercel.app',
    linkLabel: 'dreamysha.vercel.app',
  },
  {
    index: '02',
    title: 'Real-Time Robot/Car Controller',
    tag: 'Hardware',
    description:
      'A web-based real-time vehicle control system. A browser page sends movement commands over WebSockets to a Node.js server, which relays them to an ESP32 driving the actual hardware.',
    stack: ['JavaScript', 'Node.js', 'Socket.IO', 'ESP32'],
    features: [
      'Real-time browser controls',
      'WebSocket communication',
      'Node.js server',
      'ESP32 integration',
      'Real-time movement commands',
    ],
  },
];

export default PROJECTS;
