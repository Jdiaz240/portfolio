import React from 'react'
import '../../App.css'
import Header from '../../components/Header'

export default function Contact() {
  return (
    <>
    <Header/>
    <div id='contactInfo'>
    <a id='contact' href="mailto:jad24096@gmail.com"><button id='contact' className='navButton'>SEND EMAIL</button></a><br/>
    <a  href='https://github.com/Jdiaz240'><button className='navButton'>MY GITHUB</button></a>
    </div>
    </>
  )
}
