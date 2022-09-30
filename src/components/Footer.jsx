import React from 'react'
import qr from '../img/aqr.png'
import shield from '../img/ashield.png'
import brand from '../img/abrand.png'
import {ImFacebook, ImInstagram, ImTwitter} from 'react-icons/im'


export default function Footer() {
  return (
    <div className='border-y-2 border-solid border-gray-300 pt-[3rem]'>
        
        <div className='flex justify-between mb-10'>

        <p className="flex font-['Banda'] text-[50px] ml-10">Pufi<div className='text-[15px]'>®</div></p>

            <div className='w-[80vw] justify-center grid grid-cols-4 grid-rows-1 divide-x divide-gray-400 font-bold tracking-wider'>
                <ul className='px-8'>
                    <li>PUFI RAIN</li>
                    <li>PUFI PUFF</li>
                    <li>PUFI CART</li>
                    <li>PUFI NAP</li>
                </ul>
                <ul className='px-8'>
                    <li>CONTACTO</li>
                    <li>AYUDA</li>
                    <li>CÓMO COMPRAR</li>
                    <li>TÉRMINOS & CONDICIONES</li>
                </ul>
                <div className='px-8'>
                    <p className='text-center'>COMPRA 100% SEGURA</p>
                    <div className='flex justify-center'>
                        <img className='h-[5rem] mx-4' src={qr} alt='qr'/>
                        <img className='h-[5rem] mx-4' src={shield} alt='escudo'/>
                        <p className='w-[6vw]'>COMPRÁ CON LA GARANTÍA DE PUFI</p>
                    </div>
                </div>
                <div className='flex px-8 pt-0'>
                    <p className='ml-[2rem]'>SEGUINOS EN</p>
                    <ImFacebook className='mx-2'/>
                    <ImTwitter className='mx-2'/>
                    <ImInstagram className='mx-2'/>
                </div>
            </div>
        </div>

        <div className='flex justify-between w-[95vw] m-auto border-solid border-gray-300 border-y-2 pt-1'>
            <p className='text-gray-400'>PUFI Copyright 2017 - Todos los derechos reservados</p>
            <img className='h-[1.5rem] mr-2' src={brand} alt='brandlive'/>
        </div>

    </div>
  )
}
