import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';

// This is a client-side only i18n instance
// We're creating this to handle cases where the server-side translations aren't ready
if (!i18n.isInitialized) {
  i18n
    .use(resourcesToBackend((language, namespace) => 
      import(`../../public/locales/${language}/${namespace}.json`)
    ))
    .use(initReactI18next)
    .init({
      lng: 'es', // Default to Spanish
      fallbackLng: 'es',
      defaultNS: 'common',
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
        transSupportBasicHtmlNodes: true,
        transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p', 'span'],
      },
      keySeparator: false,
      nsSeparator: false,
    });
}

export default i18n; 