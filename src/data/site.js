import { deepFreeze } from './utils';

const SITE = {
  name: 'Soe Min Thein',
  role: 'Mobile engineer',
  location: 'Yangon, Myanmar',
  available: true,
  email: 'soeminthein020@gmail.com',
  github: 'https://github.com/soemintheinsmt6',
  linkedin: 'https://linkedin.com/in/soemin-thein',
  headline: {
    lead: 'Mobile engineer building products people ',
    emphasis: 'keep using.',
  },
  intro:
    "Six years shipping iOS and Flutter apps — commerce, streaming, and the kind of enterprise systems that quietly replace a company's spreadsheets. I care about architecture that survives the second year.",
  stats: [
    { value: '6', label: 'Years shipping' },
    { value: '5', label: 'Products in store' },
    { value: '4', label: 'Platforms' },
    { value: '13', label: 'Certifications' },
  ],
  about: {
    statement: {
      lead: 'I build the ',
      emphasis: 'second year',
      trail: ' of an app, not just the first release.',
    },
    paragraphs: [
      'Most of my work has been enterprise mobile — systems where a bad architecture decision compounds every sprint. So I lean on clean architecture, repository patterns and real test coverage, and I keep the code boring enough that the next person can move fast in it.',
      "I work across Swift, UIKit, SwiftUI and Flutter, and I've taken products the whole way — from an empty repo to CI pipelines, store review and the maintenance that follows.",
    ],
    facts: [
      { label: 'Currently', value: 'Mobile Developer at Mega Z' },
      { label: 'Focus', value: 'Flutter · iOS · Cross-platform ERP' },
      { label: 'Off the clock', value: 'Competitive football' },
    ],
  },
};

export const site = deepFreeze(SITE);

export default site;
