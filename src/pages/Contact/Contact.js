import React from 'react'
import '../../App.css'
import Header from '../../components/Header'

export default function Contact() {
  return (
    <>
    <Header/>
    <p id='contact'>
    <a href="mailto:jad24096@gmail.com"><button className='navButton'>SEND EMAIL</button></a><br/>
    <a href='https://github.com/Jdiaz240'><button className='navButton'>MY GITHUB</button></a><br/>
    </p>
    </>
  )
}
