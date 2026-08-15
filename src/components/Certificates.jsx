import React from 'react';
import { Link } from 'react-router-dom';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import { Stagger, StaggerItem } from './ui/Reveal';
import Tag from './ui/Tag';
import { certificates } from '../data';
import { CATEGORIES } from '../data/certificates';

// Ids are stored lowercase; the labels carry the correct casing (e.g. "AI").
const CATEGORY_LABEL = Object.fromEntries(CATEGORIES.map((c) => [c.id, c.label]));

/**
 * `showCategory` is on for the homepage only — /certificates has filter chips,
 * which already state the category. Even there it's desktop-only: on a narrow
 * screen a long title pushes the chip onto a line of its own.
 */
export function CertificateRow({ certificate, showCategory = false }) {
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
      {/* Inline flow, not flex: the chip should follow the last word of the title
          and only wrap when there's genuinely no room, rather than being pushed
          onto a line of its own whenever the title fills the width. */}
      <span className={`text-heading-s ${hover}`}>
        {certificate.title}
        {showCategory && certificate.category ? (
          <>
            {' '}
            <Tag tone="accent" className="hidden align-[0.1em] md:inline-flex">
              {CATEGORY_LABEL[certificate.category] ?? certificate.category}
            </Tag>
          </>
        ) : null}
      </span>
      {/* Persistent marker, not hover-revealed: it says which rows open a
          credential, and it works on touch. Both marks are mono, so they share a
          width and the issuer text stays right-aligned across every row. */}
      <span className={`flex items-center gap-xs font-mono text-mono-meta text-ink-3 ${hover}`}>
        {certificate.issuer}
        <span
          aria-hidden="true"
          className={
            isLink
              ? 'inline-block transition-transform duration-200 group-hover:-translate-y-px group-hover:translate-x-px'
              : undefined
          }
        >
          {isLink ? '↗' : '—'}
        </span>
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

      <Stagger each={0.04}>
        <div className="border-b border-hairline">
          {featured.map((certificate) => (
            <StaggerItem key={certificate.id}>
              <CertificateRow certificate={certificate} showCategory />
            </StaggerItem>
          ))}
        </div>

        <StaggerItem>
          <Link
            to="/certificates"
            className="group mt-lg inline-flex items-center gap-xs text-label-m font-medium transition-colors duration-200 hover:text-accent-text"
          >
            All {certificates.length} certifications{' '}
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </StaggerItem>
      </Stagger>
    </Section>
  );
}
