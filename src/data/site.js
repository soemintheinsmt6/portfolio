import { deepFreeze } from './utils';
import { projects } from './projects';
import { certificates } from './certificates';
import portrait from '../assets/images/portrait.jpg';

// Junior iOS Developer at Swan Arr Electronics, August 2019.
const CAREER_START = { year: 2019, month: 7 }; // month is 0-indexed

function yearsShipping() {
  const now = new Date();
  const years = now.getFullYear() - CAREER_START.year;
  return now.getMonth() < CAREER_START.month ? years - 1 : years;
}

const NUMBER_WORDS = [
  'Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six',
  'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve',
];

const inWords = (n) => NUMBER_WORDS[n] ?? String(n);

const YEARS = yearsShipping();

const SITE = {
  name: 'Soe Min Thein',
  role: 'Mobile Engineer',
  portrait,
  contact: {
    lead: 'Let’s build something ',
    emphasis: 'enduring.',
  },
  // Time-sensitive: set to null when you're no longer looking.
  availability: 'Open to full-time roles and freelance work.',
  email: 'soeminthein020@gmail.com',
  github: 'https://github.com/soemintheinsmt6',
  linkedin: 'https://linkedin.com/in/soemin-thein',
  source: 'https://github.com/soemintheinsmt6/portfolio',
  headline: {
    lead: 'Mobile Engineer building products people ',
    emphasis: 'keep using.',
  },
  intro: `${inWords(YEARS)} years shipping iOS and Flutter apps — e-commerce, streaming, and the kind of enterprise systems that quietly replace a company's spreadsheets. I care about how an app holds up long after launch.`,
  // Derived from the data below, so shipping a new project or certificate
  // updates the hero without anyone remembering to.
  stats: [
    { value: String(YEARS), label: 'Years shipping' },
    { value: String(projects.filter((p) => p.released !== false).length), label: 'Products shipped' },
    { value: '4', label: 'Platforms' },
    { value: String(certificates.length), label: 'Certifications' },
  ],
  about: {
    statement: {
      lead: 'Most missed deadlines are ',
      emphasis: 'architecture decisions',
      trail: ' made a year earlier.',
    },
    paragraphs: [
      'Most of my work has been enterprise mobile, where those decisions compound every sprint. So I lean on clean architecture, repository patterns and real test coverage, and I keep the code boring enough that the next person can move fast in it.',
      "I work across Swift, UIKit, SwiftUI and Flutter, and I've taken products the whole way — from an empty repo to CI pipelines, store review and the maintenance that follows.",
      'More recently I have folded AI-assisted development into that workflow. It moves quickly through the mechanical work, but I read what it produces the way I would review any pull request — the architecture decisions stay mine.',
    ],
    facts: [
      { label: 'Currently', value: 'Mobile Developer at Mega Z' },
      { label: 'Focus', value: 'Flutter · iOS · ERP · AI-assisted development' },
      { label: 'Off the clock', value: 'Competitive football' },
    ],
  },
};

export const site = deepFreeze(SITE);

export default site;
