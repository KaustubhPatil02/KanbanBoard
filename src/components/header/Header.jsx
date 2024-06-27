import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { merge } from '@/lib/utils'

const Header = () => {
  return (
    <div>
      <div className='hidden md:flex'>
        <Link href="/">
          <div className='hover:opacity-45 transition flex items-center gap-x-2 '>
            <Image src="/logo.png" alt="logo" width={60} height={30} className='' />
            {/* <h2 className={merge("text-lg text-slate-700 pb-1 ")}>KanBAN</h2> */}
            <h2 className={merge("text-lg text-slate-700 pb-1 custom-font")}>KanBAN</h2>
          </div>
        </Link>
      </div>

      {/* clerk auth */}
      <div>
        <Link href="/auth/signin">
          <span className={twMerge("text-slate-700 hover:text-slate-900")}>Sign in</span>
        </Link>
        <Link href="/auth/signup">
          <span className={twMerge("text-slate-700 hover:text-slate-900")}>Sign up</span>
        </Link>
      </div>
    </div>
  )
}

export default Header