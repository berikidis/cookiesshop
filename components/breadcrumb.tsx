'use client'

import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'

export default function Breadcrumb({ name }: any) {
   const router = useRouter()
   const t = useTranslations('Breadcrumb')
   return (
      <Breadcrumbs size="sm">
         <BreadcrumbItem
            onPress={() =>
               router.push('/', {
                  scroll: false,
               })
            }
         >
            {t('home')}
         </BreadcrumbItem>
         <BreadcrumbItem
            onPress={() =>
               router.push('/products', {
                  scroll: false,
               })
            }
         >
            {t('name')}
         </BreadcrumbItem>
         <BreadcrumbItem>{name}</BreadcrumbItem>
      </Breadcrumbs>
   )
}
