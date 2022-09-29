import React from 'react'

export default function Nav() {
  return (
    <div className='flex bg-transparent'>

      <img src='xxx' alt='logo'/>

      <ul className='grid grid-rows-1 grid-cols-4'>
        <li>
          <img src='xxx' alt='1'/>
          <h3>PUFI PUFF</h3>
        </li>
        <li>
          <img src='xxx' alt='2'/>
          <h3>PUFI RAIN</h3>
        </li>
        <li>
          <img src='xxx' alt='3'/>
          <h3>PUFI CART</h3>
        </li>
        <li>
          <img src='xxx' alt='4'/>
          <h3>PUFI NAP</h3>
        </li>
      </ul>

      <div className='flex'>
        <div>MI CUENTA
          <button><img src='xxx' alt='flecha'/></button>
        </div>
        <div>MI COMPRA</div>
      </div>

    </div>
  )
}
