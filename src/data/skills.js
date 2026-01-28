import { deepFreeze } from './utils';

const SKILLS = [
  {
    id: 'ios',
    category: 'iOS',
    items: [
      'Swift', 'SwiftUI', 'UIKit', 'Xcode',
      'Core Animation', 'Core Data', 'Realm',
      'MapKit', 'RxSwift', 'Combine',
      'XCTest', 'GCD', 'Cocoapods', 'SPM'
    ]
  },
  {
    id: 'flutter',
    category: 'Flutter',
    items: [
      'Dart', 'Flutter', 'Android Studio',
      'VS Code', 'Provider', 'Riverpod',
      'Bloc', 'ObjectBox', 'Flutter test', 'Mocktail'
    ]
  },
  {
    id: 'concepts',
    category: 'Concepts',
    items: [
      'Agile/Scrum', 'Clean Architecture',
      'MVVM', 'MVC', 'Repository Pattern',
      'SOLID Principles', 'Unit Testing',
      'OOP', 'Reactive Programming',
      'Performance Optimization'
    ]
  },
  {
    id: 'ecosystem',
    category: 'Engineering Ecosystem',
    items: [
      'Git', 'Firebase', 'RESTful API', 'GraphQL',
      'CI/CD', 'Bitrise', 'GitHub Actions',
      'Figma', 'Jira',
      'JavaScript', 'React', 'Tailwind CSS',
      'Vite',
    ]
  }
];

export const skills = deepFreeze(SKILLS.map((s) => ({ ...s, items: [...s.items] })));

export default skills;


