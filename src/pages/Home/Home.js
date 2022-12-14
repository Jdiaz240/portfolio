import React from 'react'
import Logo from '../../assets/icon.png'

export default function Home() {
    return (
        <>
            <div id='bigContainer'>

                <div id='container'>
                    <h1 id='namePlate'>JOSHUA DIAZ</h1>
                    <h2>Web Developer</h2>
                    <hr />
                    <ul>
                        <li><a href='/about'><button className='homeBut'>ABOUT ME</button></a></li>
                        <li><a href='/projects'><button className='homeBut' href='/projects'>PROJECTS</button></a></li>
                        <li><a href='/contact'><button className='homeBut' href='/contact'>CONTACT</button></a></li>
                    </ul>
                </div>
                <img src={Logo} alt='logo' id='icon'></img>
            </div>
        </>
    )
}
