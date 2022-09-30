import React from 'react'
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../img/Header1.jpeg'
import image2 from '../img/Header2.jpeg'
import image3 from '../img/Header3.jpeg'

export default function Main() {
  return (
    <div className='main'>

    <Carousel className='-z-10 w-[100vw] h-[100vh] absolute top-0'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    
    <div className='bg-transparent flex flex-col justify-center items-center absolute top-[40%] left-[28%]'>
        <h1 className='text-[6rem] w-[45vw] text-white text-center'>ESTAR CÓMODO, NUNCA FUE TAN FÁCIL.</h1>
        <Button variant="outline-light" className='py-2 px-4 mt-[18rem]'>SHOP</Button>
    </div>
        

    </div>
  )
}
