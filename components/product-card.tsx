'use client'

import { useRouter } from 'next/navigation'
import { Card, CardBody, CardFooter, Chip } from '@nextui-org/react'
import Image from 'next/image'

export default function ProductCard({
   id,
   name,
   picture,
   label,
   noPress = false,
}: any) {
   const router = useRouter()
   return (
      <Card
         shadow="none"
         disableRipple
         isPressable={!noPress}
         isHoverable={!noPress}
         onPress={() =>
            !noPress &&
            router.push(`/products/${id}`, {
               scroll: false,
            })
         }
         classNames={{
            base: 'rounded-3xl border p-3',
            footer: 'flex-wrap justify-between gap-2 text-sm text-left',
         }}
      >
         <CardBody className="overflow-visible p-0">
            {picture && (
               <Image
                  width={300}
                  height={300}
                  src={picture}
                  alt={name}
                  className="w-full max-w-full object-cover bg-gray-100 rounded-2xl"
               />
            )}
         </CardBody>
         <CardFooter>
            <h1 className="font-bold">{name}</h1>
            <Chip variant="flat">{label}</Chip>
         </CardFooter>
      </Card>
   )
}
