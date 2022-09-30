import React from 'react'
import cart from '../img/CartLogo.png'
import Button from 'react-bootstrap/Button';
import {MdKeyboardArrowRight} from 'react-icons/md'

export default function PufiCart() {
  return (
    <div className='flex'>

        <div className='cart'/>

        <div className='flex flex-col items-center bg-white w-[50vw] py-48'>
            <img className='h-40 w-40' src={cart} alt='cart'/>
            <p className='text-[60px]'>Pufi CART</p>
            <p className='w-[5vw] border-solid border-gray-400 border-y-2'/>
            <p className='w-[10vw] text-center'>Descripcion del producto. Este es un texto simulado</p>
            <Button variant="outline-light">
                <div className='flex items-center'>
                    <MdKeyboardArrowRight color='black'/>
                    <div className='text-black'>VER MAS</div>
                </div>
            </Button>
        </div>
    </div>
  )
}
