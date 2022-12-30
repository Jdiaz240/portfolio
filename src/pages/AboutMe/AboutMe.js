import Header from '../../components/Header'
import '../../App.css'
import Profile from '../../assets/profile.jpg'
import Footer from '../../components/Footer'

export default function AboutMe() {
  return (
    <>
      <Header />
      <div className='bioContainer'>
        <aside>
          <img id='profilePic' alt='profile' src={Profile}></img>
          </aside>
          <p id='biography'>
            Hi there, and welcome to my portfolio. My name is Josh and I'm an aspiring junior developer! I started my coding journey at the Full Stack bootcamp
            at UCF and for now, I am more of a front end developer but am currently working on my backend knowledge and honing my skills in Full Stack 
            development with the MERN stack. If you'd like to see some of the projects I've worked on please visit the <a id='inline-link' href='/projects'>projects</a> page 
            and scroll through examples I've provided. A little bit about me, I was raised and currently live in a small town in Central Florida. I enjoy movies, anime,
            and just about anything DC or Marvel (though DC definitely has the better stories). I try to stay active and like to run in obstacle course races like 
            the Savage Race and recently completed my first half marathon. Down below you can find links to my current certifications. <br/>
            Thanks for stopping by!
            </p>
      </div>
      <Footer/>
    </>
  )
}
