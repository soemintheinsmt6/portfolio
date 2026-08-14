import { deepFreeze } from './utils';

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
    highlights: ['Real-time sync', 'Multi-app system', 'Push notifications', 'Split-screen layout'],
  },
  {
    id: 'slazh',
    title: 'Slazh',
    description:
      'Fashion commerce for iOS — secure payments, Core Animation transitions and a cart that survives losing signal mid-checkout.',
    tech: ['Swift', 'Alamofire', 'Realm', 'Core Animation', 'SHA256'],
    type: 'iOS',
    platform: 'iOS',
    year: '2021 — 2023',
    link: 'https://apps.apple.com/us/app/slazh/id6447933375',
    appStore: 'https://apps.apple.com/us/app/slazh/id6447933375',
    playStore: 'https://play.google.com/store/apps/details?id=com.slazh.ecommerce',
    highlights: ['Secure payments', 'Custom animations', 'Seamless product listing', 'Offline/online cart'],
  },
];

export const projects = deepFreeze(
  PROJECTS.map((p) => ({ ...p, tech: [...p.tech], highlights: [...(p.highlights || [])] }))
);

export default projects;
