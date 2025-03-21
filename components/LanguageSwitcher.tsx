'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import Link from 'next/link';

const LanguageSwitcher = () => {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    // Remove the current locale from the pathname
    const pathnameWithoutLocale = pathname.replace(`/${locale}`, '');

    // Calculate the new path with the new locale
    const newLocale = locale === 'en' ? 'fr' : 'en';
    const newPath = `/${newLocale}${pathnameWithoutLocale}`;

    return (
        <Link
            href={newPath}
            className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-transparent border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
            {newLocale.toUpperCase()}
        </Link>
    );
};

export default LanguageSwitcher;