export const SITE = {
  name: 'nodigsewerfix.com',
  title: 'nodigsewerfix.com — Premium Domain for Sale | Trenchless Sewer',
  description:
    'nodigsewerfix.com is for sale — the exact-match .com domain for trenchless sewer repair, CIPP pipe lining, and no-dig sewer fix. Asking $9,995.',
  url: 'https://nodigsewerfix.com',
  /** Canonical root URL with trailing slash (matches trailingSlash: "always") */
  rootUrl: 'https://nodigsewerfix.com/',
  email: 'sales@desertrich.com',
  locale: 'en_US',
  location: 'United States',
  googleSiteVerification: 'A65OFDJ2xioGF26ot36PJQB8ToGEc7fj1FJ8XRuKoUI',
} as const;

export const CF_IMAGES = {
  accountHash: '-sPAUAWeA405NiWJ0SNIQA',
  heroImageId: 'a7536b37-1924-4d89-f928-a842171eb400',
  serviceImageId: 'dd244e23-8397-4fed-f485-1ede2385a600',
} as const;

export function cfImageUrl(imageId: string, variant = 'public'): string {
  return `https://imagedelivery.net/${CF_IMAGES.accountHash}/${imageId}/${variant}`;
}

/** London super-sewer tunnel construction — sewer infrastructure hero */
export const HERO_IMAGE = `${SITE.url}/images/hero-sewer.jpg`;

/** Responsive hero sources (1600w desktop / 800w mobile) */
export const HERO_SRCSET = '/images/hero-sewer-800.jpg 800w, /images/hero-sewer.jpg 1600w';

/** Dedicated 1200×630 Open Graph / Twitter card image */
export const OG_IMAGE = `${SITE.url}/images/og-image.jpg`;

export const ACQUISITION_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent('nodigsewerfix.com Domain Acquisition Inquiry')}&body=${encodeURIComponent('Hello,\n\nI am interested in acquiring nodigsewerfix.com.\n\nIntended use:\nBudget range:\n\nThank you.')}`;

/** Listed asking price (USD) — shown on-page and in Product/Offer structured data */
export const DOMAIN_ASKING_PRICE = 9995;

export const DOMAIN_OFFER = {
  price: DOMAIN_ASKING_PRICE.toFixed(2),
  priceCurrency: 'USD',
  availability: 'https://schema.org/InStock',
  itemCondition: 'https://schema.org/NewCondition',
} as const;

export const DISCLAIMER_DATE = 'July 2, 2026';
