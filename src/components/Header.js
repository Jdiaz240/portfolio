

export default function Header() {
    return (
        <header id='header'>
            <div id='plate'>
                <h1>Joshua Diaz</h1>
            </div>
            <nav>
                <a href='/about'><button className='navButton'>About me</button></a>
                <a href='/projects'><button className='navButton'>Projects</button></a>
                <a href='/contact'><button className='navButton'>Contact</button></a>
            </nav>
        </header>
    )
}
