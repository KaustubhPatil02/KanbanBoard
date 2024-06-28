import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { merge } from '@/lib/utils'
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs'
// import { UserButton } from '@clerk/nextjs'

const Header = () => {
  return (
    <div className='fixed z-50 top-0 px-4 w-full h-14 border-b shadow-sm flex items-center justify-center' style={{ backgroundColor: '#020617' }}>
      <div className='hidden md:flex'>
        <Link href="/">
          <div className='hover:opacity-80 transition flex items-center gap-x-2 '>
            {/* <Image src="/logo.png" alt="logo" width={60} height={30} className='' /> */}
            {/* <h2 className={merge("text-lg text-slate-700 pb-1 ")}>KanBAN</h2> */}
            <h2 className={merge("text-lg text-slate-300 pb-1 custom-font font-bold")}>KanBAN BoArD</h2>
          </div>
        </Link>
      </div>

      {/* clerk auth */}
      <div className='ml-auto flex  items-center gap-x-2'>
        <OrganizationSwitcher hidePersonal appearance={
          {
            elements: {
              rootBox: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }
            }
          }
        } />
        <UserButton
          afterSignOutUrl='/'
          appearance={{
            elements: {
              avatarBox: {
                height: '40px',
                width: '40px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              },
            }
          }}
        />

      </div>
    </div>
  )
}

export default Header