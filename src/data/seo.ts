import { CONTACT } from "./contact";

export const SITE_URL = "https://www.goodlooksmedia.com";
export const SITE_NAME = "Good Looks Media Group";
export const OG_IMAGE =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/73fa5981-b0b2-4bb4-bbf0-0217ea63b5d4/id-preview-dee7a45a--c960d588-e9bd-406c-bb13-7d348a108e08.lovable.app-1778958773703.png";

export const SERVICE_AREAS = [
  "Rhode Island",
  "Providence, RI",
  "Warwick, RI",
  "Cranston, RI",
  "Pawtucket, RI",
  "Newport, RI",
  "East Providence, RI",
  "Connecticut",
  "Massachusetts",
  "New England",
];

export const SEO_SERVICES = [
  "Rhode Island videographer",
  "Rhode Island event media",
  "Rhode Island video production",
  "New England videographer",
  "New England video production",
  "Connecticut videographer",
  "Massachusetts videographer",
  "Wedding videography",
  "Event recap videos",
  "Business video production",
  "Commercial video production",
  "Music video production",
  "Reels and short-form content",
];

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

export function businessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${SITE_URL}/#business`,
    name: SITE_NAME,
    url: SITE_URL,
    image: OG_IMAGE,
    logo: OG_IMAGE,
    description:
      "Good Looks Media Group is a Rhode Island based video production team serving Rhode Island, Connecticut, Massachusetts, and New England with wedding films, event media, business video, commercials, music videos, reels, and custom story films.",
    telephone: "+1-401-465-1529",
    email: CONTACT.email,
    priceRange: "$$",
    foundingDate: "2018",
    address: {
      "@type": "PostalAddress",
      addressRegion: "RI",
      addressCountry: "US",
    },
    areaServed: SERVICE_AREAS.map((name) => ({ "@type": "Place", name })),
    sameAs: [CONTACT.instagramUrl, CONTACT.youtubeUrl],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-401-465-1529",
      email: CONTACT.email,
      contactType: "customer service",
      areaServed: ["US-RI", "US-CT", "US-MA"],
      availableLanguage: "English",
    },
    makesOffer: SEO_SERVICES.map((name) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name,
        areaServed: SERVICE_AREAS.map((area) => ({ "@type": "Place", name: area })),
        provider: { "@id": `${SITE_URL}/#business` },
      },
    })),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}/#business` },
    inLanguage: "en-US",
  };
}

export function serviceJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name,
    description,
    url: absoluteUrl(path),
    provider: { "@id": `${SITE_URL}/#business`, name: SITE_NAME },
    areaServed: SERVICE_AREAS.map((area) => ({ "@type": "Place", name: area })),
    serviceType: name,
  };
}

export function pageJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    name,
    description,
    url: absoluteUrl(path),
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#business` },
    inLanguage: "en-US",
  };
}
