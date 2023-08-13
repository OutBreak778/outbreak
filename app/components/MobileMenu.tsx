'use client'

import { LuInfo, LuLayoutDashboard} from 'react-icons/lu'
import Link from 'next/link'
import { useState } from 'react'
import Button from './ui/Button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../components/ui/DropDownMenu'

const MobileMenu = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <nav className='md:hidden fixed z-50 bottom-20 right-0 left-0 flex justify-center'>
      <div className='shadow-2xl rounded-md outline outline-2 outline-white dark:outline-slate-900'>
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild onClick={() => setOpen((prev) => !prev)}>
            <Button variant='outline' size='lg'>
              Menu
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-56'>
            <DropdownMenuGroup onClick={() => setOpen(false)}>
              <DropdownMenuItem asChild>
                  <Link
                    href='/'
                    className='w-full flex items-center gap-1.5'>
                    <LuLayoutDashboard className='mr-2 h-5 w-5' />
                    <span>Dashboard</span>
                  </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link
                  href='/documentation'
                  className='w-full flex items-center gap-1.5'>
                  <LuInfo className='mr-2 h-5 w-5' />
                  <span>Documentation</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}

export default MobileMenu