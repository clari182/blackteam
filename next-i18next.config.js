/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'es',
    locales: ['en', 'es'],
    localeDetection: true,
  },
  defaultNS: 'common',
  localePath: 'public/locales',
  keySeparator: false,
  nsSeparator: false,
}; 