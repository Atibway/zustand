
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
<p className='text-xs text-gray-500 dark:text-gray-400'>
© 2024 BM Stores. All rights reserved.
</p>
<div className='sm:ml-auto flex gap-4 sm:gap-6'>
<Link
href={"#"}
className='text-xs hover:underline underline-offset-4'
>
Terms of Service
</Link>
<Link
href={"#"}
className='text-xs hover:underline underline-offset-4'
>
Privacy
</Link>
</div>
    </footer>
  )
}
