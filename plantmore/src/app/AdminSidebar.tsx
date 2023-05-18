'use client'
import { logo } from '@/assets/images'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'

const AdminSidebar = () => {
    const pathName = usePathname()
  return (
    <div className='w-[250px] h-screen bg-gray-100'>
        <div className='flex justify-center flex-col items-center'>
            <div className='py-3 bg-gray-200 w-full flex justify-center pt-6 mb-10'>
             <Image src={logo} alt="plant more logo" width="120"  className="mb-4"/>
            </div>
            <nav className="flex-col flex justify-center items-start w-full">
            {[
              ["Dashboard", "/admin"],
              ["Products", "/admin/products"],
              ["Categories", "/admin/categories"],
              ["Orders", "/admin/orders"],
            ].map(([title, url]) => (
              <a
                href={url}
                className={`${pathName == url ? "text-lime-600 bg-gray-200" : "text-slate-700"} w-full  px-6 py-2 text-gray-700 font-medium hover:bg-gray-200 hover:text-slate-900`}
              >
                {title}
              </a>
            ))}
          </nav>
        </div>
    </div>
  )
}

export default AdminSidebar