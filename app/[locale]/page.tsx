import { Suspense } from 'react'
import Hero from '@/components/hero'
import ProductInfo from '@/components/product-info'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import ProductCard from '@/components/product-card'
import ProductButton from '@/components/product-button'
import { unstable_setRequestLocale } from 'next-intl/server'

async function PopularProducts() {
   const res = await fetch(
      `https://66199165125e9bb9f29a4be1.mockapi.io/api/v1/products`
   )
   const data = await res.json()

   return (
      <>
         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {data.slice(4, 10).map((product: any) => (
               <div
                  key={product.id}
                  className="flex flex-col gap-4 text-center"
               >
                  <Image
                     width={300}
                     height={300}
                     src={product.image}
                     alt={product.name}
                     className="w-full max-w-full object-cover bg-gray-100 rounded-full p-2"
                  />
                  <h1 className="text-sm">{product.name}</h1>
               </div>
            ))}
         </div>
      </>
   )
}

async function Products() {
   const res = await fetch(
      `https://66199165125e9bb9f29a4be1.mockapi.io/api/v1/products`
   )
   const data = await res.json()

   return (
      <>
         {data.slice(0, 4).map((product: any) => (
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
   const t = useTranslations('PopularProducts')

   return (
      <main>
         <Hero />
         <div className="max-w-screen-xl mx-auto px-4 py-16 xl:py-32 transition-all space-y-12">
            <h1 className="text-3xl text-center">{t('title')}</h1>
            <Suspense fallback={<span>Loading...</span>}>
               <PopularProducts />
            </Suspense>
         </div>
         <ProductInfo />
         <div className="max-w-screen-2xl mx-auto px-4 py-16 xl:py-32">
            <div className="md:text-center text-left text-balance space-y-4 md:mb-16 mb-10">
               <h1 className="text-3xl text-center">{t('products')}</h1>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
               <Suspense fallback={<span>Loading...</span>}>
                  <Products />
               </Suspense>
            </div>
            <div className="mt-16 mx-auto justify-center flex">
               <ProductButton />
            </div>
         </div>
      </main>
   )
}
