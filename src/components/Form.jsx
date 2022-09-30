import React from 'react'
import {IoMdArrowRoundForward} from 'react-icons/io'

export default function FormControl() {
  return (
    <div className='my-[10vh]'>

        <p className='text-gray-400 text-center text-xl mb-1'>NEWSLETTER</p>
        <p className='text-center text-7xl mb-1'>SUSCRIBITE</p>
        <p className='text-center text-xl'>Y enterate de todas las novedades</p>

    <form className='flex w-[40vw] m-auto text-center border-solid border-black border-2 justify-between p-2' action="https://formspree.io/f/maykjyrj" method="POST">
        <input className='w-[30vw] mx-2' type="email" name="email" placeholder='Ingresa tu email'/>
        <button className='mx-2' type="submit">
            <IoMdArrowRoundForward/>
        </button>
    </form>

    </div>
  )
}
