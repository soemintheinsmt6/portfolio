import { deepFreeze } from './utils';

const SKILLS = [
  { id: 'ios', category: 'iOS', items: ['Swift', 'SwiftUI', 'UIKit', 'Xcode',  'Core Animation', 'Core Data', 'Realm', 'MapKit', 'RxSwift', 'Combine', 'XCTest', 'GCD', 'Cocoapods', 'SPM'] },
  { id: 'flutter', category: 'Flutter', items: ['Dart', 'Flutter', 'Android Studio', 'VS Code', 'Provider', 'Riverpod', 'GetX', 'ObjectBox', 'Flutter test'] },
  { id: 'architecture', category: 'Architecture', items: ['MVVM', 'MVC', 'MVP', 'Clean Architecture', 'SOLID Principles'] },
  { id: 'tools-backend', category: 'Tools & Backend', items: ['Git', 'Firebase', 'RESTful API', 'GraphQL', 'CI/CD', 'Bitrise', 'Figma', 'Jira'] }
];

export const skills = deepFreeze(SKILLS.map((s) => ({ ...s, items: [...s.items] })));

export default skills;


