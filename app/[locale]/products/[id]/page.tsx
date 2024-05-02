import ProductCard from '@/components/product-card'
import Breadcrumb from '@/components/breadcrumb'

async function getProduct(id: string) {
   const res = await fetch(
      `https://66199165125e9bb9f29a4be1.mockapi.io/api/v1/products/${id}`
   )
   const data = await res.json()
   return data
}

export async function generateStaticParams() {
   const res = await fetch(
      `https://66199165125e9bb9f29a4be1.mockapi.io/api/v1/products`
   )
   const data = await res.json()

   return data.map((product: any) => ({
      id: product.id.toString(),
   }))
}

export default async function Page({ params }: any) {
   const product = await getProduct(params.id)
   return (
      <div className="max-w-screen-2xl mx-auto px-4 py-10 sm:py-20">
         <div className="mb-6 sm:mb-10">
            <Breadcrumb name={product.name} />
         </div>
         <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
            <ProductCard
               name={product.name}
               picture={product.image}
               label={product.label}
               noPress
            />
            <div>
               <p className="first-letter:text-7xl first-letter:mr-3 first-letter:float-left text-balance leading-relaxed">
                  {product?.description}
               </p>
            </div>
         </div>
      </div>
   )
}
