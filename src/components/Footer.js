import React from 'react'
import Badge from '../assets/ucfbadge.png'
import Htmlcert from '../assets/htmlcert.jpg'

export default function Footer() {
  return (
    <footer>
        <a href='https://badgr.com/public/assertions/HeocCFhvQAGiBqPp79ekjA'><img id='badge' src={Badge} alt='badge'></img></a>
        <a href='https://verify.w3schools.com/1MQRVGU4K9'><img id='cert' src={Htmlcert} alt='certification'></img></a>  
    </footer>
  )
}
