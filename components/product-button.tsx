'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@nextui-org/react'
import { useTranslations } from 'next-intl'

export default function ProductButton() {
   const router = useRouter()
   const t = useTranslations('PopularProducts')

   return (
      <Button
         disableRipple
         onPress={() => router.push('/products')}
         className="bg-black text-white rounded-full"
      >
         {t('name')}
      </Button>
   )
}
