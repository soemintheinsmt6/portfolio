import { deepFreeze } from './utils';

const EXPERIENCE = [
  {
    id: 'mega-z-mobile-developer',
    title: 'Mobile Developer',
    company: 'Mega Z',
    period: '2023 Aug - Present',
    description: 'ERP solution development for bar and entertainment business with multiple connected mobile applications',
    achievements: [
      'Developed a comprehensive ERP ecosystem including Staff, Kitchen, Waiter and Customer apps to optimize operational workflows',
      'Architected real-time communication between apps using WebSocket for instant data synchronization',
      'Enhanced customer experience with live order tracking, notifications and streamlined interactions',
      'Designed tablet-friendly waiter interface with split-screen layout for multitasking and improved user flow',
      'Enabled reliable communication and coordination across multiple teams and apps via real-time messaging'
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
      'Designed and developed an e-commerce app with a focus on modular architecture',
      'Implemented secure mobile payment processing and data protection mechanisms',
      'Integrated social media features to drive user engagement and retention',
      'Collaborated with UI/UX team on custom animations and high-quality visual transitions',
      'Conducted unit and integration testing to ensure application stability and performance optimization',
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


