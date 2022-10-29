import Header from '../../components/Header'
import '../../App.css'
import Profile from '../../assets/profile.jpg'

export default function AboutMe() {
  return (
    <>
      <Header />
      <div className='bioContainer'>
        <aside>
          <img id='test' alt='profile' src={Profile}></img>
        </aside>
          <p id='biography'>Hi! If it wasn't obivous from the home page my name is Joshua Diaz, but <em>Josh</em> is fine.
            I was born in New York, but raised in a small town in Central Flordia. I have an A.A. degree from Valencia college
            here in Central Florida and Certificate of completion from the UCF coding bootcamp also from here in Central Florida.
            It was in this bootcamp where I learned all of the fundamentals of javascript and how to create Full Stack Projects using the MERN Stack.
            I am currently open for work. If you click on the 'Projects' button above you'll be able to see the projects I've completed that
            I'm most proud of. Feel Free to look around the page, and don't be afraid to use the 'Contact' page to reach out to me for any coding needs
            or business inquireies. Thanks for stopping by!</p>
        
      </div>
    </>
  )
}
