import 'react-i18next';
import 'i18next';

// Extend the i18next declaration 
declare module 'react-i18next' {
  // Extend ResourceLanguage with your namespaces
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: {
      common: typeof import('../../public/locales/en/common.json');
      horse: typeof import('../../public/locales/en/horse.json');
    };
  }
} 