import { deepFreeze } from './utils';

const EXPERIENCE = [
  {
    id: 'mega-z-mobile-developer',
    title: 'Mobile Developer',
    company: 'Mega Z',
    period: '2023 Aug - Present',
    description: 'Developing ERP solutions with Flutter for Bar and Entertainment industry',
    achievements: [
      'Built real-time WebSocket communication system',
      'Integrated Firebase Cloud Messaging',
      'Optimized business processes with mobile solutions'
    ]
  },
  {
    id: 'slazh-ios-developer',
    title: 'iOS Developer',
    company: 'Slazh',
    period: '2021 Jun - 2023 Jul',
    description: 'Fashion e-commerce iOS application development',
    achievements: [
      'Developed high-performance e-commerce app',
      'Implemented secure payment systems',
      'Collaborated with UI/UX team on custom animations'
    ]
  },
  {
    id: 'swan-arr-junior-ios-developer',
    title: 'Junior iOS Developer',
    company: 'Swan Arr Electronics',
    period: '2019 Aug - 2021 Apr',
    description: 'iOS application development and Agile methodology',
    achievements: [
      'Contributed to multiple iOS applications',
      'Applied best practices and coding standards',
      'Participated in Agile development sprints'
    ]
  }
];

export const experience = deepFreeze(EXPERIENCE.map((e) => ({ ...e, achievements: [...e.achievements] })));

export default experience;


