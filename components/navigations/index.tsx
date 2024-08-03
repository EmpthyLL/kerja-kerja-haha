"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const pathName = usePathname().split('/').slice(0, 3).join('/')
    const menus = [
        {
            title:'Home',
            href: '/',
        },
        {
            title:'Dashboard',
            href: '/dashboard',
        },
        {
            title:'Detail',
            href: '/detail',
            children: [
                    {
                    title:'Settings',
                    href: '/detail/settings'
                },
                    {
                    title:'Profile',
                    href: '/detail/profile'
                },
                    {
                    title:'User Setting',
                    href: '/detail/user-setting'
                },
            ]
        },
        {
            title:'About Us',
            href: '/about-us',
            children:[
                {
                    title:'Fakta Tentang Ganja',
                    href: '/about-us/ganja-facts'
                },
                {
                    title:'Ganja Sehat?',
                    href: '/about-us/ganja-sehat'
                },
                {
                    title:'Dukung Legalisasi Ganja!',
                    href: '/about-us/ganja-legal'
                },
            ]
        }
    ]
    return (
        <>
            <div className="pb-12 pl-6 h-screen bg-background hidden md:block sticky top-0 z-10 border-r transition-all">
                {menus.map((menu, key) => 
                {
                    return (
                    menu.children ? (
                        <Accordion key={key} type="single" collapsible className="w-[200px]">
                            <AccordionItem value={`item-${key}`} className="w-full border-none hover:cursor-pointer">
                                <AccordionTrigger className={`pl-4 pr-3 h-9 text-sm justify-between hover:no-underline  hover:bg-secondary/80`}>
                                    {menu.title}
                                </AccordionTrigger>
                                <AccordionContent className={`inline-flex items-center w-full hover:bg-secondary/80 h-9 mt-1 space-y-1 pb-0 pl-4 ${pathName === menu.href ? 'bg-secondary' : ''}`}>
                                    <Link href={menu.href} className="pl-3">{menu.title}</Link>
                                </AccordionContent>
                            {menu.children.map((child, childKey) => {
                                return (
                                <AccordionContent key={childKey} className={`inline-flex items-center w-full hover:bg-secondary/80 h-9 mt-1 space-y-1 pb-0 pl-4 ${pathName === child.href ? 'bg-secondary' : ''}`}>
                                    <Link href={child.href} className="pl-3">{child.title}</Link>
                                </AccordionContent>
                            )})}
                            </AccordionItem>
                        </Accordion>
                    ) : <Link key={key} className={`inline-flex text-sm items-center w-full hover:bg-secondary/80 h-9 mt-1 space-y-1 pb-0 pl-4 ${pathName === menu.href ? 'bg-secondary' : ''}`} href={menu.href}>{menu.title}</Link>
                )
                }
            )}
            </div>
        </>
    );
}    