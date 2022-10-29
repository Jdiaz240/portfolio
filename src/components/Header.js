import Icon from '../assets/icon.png'

export default function Header() {
    return (
        <header id='header'>
                <a href='/'><img id='plate'src={Icon} alt='Joshua Diaz' ></img></a>
            <nav>
                <a href='/about'><button className='navButton'>About me</button></a>
                <a href='/projects'><button className='navButton'>Projects</button></a>
                <a href='/contact'><button className='navButton'>Contact</button></a>
            </nav>
        </header>
    )
}
