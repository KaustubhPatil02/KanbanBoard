import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { merge } from '@/lib/utils'
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs'
// import { UserButton } from '@clerk/nextjs'

const Header = () => {
  return (
    <div>
      <div className='hidden md:flex'>
        <Link href="/">
          <div className='hover:opacity-45 transition flex items-center gap-x-2 '>
            {/* <Image src="/logo.png" alt="logo" width={60} height={30} className='' /> */}
            {/* <h2 className={merge("text-lg text-slate-700 pb-1 ")}>KanBAN</h2> */}
            <h2 className={merge("text-lg text-slate-700 pb-1 custom-font")}>KanBAN</h2>
          </div>
        </Link>
      </div>

      {/* clerk auth */}
      <div>
        <OrganizationSwitcher hidePersonal appearance={
          {
            elements:{
              rootBox:{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }
            }
          }
        }/>
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