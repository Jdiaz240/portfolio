import React from 'react'
import './home.css'

export default function Home() {
    return (
        <section className='home'>
            <h1 id='namePlate'>JOSHUA DIAZ</h1>
            <hr/>
            <ul>
                <li><button className='homeBut' href='/about'>ABOUT ME</button></li>
                <li><button className='homeBut' href='/projects'>PROJECTS</button></li>
                <li><button className='homeBut' href='/contact'>CONTACT</button></li>
            </ul>
        </section>
    )
}
