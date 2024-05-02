import { Suspense } from 'react'
import { useTranslations } from 'next-intl'
import ProductCard from '@/components/product-card'
import { unstable_setRequestLocale } from 'next-intl/server'

async function Products() {
   const res = await fetch(
      `https://66199165125e9bb9f29a4be1.mockapi.io/api/v1/products`
   )
   const data = await res.json()

   return (
      <>
         {data.map((product: any) => (
            <ProductCard
               key={product.id}
               id={product.id}
               name={product.name}
               picture={product.image}
               label={product.label}
            />
         ))}
      </>
   )
}

export default function Page({
   params: { locale },
}: {
   params: { locale: string }
}) {
   unstable_setRequestLocale(locale)
   const t = useTranslations('Products')
   return (
      <>
         <div className="max-w-screen-2xl mx-auto px-4 py-10 xl:py-16 transition-all">
            <h1 className="text-3xl mb-6 sm:mb-10">{t('head')}</h1>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
               <Suspense fallback={<span>Loading...</span>}>
                  <Products />
               </Suspense>
            </div>
         </div>
      </>
   )
}
