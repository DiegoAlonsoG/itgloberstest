import React from 'react'
import {FiUmbrella} from 'react-icons/fi'
import {RiShoppingBagLine} from 'react-icons/ri'
import {BsMouse3} from 'react-icons/bs'
import {TbArmchair} from 'react-icons/tb'
import { MdKeyboardArrowDown } from 'react-icons/md'


export default function Nav() {
  return (
    <div className='text-white w-full flex justify-between bg-transparent absolute top-0 mt-6'>

      <p className="flex font-['Banda'] text-[100px] ml-10">Pufi<div className='text-[20px] mt-[1rem]'>®</div></p>

      <ul className='grid grid-rows-1 grid-cols-4 items-center divide-x divide-gray-400'>
        <li className='px-10'>
          <TbArmchair className='mx-auto' color='white' size='50px'/>
          <h3 className='tracking-wider'>PUFI PUFF</h3>
        </li>
        <li className='px-10'>
          <FiUmbrella className='mx-auto' color='white' size='50px'/>
          <h3 className='tracking-wider'>PUFI RAIN</h3>
        </li>
        <li className='px-10'>
          <RiShoppingBagLine className='mx-auto' color='white' size='50px'/>
          <h3 className='tracking-wider'>PUFI CART</h3>
        </li>
        <li className='px-10'>
          <BsMouse3 className='mx-auto' color='white' size='50px'/>
          <h3 className='tracking-wider'>PUFI NAP</h3>
        </li>
      </ul>

      <div className='pr-4 items-center h-8 grid grid-rows-1 grid-cols-2 divide-x divide-gray-400 tracking-wider'>
        <div className='flex text-center mx-2'>
          <div className=''>MI CUENTA</div>
          <MdKeyboardArrowDown color='white'/>
        </div>
        <div className='text-center px-2'>MI COMPRA</div>
      </div>

    </div>
  )
}
