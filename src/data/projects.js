import { deepFreeze } from './utils';
import slazhImage from '../assets/images/slazh.jpg';
import megaZImage from '../assets/images/mega-z.png';
import mobileServiceManagerImage from '../assets/images/mobile-service-manager.jpg';
import tmoviesImage from '../assets/images/tmovies.PNG';

const PROJECTS = [
  {
    id: 'slazh',
    title: 'Slazh',
    description: 'High-performance fashion e-commerce iOS app with secure payments and elegant animations.',
    tech: ['Swift', 'Alamofire', 'Realm', 'Core Animation', 'SHA256 encryption', 'Analytics/Remote Config'],
    type: 'iOS',
    year: '2021 - 2023',
    link: 'https://apps.apple.com/us/app/slazh/id6447933375',
    image: slazhImage,
    highlights: ['Secure payments', 'Custom animations', 'Seamless product listing', 'Offline/Online cart']
  },
  {
    id: 'mega-z-erp',
    title: 'Mega Z ERP',
    description: 'Comprehensive ERP system with separate apps for staff, kitchen, waiter and customers with real-time data synchronization.',
    tech: ['Flutter', 'Clean Architecture', 'WebSocket', 'Riverpod', 'Provider', 'Bitrise'],
    type: 'Enterprise',
    year: '2023 - Present',
    link: 'https://testflight.apple.com/join/syAmsdsM',
    image: megaZImage,
    highlights: ['Real-time sync', 'Multi-app system', 'Push notifications', 'Split-screen layout']
  },
  {
    id: 'mobile-service-manager',
    title: 'Mobile Service Manager',
    description: 'Comprehensive service management system for mobile service centers with advanced reporting and analytics.',
    tech: ['Flutter', 'Riverpod', 'ObjectBox', 'MVVM', 'Repository Pattern', 'GitHub Actions'],
    type: 'Windows & macOS',
    year: '2025',
    image: mobileServiceManagerImage,
    highlights: ['Service Tracking', 'PDF/Excel exports', 'Revenue analytics', 'Technician performance']
  },
  {
    id: 'tmovies',
    title: 'Tmovies',
    description: 'Feature-rich movie streaming app with offline downloads and Picture-in-Picture support across Android, iOS and Android TV.',
    tech: ['Flutter', 'Firebase', 'ObjectBox', 'Provider', 'Method Channel'],
    type: 'Cross-platform',
    year: '2024 - 2025',
    link: 'https://play.google.com/store/apps/details?id=com.thebillionaire.movie_server',
    image: tmoviesImage,
    highlights: ['Offline downloads', 'PiP mode', 'Multi-platform', 'VLC plugin', 'Better player controls']
  },
];

export const projects = deepFreeze(PROJECTS.map((p) => ({ ...p, tech: [...p.tech], highlights: [...(p.highlights || [])] })));

export default projects;
