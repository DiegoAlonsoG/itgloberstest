import React from 'react'
import ig1 from '../img/ig1.jpeg'
import ig2 from '../img/ig2.jpeg'
import ig3 from '../img/CartMain.jpeg'
import ig4 from '../img/PuffMain.webp'
import ig5 from '../img/RainMain.jpeg'
import ig6 from '../img/NapMain.webp'


export default function Instagram() {
  return (
    <div className='mt-[10vh]'>

        <p className='text-center text-[15px] text-gray-500 mb-2'>INSTAGRAM</p>
        <p className='text-center mb-[10vh] text-7xl'>#ESPUFI</p>
        <div className='grid grid-rows-2 grid-cols-3 w-[51vw] h-[60vh] mx-auto gap-1'>
            <img className='w-[17vw] h-[30vh]' src={ig2} alt='2'/>
            <img className='w-[17vw] h-[30vh]' src={ig1} alt='1'/>
            <img className='w-[17vw] h-[30vh]' src={ig3} alt='3'/>
            <img className='w-[17vw] h-[30vh]' src={ig4} alt='4'/>
            <img className='w-[17vw] h-[30vh]' src={ig5} alt='5'/>
            <img className='w-[17vw] h-[30vh]' src={ig6} alt='6'/>
        </div>

    </div>
  )
}
