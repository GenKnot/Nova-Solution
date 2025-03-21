import { getRequestConfig } from 'next-intl/server';

const locales = ['en', 'fr'];

export default getRequestConfig(async ({ locale }) => {
    if (!locales.includes(locale as string)) {
        return {
            messages: {},
            locale: 'en'
        };
    }

    return {
        locale: locale as string,
        messages: (await import(`./locales/${locale}.json`)).default,
        timeZone: 'America/Toronto',
        defaultTranslationValues: {
            applicationName: 'S3 Technologies'
        }
    };
});