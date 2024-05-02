import createMiddleware from 'next-intl/middleware'
import { defaultLocale, localePrefix, locales, pathnames } from './config'

export default createMiddleware({
   defaultLocale,
   locales,
   localePrefix,
   pathnames,
})

export const config = {
   matcher: ['/', '/(de|en|el)/:path*', '/((?!api|_next|.*\\..*).*)'],
}
