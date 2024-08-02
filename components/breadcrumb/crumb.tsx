'use client'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import { usePathname } from "next/navigation"
import { Fragment } from "react"

export default function BreadcrumbNav(){
    const pathName = usePathname()
    const pages = pathName.split('/')
    let link = '/'
    const labels = usePathname() === '/' ? [{page: 'Home',link:'/'}] : pages.map((page,key) => {
        if(key > 0){
            link += key === 1 ? page : '/' + page
        }
        return {
            page: page? page.split('-').map(p => p[0].toUpperCase()+ p.slice(1)).join(' ') : 'Home',
            link: key === 0 ? '/' : link
        }
    })
    console.log(labels)
    return (
        <Breadcrumb>
        <BreadcrumbList className="pb-2">
            {labels.map((lab,key) => {
                return (
                    labels.length > 1 ?(
                    <Fragment key={key}>
                    <BreadcrumbItem>
                    {key+1 === labels.length ? <BreadcrumbPage>{lab.page}</BreadcrumbPage> : <BreadcrumbLink href={lab.link}>{lab.page}</BreadcrumbLink>}
                    </BreadcrumbItem>
                    {key+1 === labels.length ? "" : <BreadcrumbSeparator />}
                    </Fragment>) : <BreadcrumbPage>{lab.page}</BreadcrumbPage>
                )
            })}
        </BreadcrumbList>
        </Breadcrumb>
    )
}