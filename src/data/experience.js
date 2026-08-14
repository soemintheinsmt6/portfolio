import { deepFreeze } from './utils';

const EXPERIENCE = [
  {
    id: 'mega-z-mobile-developer',
    title: 'Mobile Developer',
    company: 'Mega Z',
    period: '2023 Aug — Present',
    description:
      'ERP for a bar and entertainment business, delivered as a set of connected mobile applications.',
    achievements: [
      'Built a multi-app ERP ecosystem — HR, Kitchen, Waiter, Customer — on one shared architecture',
      'Implemented real-time sync and messaging across apps over WebSocket',
      'Shipped live order tracking, notifications and split-screen tablet layouts',
      'Automated builds, testing and deployment across every app with Bitrise',
    ],
    tech_stacks: ['Flutter', 'Dart', 'Riverpod', 'Provider', 'WebSocket', 'ObjectBox', 'Bitrise'],
  },
  {
    id: 'slazh-ios-developer',
    title: 'iOS Developer',
    company: 'Slazh',
    period: '2021 Jun — 2023 Jul',
    description: 'Fashion commerce on iOS, focused on product craft and secure transactions.',
    achievements: [
      'Developed a modular, scalable iOS commerce application',
      'Implemented secure payment processing with encryption and data protection',
      'Raised the experience with social features and custom Core Animation transitions',
    ],
    tech_stacks: ['Swift', 'Realm', 'Mobile Payments', 'SHA256', 'Core Animation'],
  },
  {
    id: 'swan-arr-junior-ios-developer',
    title: 'Junior iOS Developer',
    company: 'Swan Arr Electronics',
    period: '2019 Aug — 2021 Apr',
    description: 'iOS application development inside an Agile delivery team.',
    achievements: [
      'Contributed to several iOS apps under senior guidance',
      'Applied design principles and coding standards that kept the codebase maintainable',
      'Worked in Agile sprints with cross-functional delivery teams',
    ],
    tech_stacks: ['Swift', 'Alamofire', 'Firebase Cloud Messaging', 'Analytics'],
  },
];

export const experience = deepFreeze(
  EXPERIENCE.map((e) => ({ ...e, achievements: [...e.achievements], tech_stacks: [...e.tech_stacks] }))
);

export default experience;
