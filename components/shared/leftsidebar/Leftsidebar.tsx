"use client"
import { sidebarLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { SignedOut } from '@clerk/nextjs';



const Leftsidebar = () => {
  const pathname = usePathname();

  return (
    <section className='justify-between background-light900_dark200 w-[266px]
    min-h-screen top-0 sticky p-6 light-border left-0 flex flex-col overflow-y-auto
    border-r pt-36 shadow-light-300 dark:shadow-none max-sm:hidden custom-scrollbar max-lg:w-[100px]'>
        <div className='flex flex-1 flex-col gap-6'>
            {sidebarLinks.map((item) => {
                const isActive = (pathname.includes(item.route) && item.route.length > 1) || 
                pathname === item.route;

                return (
                      <Link 
                      key={item.route}
                      href={item.route}
                          className={`${isActive ? 'primary-gradient rounded-lg text-light-900': 'text-dark300_light900'}
                          flex items-center justify-start gap-4 bg-transparent p-4`}
                      >
                          <Image
                          className={`${isActive ? "" : "invert-colors"}`}
                              src={item.imgURL}
                              alt={item.label}
                              width={20}
                              height={20}
                          />
                          <p className={`${isActive ? 'base-bold' : 'base-medium'} max-lg:hidden`}>{item.label}
                          </p>
                      </Link>
                  )
                
            })}
        </div>

        <SignedOut>
  <div className='flex flex-col gap-3'>

      <Link href="/sign-in">
        <Button className='small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none'>
          <Image 
          src="/assets/icons/accounts.svg"
          alt='login'
          width={20}
          height={20}
          className='invert-colors lg:hidden'
          />
          <span className='primary-text-gradient max-lg:hidden'>
            Log In
          </span>
        </Button>
      </Link>

      <Link href="/sign-up">
        <Button className='small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none'>
          <Image 
          src="/assets/icons/sign-up.svg"
          alt='signup'
          width={20}
          height={20}
          className='invert-colors lg:hidden'
          />
          <span className='primary-text-gradient max-lg:hidden'>
            Sign Up
          </span>
        </Button>
      </Link>



      <Link href="/sign-up">
        <Button className='small-medium light-border-2 btn-tertiary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none text-dark400_light900'>    
          Sign Up
        </Button>
      </Link>

  </div>
</SignedOut>
    </section>


  )
}

export default Leftsidebar