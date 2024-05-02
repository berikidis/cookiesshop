import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Providers } from '@/app/[locale]/providers'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import './globals.css'
import { ReactNode } from 'react'
import { unstable_setRequestLocale } from 'next-intl/server'
import { locales } from '@/config'
import { NextIntlClientProvider, useMessages } from 'next-intl'

const inter = Roboto({
   subsets: ['greek'],
   weight: ['300', '400', '700', '900'],
})

type Props = {
   children: ReactNode
   params: { locale: string }
}

export const metadata: Metadata = {
   title: 'Create Next App',
   description: 'Generated by create next app',
}

export function generateStaticParams() {
   return locales.map((locale) => ({ locale }))
}

export default function RootLayout({ children, params: { locale } }: Props) {
   unstable_setRequestLocale(locale)
   const messages = useMessages()
   return (
      <html lang={locale}>
         <body className={inter.className}>
            <NextIntlClientProvider locale={locale} messages={messages}>
               <Providers>
                  <Navigation />
                  {children}
                  <Footer />
               </Providers>
            </NextIntlClientProvider>
         </body>
      </html>
   )
}
