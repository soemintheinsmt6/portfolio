import React from 'react';
import { Link } from 'react-router-dom';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';
import Tag from './ui/Tag';
import { certificates } from '../data';

export function CertificateRow({ certificate }) {
  const Wrapper = certificate.link ? 'a' : 'div';
  const wrapperProps = certificate.link
    ? { href: certificate.link, target: '_blank', rel: 'noreferrer noopener' }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group grid grid-cols-1 items-baseline gap-2xs border-t border-hairline py-md sm:grid-cols-[1fr_auto] sm:gap-lg"
    >
      <span className="flex flex-wrap items-baseline gap-sm text-heading-s transition-colors duration-200 group-hover:text-accent-text">
        {certificate.title}
        {certificate.featured ? <Tag tone="accent">{certificate.category}</Tag> : null}
      </span>
      <span className="font-mono text-mono-meta text-ink-3">{certificate.issuer}</span>
    </Wrapper>
  );
}

export default function Certificates() {
  const featured = certificates.filter((certificate) => certificate.featured);

  return (
    <Section id="credentials">
      <SectionHeader
        index="05"
        eyebrow="Credentials"
        title="Certifications"
        meta={`${certificates.length} total · ${featured.length} featured`}
      />

      <Reveal>
        <div className="border-b border-hairline">
          {featured.map((certificate) => (
            <CertificateRow key={certificate.id} certificate={certificate} />
          ))}
        </div>

        <Link
          to="/certificates"
          className="mt-lg inline-flex items-center gap-xs text-label-m font-medium transition-colors duration-200 hover:text-accent-text"
        >
          All {certificates.length} certifications →
        </Link>
      </Reveal>
    </Section>
  );
}
