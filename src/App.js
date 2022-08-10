// import Header from './components/Header'
// import Footer from './components/Footer'
import AboutMe from './pages/AboutMe/AboutMe.js'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
   <>
    <Router>
      <Routes>
        <Route
          path='/'
          element={<Home/>}
          />
          <Route
          path='/about'
          element={<AboutMe/>}
          />
          <Route
          path='/projects'
          element={<Projects/>}
          />
          <Route 
          path='/contact'
          element={<Contact/>}
          />
      </Routes>
    </Router>

   </>
  );
}

export default App;
