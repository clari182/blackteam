// @ts-nocheck
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);
  
  // Only show the language switcher after component is mounted on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder with the same dimensions to prevent layout shift
    return <div className="flex space-x-2 h-8"></div>;
  }

  const { locales, locale: activeLocale } = router;
  
  return (
    <div className="flex space-x-2">
      {locales?.map((locale) => {
        const isActive = activeLocale === locale;
        
        return (
          <Link
            href={router.asPath}
            locale={locale}
            key={locale}
            className={`px-3 py-1 rounded text-sm font-medium ${
              isActive
                ? 'bg-blue-600 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
            aria-current={isActive ? 'page' : undefined}
          >
            {locale.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
} 