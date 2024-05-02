import { Pathnames } from 'next-intl/navigation'

export const port = process.env.PORT || 3000
export const host =
   process.env.NODE_ENV === 'production'
      ? `https://www.cookiesshop.de`
      : `http://localhost:${port}`

export const defaultLocale = 'de' as const
export const locales = ['en', 'de', 'el'] as const

export const pathnames = {
   '/': '/',
   '/products': {
      en: '/products',
      de: '/produkte',
      el: '/proionta',
   },
   '/products/[id]': {
      en: '/products/[id]',
      de: '/produkte/[id]',
      el: '/proionta/[id]',
   },
} satisfies Pathnames<typeof locales>

export const localePrefix = 'always'

export type AppPathnames = keyof typeof pathnames
