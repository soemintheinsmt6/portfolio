import React from 'react';
import { Link } from 'react-router-dom';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';
import Tag from './ui/Tag';
import { certificates } from '../data';

export function CertificateRow({ certificate }) {
  const isLink = Boolean(certificate.link);
  const Wrapper = isLink ? 'a' : 'div';
  const wrapperProps = isLink
    ? { href: certificate.link, target: '_blank', rel: 'noreferrer noopener' }
    : {};
  // Only linked rows respond to the pointer — a hover effect on a dead row is a lie.
  const hover = isLink ? 'transition-colors duration-200 group-hover:text-accent-text' : '';

  return (
    <Wrapper
      {...wrapperProps}
      className={`${isLink ? 'group' : ''} grid grid-cols-1 items-baseline gap-2xs border-t border-hairline py-md sm:grid-cols-[1fr_auto] sm:gap-lg`}
    >
      <span className={`flex flex-wrap items-baseline gap-sm text-heading-s ${hover}`}>
        {certificate.title}
        {certificate.featured ? <Tag tone="accent">{certificate.category}</Tag> : null}
      </span>
      {/* Persistent marker, not hover-revealed: it says which rows open a
          credential, and it works on touch. Both marks are mono, so they share a
          width and the issuer text stays right-aligned across every row. */}
      <span className={`flex items-center gap-xs font-mono text-mono-meta text-ink-3 ${hover}`}>
        {certificate.issuer}
        <span aria-hidden="true">{isLink ? '↗' : '—'}</span>
      </span>
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
