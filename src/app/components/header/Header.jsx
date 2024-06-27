import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

const Header = () => {
  return (
    <div>
        <div>
            <Link href="/">
            <div>
                <h2 className='pl-10 pt-2'>KanBAN</h2>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Header