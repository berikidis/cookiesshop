'use client'

import {
   Navbar,
   NavbarBrand,
   NavbarContent,
   NavbarItem,
   NavbarMenu,
   NavbarMenuItem,
   NavbarMenuToggle,
} from '@nextui-org/react'
import { FacebookIcon, InstagramIcon } from '@/components/icons'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import LocaleSwitcher from '@/components/LocaleSwitcher'

type NavbarItemProps = {
   id: number
   title: string
   href: string
}

const Navigation = () => {
   const t = useTranslations('Navigation')
   const pathname = usePathname()
   const [isMenuOpen, setIsMenuOpen] = useState(false)

   const navbarItems: NavbarItemProps[] = [
      {
         id: 1,
         title: t('products.title'),
         href: '/products',
      },
      {
         id: 2,
         title: t('about-us.title'),
         href: '/about',
      },
      {
         id: 4,
         title: t('contact.title'),
         href: '/Kontakt',
      },
   ]

   return (
      <>
         <Navbar
            height="5rem"
            maxWidth="2xl"
            isBlurred={false}
            isBordered
            onMenuOpenChange={setIsMenuOpen}
            classNames={{
               wrapper: ['px-4'],
               item: [
                  'flex',
                  'relative',
                  'h-full',
                  'items-center',
                  "data-[active=true]:after:content-['']",
                  'data-[active=true]:after:absolute',
                  'data-[active=true]:after:bottom-0',
                  'data-[active=true]:after:left-0',
                  'data-[active=true]:after:right-0',
                  'data-[active=true]:after:h-[3px]',
                  'data-[active=true]:text-[#6D321A]',
                  'data-[active=true]:after:rounded-full',
                  'data-[active=true]:after:bg-[#6D321A]',
               ],
            }}
         >
            <NavbarContent>
               <NavbarMenuToggle
                  className="lg:hidden"
                  aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
               />
               <NavbarBrand as={Link} href="/">
                  <Image
                     priority
                     width={140}
                     height={140}
                     src="/logo.svg"
                     alt="Brand logo for cookies shop"
                     className="max-w-32 max-h-32 object-contain"
                  />
               </NavbarBrand>
            </NavbarContent>
            <NavbarContent
               className="hidden lg:flex md:gap-16 gap-4"
               justify="center"
            >
               {navbarItems.map((item) => (
                  <NavbarItem key={item.id} isActive={pathname === item.href}>
                     <Link
                        color="foreground"
                        href={item.href}
                        className="text-lg font-medium"
                     >
                        {item.title}
                     </Link>
                  </NavbarItem>
               ))}
            </NavbarContent>
            <NavbarContent justify="end">
               <NavbarItem className="flex sm:gap-6 gap-4">
                  <Link href="#">
                     <FacebookIcon className="w-6 text-foreground" />
                  </Link>
                  <Link href="#">
                     <InstagramIcon className="w-6 text-foreground" />
                  </Link>
               </NavbarItem>
               <LocaleSwitcher />
            </NavbarContent>
            <NavbarMenu>
               {navbarItems.map(({ id, title, href }) => {
                  return (
                     <NavbarMenuItem key={id}>
                        <Link
                           color="foreground"
                           href={href}
                           className="text-2xl font-medium"
                        >
                           {title}
                        </Link>
                     </NavbarMenuItem>
                  )
               })}
            </NavbarMenu>
         </Navbar>
      </>
   )
}

export default Navigation
