import React from 'react'
import ButtonNoBorder from '../componentsUI/ButtonNoBorder'

export default function PufiPuff() {
  return (
    <div className='flex'>
        <div>
            <img src='xxx' alt='rain'/>
            <p>Pufi PUFF</p>
            <p/>
            <p>Descripcion del producto. Este es un texto simulado</p>
            <ButtonNoBorder>
                <img src='xxx' alt='flecha'/>
                VER MAS
            </ButtonNoBorder>
        </div>
        <div> img
        </div>
    </div>
  )
}
