import { deepFreeze } from './utils';

const CERTIFICATES = [
  { id: 'meta-ios-developer', title: 'Meta iOS Developer', issuer: 'Meta', link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/9308STQFF3B4' },
  { id: 'uoft-ios-app-development-with-swift', title: 'iOS App Development with Swift Specialization', issuer: 'University of Toronto', link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/H19JF120GVL2' },
  { id: 'ibm-developing-mobile-apps-with-flutter', title: 'Developing Mobile Apps with Flutter Specialization', issuer: 'IBM', link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/RZ1V8Z7396QA' },
  { id: 'hws-100-days-of-swiftui', title: '100 Days of SwiftUI', issuer: 'Hacking with Swift', link: 'https://drive.google.com/file/d/1t14jewTaNRlRKEuF4wTSdTtfNuyUkG8P/view?usp=sharing' },
  { id: 'google-ai-essentials', title: 'Google AI Essentials', issuer: 'Google', link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/E08ZWTCCOYFQ' },
  { id: 'upenn-english-for-career-development', title: 'English for Career Development', issuer: 'University of Pennsylvania', link: 'https://www.coursera.org/account/accomplishments/certificate/9MAZGM9FKHOO' }
];

export const certificates = deepFreeze(CERTIFICATES.map((c) => ({ ...c })));

export default certificates;


