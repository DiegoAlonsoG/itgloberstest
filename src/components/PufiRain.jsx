import React from 'react'
import ButtonBorder from '../componentsUI/ButtonBorder'
import ButtonNoBorder from '../componentsUI/ButtonNoBorder'

export default function PufiRain() {
  return (
    <div className='flex'>
        <div>
            <ButtonBorder>SHOP</ButtonBorder>
        </div>
        <div>
            <img src='xxx' alt='rain'/>
            <p>Pufi RAIN</p>
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
