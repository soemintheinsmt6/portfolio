import { deepFreeze } from './utils';

const CERTIFICATES = [
  { id: 'meta-ios-developer', category: 'mobile', featured: true, title: 'Meta iOS Developer', issuer: 'Meta', link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/9308STQFF3B4' },
  { id: 'ibm-developing-mobile-apps-with-flutter', category: 'mobile', featured: true, title: 'Developing Mobile Apps with Flutter Specialization', issuer: 'IBM', link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/RZ1V8Z7396QA' },
  { id: 'uoft-ios-app-development-with-swift', category: 'mobile', featured: true, title: 'iOS App Development with Swift Specialization', issuer: 'University of Toronto', link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/H19JF120GVL2' },
  { id: 'hws-100-days-of-swiftui', category: 'mobile', featured: true, title: '100 Days of SwiftUI', issuer: 'Hacking with Swift', link: 'https://drive.google.com/file/d/1t14jewTaNRlRKEuF4wTSdTtfNuyUkG8P/view?usp=sharing' },
  { id: 'swift-5-ios-application-developer', category: 'mobile', title: 'Swift 5 iOS Application Developer', issuer: 'LearnQuest', link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/TN2RCLFP1QR2' },
  { id: 'test-driven-development', category: 'engineering', featured: true, title: 'Test-Driven Development', issuer: 'LearnQuest', link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/RJWX0YBZKT72' },
  { id: 'java-inet', category: 'engineering', title: 'Fundamentals of Programming in Java', issuer: 'iNet College', link: 'https://drive.google.com/file/d/12hfDsqPfmt9n5of-7PlIhV3mX58xdvek/view?usp=sharing' },
  { id: 'claude-code-in-action', category: 'ai', featured: true, title: 'Claude Code in Action', issuer: 'Anthropic', link: 'https://www.coursera.org/account/accomplishments/certificate/FKV01RI2ITZB' },
  { id: 'google-ai-essentials', category: 'ai', title: 'Google AI Essentials', issuer: 'Google', link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/E08ZWTCCOYFQ' },
  { id: 'uc-irvine-english', category: 'language', title: 'Advanced Academic Speaking and Listening Specialization', issuer: 'University of California, Irvine', link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/6P5E8SR6C7K7' },
  { id: 'upenn-english-for-career-development', category: 'language', title: 'English for Career Development', issuer: 'University of Pennsylvania', link: 'https://www.coursera.org/account/accomplishments/certificate/9MAZGM9FKHOO' },
  { id: 'gatech-improve-english-communication', category: 'language', title: 'Improve Your English Communication Skills Specialization', issuer: 'Georgia Institute of Technology', link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/1MZBZGYLJBEK' },
  { id: 'bsc', category: 'education', title: 'B.Sc Industrial Chemistry', issuer: 'Yadanabon University' },
];

export const CATEGORIES = deepFreeze([
  { id: 'all', label: 'All' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'engineering', label: 'Engineering' },
  { id: 'ai', label: 'AI' },
  { id: 'language', label: 'Language' },
  { id: 'education', label: 'Education' },
]);

export const certificates = deepFreeze(CERTIFICATES.map((c) => ({ ...c })));

export default certificates;
