import React from 'react'

export default function Header() {
    return (
        <header id='header'>
            
            <h1>Joshua Diaz</h1>
            
            
                <button className='navButton' href='/about'>About me</button>
                <button className='navButton' href='/projets'>Projects</button>
                <button className='navButton' href='/contact'>Contact</button>
            
        </header>
    )
}
