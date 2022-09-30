import React from 'react'
import Footer from '../../components/Footer'
import Form from '../../components/Form'
import Instagram from '../../components/Instagram'
import Main from '../../components/Main'
import Nav from '../../components/Nav'
import PufiCart from '../../components/PufiCart'
import PufiNap from '../../components/PufiNap'
import PufiPuff from '../../components/PufiPuff'
import PufiRain from '../../components/PufiRain'

export default function Landing() {
  return (
    <>

      <Nav/>

      <Main/>

      <PufiRain/>
      <PufiPuff/>
      <PufiCart/>
      <PufiNap/>

      <Instagram/>
      <Form/>

      <Footer/>
      
    </>
  )
}
