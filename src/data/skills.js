import { deepFreeze } from './utils';

const SKILLS = [
  { id: 'ios', category: 'iOS', items: ['Swift', 'SwiftUI', 'UIKit', 'Xcode',  'Core Animation', 'Core Data', 'Realm', 'MapKit', 'RxSwift', 'Combine', 'XCTest', 'GCD', 'Cocoapods', 'SPM'] },
  { id: 'flutter', category: 'Flutter', items: ['Dart', 'Flutter', 'Android Studio', 'VS Code', 'Provider', 'Riverpod', 'GetX', 'ObjectBox', 'Flutter test'] },
  { id: 'concepts', category: 'Concepts', items: ['Agile/Scrum', 'Clean Architecture', 'MVVM', 'MVC',  'SOLID Principles', 'Repository Pattern', 'Unit Testing', 'OOP', 'Reactive Programming', 'Performance Optimization'] },
  { id: 'tools-backend', category: 'Tools & Backend', items: ['Git', 'Firebase', 'RESTful API', 'GraphQL', 'CI/CD', 'Bitrise', 'GitHub Actions', 'Fastlane', 'Figma', 'Jira'] },
    {
    id: 'web',
    category: 'Frontend Web',
    items: ['JavaScript', 'React', 'Tailwind CSS', 'Vite', 'Framer Motion']
  },
];

export const skills = deepFreeze(SKILLS.map((s) => ({ ...s, items: [...s.items] })));

export default skills;


