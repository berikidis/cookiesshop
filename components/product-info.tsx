'use client'

import { Image } from '@nextui-org/react'
import NextImage from 'next/image'
import { Fragment } from 'react'
import { useTranslations } from 'next-intl'

export default function ProductInfo() {
   const t = useTranslations('ProductInfo')
   const imagesData = [
      {
         image: '/1.png',
         name: t('grid-label-one'),
      },
      {
         image: '/3.png',
         name: 'Κριτσίνι Ηλιόσπορος',
      },
   ]
   return (
      <>
         <div className="max-w-screen-2xl mx-auto px-4 space-y-12">
            <div className="text-center text-balance space-y-4">
               <h1 className="text-3xl">{t('title')}</h1>
            </div>
            <div className="grid grid-flow-dense md:grid-cols-2 grid-cols-1 gap-8">
               {imagesData.map((item, index) => (
                  <Fragment key={index}>
                     <div className="p-0 space-y-4">
                        <Image
                           isZoomed
                           quality={100}
                           width={800}
                           height={800}
                           as={NextImage}
                           alt="Card background"
                           className="object-cover hover:scale-105"
                           src={item.image}
                        />
                        <h3 className="text-center">{item.name}</h3>
                     </div>
                  </Fragment>
               ))}
            </div>
         </div>
      </>
   )
}
