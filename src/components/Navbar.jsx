import React from 'react'
import {BellIcon, ChevronDownIcon, MenuIcon, SearchIcon, UserCircleIcon, XIcon} from '@heroicons/react/outline'
const Navbar=()=>{
    return (
        <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                <MenuIcon className='w-3'/>

                    <h1 className='text-3x font-bold mr-4 sm:text-4xl'>NoAcademy</h1>
                  </div>

                <UserCircleIcon className='w-7 h-5' />
                <SearchIcon className='w-3'/>

                <BellIcon  className='w-3'/>
                 <ChevronDownIcon className='w-7 h-5' />


            </div>

        </div>

)

}
export default Navbar