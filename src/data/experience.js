import { deepFreeze } from './utils';

const EXPERIENCE = [
  {
    id: 'mega-z-mobile-developer',
    title: 'Mobile Developer',
    company: 'Mega Z',
    period: '2023 Aug - Present',
    description: 'ERP solution development for bar and entertainment business with multiple connected mobile applications',
    achievements: [
      'Built a multi-app ERP ecosystem (Staff, Kitchen, Waiter, Customer) to streamline operational workflows',
      'Implemented real-time data synchronization and messaging across apps using WebSocket',
      'Improved customer and staff experience with live order tracking, notifications, and split-screen tablet UI',
      'Established CI/CD pipelines with Bitrise to automate builds, testing, and deployment across multiple apps'
    ],
    tech_stacks: [
      'Flutter',
      'Dart',
      'Riverpod',
      'Provider',
      'WebSocket',
      'ObjectBox',
      'Bitrise'
    ]
  },
  {
    id: 'slazh-ios-developer',
    title: 'iOS Developer',
    company: 'Slazh',
    period: '2021 Jun - 2023 Jul',
    description: 'Fashion e-commerce iOS app development with focus on product design and secure transactions',
    achievements: [
      'Developed a modular and scalable iOS e-commerce application',
      'Implemented secure payment processing with encryption and data protection',
      'Enhanced user experience through social features, custom animations, and performance-focused testing'
    ],
    tech_stacks: [
      'Swift',
      'Realm',
      'Mobile Payment Integration',
      'SHA256 Encryption',
      'Core Animation',
    ]
  },
  {
    id: 'swan-arr-junior-ios-developer',
    title: 'Junior iOS Developer',
    company: 'Swan Arr Electronics',
    period: '2019 Aug - 2021 Apr',
    description: 'iOS application development and Agile methodology',
    achievements: [
      'Contributed to multiple iOS applications under senior developer guidance',
      'Applied best coding practices and design principles to improve maintainability',
      'Participated in Agile sprint cycles, collaborating with cross-functional teams for feature delivery'
    ],
    tech_stacks: [
      'Swift',
      'Alamofire',
      'Firebase Cloud Messaging',
      'Analytics'
    ]
  }
];

export const experience = deepFreeze(EXPERIENCE.map((e) => ({ ...e, achievements: [...e.achievements] })));

export default experience;


