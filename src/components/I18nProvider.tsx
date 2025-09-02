'use client';

import { NextIntlClientProvider } from 'next-intl';
import { ReactNode, useEffect, useState } from 'react';
import { loadMessages, getSavedLocale, Locale } from '@/lib/i18n';
import LanguageSwitcher from './LanguageSwitcher';
import {  KaeyrosAnalyticsLogoSvgIcon } from './custom/svg';
// import LanguageSwitcher from './LanguageSwitcher';

export default function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(getSavedLocale());
  const [messages, setMessages] = useState<Record<string, string> | null>(null);

  useEffect(() => {
    const initialize = async () => {
      const loadedMessages = await loadMessages(locale);
      setMessages(loadedMessages as Record<string, string>);
    };
    initialize();
  }, [locale]);

  const changeLocale = (newLocale: string) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
    setLocale(newLocale as Locale);
  };

  if (!messages) {
    return (
      <div className="flex h-screen flex-col items-center justify-center bg-slate-50">
        <h1 className="mb-8 text-3xl font-bold text-slate-800">
          Welcome to Kaeyros-Analytics website
        </h1>
        <div className="relative flex flex-col items-center">
          <div className="h-[200px] w-[200px] animate-spin rounded-full border-4 border-slate-200 border-t-blue-500">
          </div>
          <div className='absolute top-[30%] flex flex-col items-center justify-center'>
            <KaeyrosAnalyticsLogoSvgIcon />
          </div>
          <div className="mt-4 text-sm text-slate-600">
            a better way to use your data...
          </div>
        </div>
      </div>
    );
  }

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      now={new Date()}
      onError={console.error}
    >
      {children}
      <div className="fixed right-[5%] top-8 z-[1000] h-fit">
        <LanguageSwitcher currentLocale={locale} onChange={changeLocale} />
      </div>
    </NextIntlClientProvider>
  );
}
