"use client"
import React from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'

interface CustomInputProps {
  route: string
  iconPosition: string
  imgSrc: string
  otherClasses?: string
  placeholder: string
}


const LocalSearchbar = ({
  route,
  iconPosition,
  imgSrc,
  otherClasses,
  placeholder
}: CustomInputProps) => {
  return (
 
        <div className={`background-light800_darkgradient relative flex 
        min-h-[56px] grow items-center rounded-[10px] gap-4 px-4
        ${otherClasses}`}>
            {iconPosition === 'left' && (
            <Image 
                src={imgSrc}
                alt='search icon'
                width={24}
                height={24}
                className='cursor-pointer'
            />
            )}
            
            <Input 
                type='text'
                placeholder={placeholder}
                value=""
                onChange={() => {}}
                className='paragraph-regular no-focus shadow-none
                outline-none placeholder background-light800_darkgradient
                border-none'
            />
            
            {iconPosition === 'right' && (
            <Image 
                src={imgSrc}
                alt='search icon'
                width={24}
                height={24}
                className='cursor-pointer'
            />
            )}


        </div>

  )
}

export default LocalSearchbar