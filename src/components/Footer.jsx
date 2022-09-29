import React from 'react'

export default function Footer() {
  return (
    <div>
        
        <div className='flex'>

            <img src='xxx' alt='loguito'/>

            <div className='grid grid-cols-4 grid-rows-1'>
                <ul>
                    <li>PUFI RAIN</li>
                    <li>PUFI PUFF</li>
                    <li>PUFI CART</li>
                    <li>PUFI NAP</li>
                </ul>
                <ul>
                    <li>CONTACTO</li>
                    <li>AYUDA</li>
                    <li>CÓMO COMPRAR</li>
                    <li>TÉRMINOS & CONDICIONES</li>
                </ul>
                <div>
                    <p>COMPRA 100% SEGURA</p>
                    <div className='flex'>
                        <img src='xxx' alt='qr'/>
                        <img src='xxx' alt='escudo'/>
                        <p>COMPRÁ CON LA GARANTÍA DE PUFI</p>
                    </div>
                </div>
                <div>
                    <p>SEGUINOS EN</p>
                    <img src='xxx' alt='fb'/>
                    <img src='xxx' alt='tw'/>
                    <img src='xxx' alt='ig'/>
                </div>
            </div>
        </div>

        <div className='flex'>
            <p>PUFI Copyright 2017 - Todos los derechos reservados</p>
            <img src='xxx' alt='brandlive'/>
        </div>

    </div>
  )
}
