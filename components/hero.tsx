import Image from 'next/image'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function Hero() {
   const t = useTranslations('Hero')

   return (
      <div className="min-h-[70vh] bg-[#6D321A] relative overflow-hidden">
         <div className="max-w-screen-2xl mx-auto h-[80vh]">
            <div className="flex lg:flex-row flex-col h-full">
               <div className="flex place-items-center px-4 max-w-sm order-2">
                  <div className="*:text-white lg:space-y-12 space-y-8 py-12">
                     <p className="uppercase">{t('subtitle')}</p>
                     <h1 className="md:text-6xl text-4xl font-extrabold text-balance">
                        {t('title')}
                     </h1>
                     <Button
                        as={Link}
                        href="/products"
                        color="default"
                        variant="bordered"
                        size="lg"
                        radius="full"
                     >
                        {t('button')}
                     </Button>
                  </div>
               </div>
               <div className="lg:absolute relative lg:w-7/12 w-full h-full lg:right-0 lg:top-0">
                  <Image
                     fill
                     priority
                     src="/hero.png"
                     alt="Cookie image"
                     className="object-cover"
                  />
                  <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-[#6D321A]/50" />
               </div>
            </div>
         </div>
      </div>
   )
}
