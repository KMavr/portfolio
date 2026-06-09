export const SITE_URL = 'https://kmavr.dev';
export const SITE_NAME = 'Konstantinos Mavrikas';
export const SITE_ROLE = 'Senior Front-end Developer';
export const SITE_TITLE = `${SITE_NAME} — ${SITE_ROLE}`;

export const OPEN_TO_WORK = true;

const CAREER_START = new Date('2015-09-01');
export const YEARS_EXPERIENCE = Math.floor(
  (Date.now() - CAREER_START.getTime()) / (1000 * 60 * 60 * 24 * 365.25),
);

const BASE_DESCRIPTION = `Senior front-end developer with ${YEARS_EXPERIENCE} years of experience, building production React and React Native products.`;

export const SITE_DESCRIPTION = OPEN_TO_WORK
  ? `${BASE_DESCRIPTION} Open to work.`
  : BASE_DESCRIPTION;

export const HERO_STATUS = OPEN_TO_WORK
  ? 'Open to work · Remote-first · EU time zones preferred'
  : null;

export const CONTACT_SUBLINE = OPEN_TO_WORK
  ? 'Available for remote work, with a preference for EU time zones. The fastest way to reach me is by email.'
  : 'Always happy to discuss an interesting problem or a potential collaboration. The fastest way to reach me is by email.';
