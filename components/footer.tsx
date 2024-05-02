import { FacebookIcon, InstagramIcon } from '@/components/icons'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function Footer() {
   const year = new Date().getFullYear()
   const t = useTranslations('Footer')
   return (
      <>
         <footer className="py-12 mt-4 bg-gray-100">
            <div className="max-w-screen-2xl mx-auto px-4">
               <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-12">
                  <div className="space-y-6">
                     <span className="text-lg text-[#240e04] tracking-wider font-bold uppercase">
                        {t('products')}
                     </span>
                     <ul className="space-y-3 text-sm text-[#240e04]">
                        <li>Μπισκότα Αμυγδάλου</li>
                        <li>Αμύγδαλο με σοκολάτα γάλακτος</li>
                        <li>Κάσιους Κράνμπερι</li>
                        <li>Κάσιους Σοκολάτα</li>
                        <li>Βρώμης Δημητριακών</li>
                        <li>Ταχίνι</li>
                     </ul>
                  </div>
                  <div className="space-y-6">
                     <span className="text-lg text-[#240e04] tracking-wider font-bold uppercase">
                        {t('company')}
                     </span>
                     <ul className="space-y-3 text-sm text-[#240e04]">
                        <li>{t('about-us')}</li>
                        <li>{t('contact')}</li>
                     </ul>
                  </div>
                  <div className="space-y-6">
                     <span className="text-lg text-[#240e04] tracking-wider font-bold uppercase">
                        {t('information')}
                     </span>
                     <ul className="space-y-3 text-sm text-[#240e04]">
                        <li>{t('cookie-policy')}</li>
                        <li>{t('privacy')}</li>
                     </ul>
                  </div>
                  <div className="space-y-6">
                     <span className="text-lg text-[#240e04] tracking-wider font-bold uppercase">
                        {t('contact')}
                     </span>
                     <ul className="space-y-3 text-sm text-[#240e04]">
                        <li>Τ.: +49 176 34 61 90 99</li>
                        <li>E.: info@cookieshop.de</li>
                     </ul>
                     <div className="flex items-center gap-6">
                        <FacebookIcon className="w-6 text-[#240e04]" />
                        <InstagramIcon className="w-6 text-[#240e04]" />
                     </div>
                  </div>
               </div>
            </div>
         </footer>
         <div className="bg-white py-6">
            <div className="max-w-screen-2xl mx-auto px-4">
               <div className="flex justify-between gap-6">
                  <span className="font-light text-sm">
                     Copyright &copy; {year}
                  </span>
                  <Image
                     width={200}
                     height={140}
                     src="/politis-logo.svg"
                     alt="Politismedia Logo"
                  />
               </div>
            </div>
         </div>
      </>
   )
}
