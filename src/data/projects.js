import { deepFreeze } from './utils';
// App Store screens, cropped to the device — marketing frame removed.
import gck01 from '../assets/images/gck/01.jpg';
import gck02 from '../assets/images/gck/02.jpg';
import gck03 from '../assets/images/gck/03.jpg';
import gck04 from '../assets/images/gck/04.jpg';
import gck05 from '../assets/images/gck/05.jpg';
import mz01 from '../assets/images/megaz/01.jpg';
import mz02 from '../assets/images/megaz/02.jpg';
import mz03 from '../assets/images/megaz/03.jpg';
import mz04 from '../assets/images/megaz/04.jpg';
import mz05 from '../assets/images/megaz/05.jpg';
import tm01 from '../assets/images/tmovies/01.jpg';
import tm02 from '../assets/images/tmovies/02.jpg';
import tm03 from '../assets/images/tmovies/03.jpg';
import tm04 from '../assets/images/tmovies/04.jpg';
import sl01 from '../assets/images/slazh/01.jpg';
import sl02 from '../assets/images/slazh/02.jpg';
import sl03 from '../assets/images/slazh/03.jpg';
import sl04 from '../assets/images/slazh/04.jpg';
import sl05 from '../assets/images/slazh/05.jpg';

// Ordered as the work reads on the page: flagship first, then by recency.
const PROJECTS = [
  {
    id: 'gck',
    title: 'GCK',
    description:
      'Production ERP unifying admin, shareholders, sales and warehouse into one role-based platform. Replaces fragmented spreadsheets with audited finance reporting, voucher pipelines and live inventory.',
    tech: ['Flutter', 'Clean Architecture', 'Bloc', 'get_it', 'GitHub Actions'],
    type: 'Cross-platform',
    platform: 'Cross-platform',
    year: '2026',
    link: 'https://apps.apple.com/us/app/gck/id6762456506',
    appStore: 'https://apps.apple.com/us/app/gck/id6762456506',
    playStore: 'https://play.google.com/store/apps/details?id=com.trading.gck',
    screens: [gck01, gck02, gck03, gck04, gck05],
    highlights: [
      'Role-based access',
      'Voucher & inventory management',
      'Payment, delivery & finance reporting',
      'Responsive mobile/tablet/desktop',
    ],
  },
  {
    id: 'mobile-service-manager',
    title: 'Mobile Service Manager',
    description:
      'Desktop service management for mobile repair centres — job tracking, technician performance, revenue analytics and PDF/Excel exports.',
    tech: ['Flutter', 'Riverpod', 'ObjectBox', 'MVVM', 'Repository Pattern'],
    type: 'Windows & macOS',
    platform: 'Windows & macOS',
    year: '2025',
    highlights: ['Service tracking', 'PDF/Excel exports', 'Revenue analytics', 'Technician performance'],
  },
  {
    id: 'tmovies',
    title: 'Tmovies',
    description:
      'Streaming app with offline downloads, picture-in-picture and a custom player — shipped to Android, iOS and Android TV from one codebase.',
    tech: ['Flutter', 'Firebase', 'Method Channel', 'ObjectBox', 'Bitrise'],
    type: 'Cross-platform',
    platform: 'Mobile & TV',
    year: '2024 — 2025',
    link: 'https://play.google.com/store/apps/details?id=com.thebillionaire.movie_server',
    playStore: 'https://play.google.com/store/apps/details?id=com.thebillionaire.movie_server',
    testFlight: 'https://testflight.apple.com/join/uqbpmpss',
    screens: [tm01, tm02, tm03, tm04],
    highlights: ['Offline downloads', 'PiP mode', 'Multi-platform', 'Custom player controls'],
  },
  {
    id: 'mega-z-erp',
    title: 'Mega Z ERP',
    description:
      'Four connected apps — HR, Kitchen, Waiter and Customer — held in sync over WebSocket so a live hospitality floor sees the same order at the same moment.',
    tech: ['Flutter', 'WebSocket', 'Riverpod', 'Provider', 'Bitrise'],
    type: 'Enterprise',
    platform: 'Enterprise',
    year: '2023 — Present',
    link: 'https://apps.apple.com/us/app/megaeasez-hr/id6758825547',
    appStore: 'https://apps.apple.com/us/app/megaeasez-hr/id6758825547',
    screens: [mz01, mz02, mz03, mz04, mz05],
    highlights: ['Real-time sync', 'Multi-app system', 'Push notifications', 'Split-screen layout'],
  },
  {
    id: 'slazh',
    title: 'Slazh',
    description:
      'Fashion e-commerce for iOS — secure payments, Core Animation transitions and a cart that stays intact when the connection drops mid-checkout.',
    tech: ['Swift', 'Alamofire', 'Realm', 'Core Animation', 'SHA256'],
    type: 'iOS',
    platform: 'iOS',
    year: '2021 — 2023',
    link: 'https://apps.apple.com/us/app/slazh/id6447933375',
    appStore: 'https://apps.apple.com/us/app/slazh/id6447933375',
    playStore: 'https://play.google.com/store/apps/details?id=com.slazh.ecommerce',
    screens: [sl01, sl02, sl03, sl04, sl05],
    highlights: ['Secure payments', 'Custom animations', 'Seamless product listing', 'Offline/online cart'],
  },
  {
    id: 'karaweik',
    title: 'Karaweik',
    description:
      'Restaurant app for iOS — menu browsing, food ordering and healthy-eating articles, with the cart kept in SQLite between sessions.',
    tech: ['Swift', 'URLSession', 'REST', 'SQLite', 'Firebase'],
    type: 'iOS',
    platform: 'iOS',
    year: '2019 — 2020',
    link: 'https://apps.apple.com/mm/app/karaweik/id1540412233',
    appStore: 'https://apps.apple.com/mm/app/karaweik/id1540412233',
    highlights: [
      'Menu display & food ordering',
      'Cart persisted in SQLite',
      'Firebase auth & analytics',
      'Delegate and Observer patterns',
    ],
  },
];

export const projects = deepFreeze(
  PROJECTS.map((p) => ({
    ...p,
    tech: [...p.tech],
    highlights: [...(p.highlights || [])],
    screens: [...(p.screens || [])],
  }))
);

export default projects;
