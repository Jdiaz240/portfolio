import Icon from '../assets/icon.png'

export default function Header() {
    return (
        <header id='header'>
                <a href='/'><img id='plate'src={Icon} alt='Joshua Diaz' ></img></a>
            <nav>
                <a href='/about'><button className='navButton'>ABOUT ME</button></a>
                <a href='/projects'><button className='navButton'>PROJECTS</button></a>
                <a href='/contact'><button className='navButton'>CONTACT</button></a>
            </nav>
        </header>
    )
}
