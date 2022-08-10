import React from 'react'
import './home.css'

export default function Home() {
    return (
        <div className='home'>
            <h1 id='namePlate'>JOSHUA DIAZ</h1>
            <hr/>
            <ul>
                <li><a href='/about'><button className='homeBut'>ABOUT ME</button></a></li>
                <li><a href='/projects'><button className='homeBut' href='/projects'>PROJECTS</button></a></li>
                <li><a href='/contact'><button className='homeBut' href='/contact'>CONTACT</button></a></li>
            </ul>
        </div>
    )
}
