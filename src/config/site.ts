export const SITE = {
  name: 'nodigsewerfix.com',
  title:
    'nodigsewerfix.com • Premium Domain for Sale | Trenchless Sewer Repair & CIPP Pipe Lining',
  description:
    'Own nodigsewerfix.com — the exact-match .com domain for trenchless sewer repair, CIPP pipe lining, and no-dig sewer fix companies. Instant brand recognition in a high-growth home services niche.',
  url: 'https://nodigsewerfix.com',
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

export const OG_IMAGE = HERO_IMAGE;

export const ACQUISITION_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent('nodigsewerfix.com Domain Acquisition Inquiry')}&body=${encodeURIComponent('Hello,\n\nI am interested in acquiring nodigsewerfix.com.\n\nIntended use:\nBudget range:\n\nThank you.')}`;

export const DISCLAIMER_DATE = 'July 2, 2026';
