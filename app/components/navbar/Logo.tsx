'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Logo = () => {
    const router = useRouter();
  return (
    <Image 
     className='hidden md:block cursor-pointer'
     alt='logo'
     height='100'
     width='100'
     src='/images/images.png'
     />
  )
}

export default Logo