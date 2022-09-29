import React from 'react'
import ButtonNoBorder from '../componentsUI/ButtonNoBorder'

export default function PufiCart() {
  return (
    <div className='flex'>
        <div> img
        </div>
        <div>
            <img src='xxx' alt='rain'/>
            <p>Pufi CART</p>
            <p/>
            <p>Descripcion del producto. Este es un texto simulado</p>
            <ButtonNoBorder>
                <img src='xxx' alt='flecha'/>
                VER MAS
            </ButtonNoBorder>
        </div>
    </div>
  )
}
