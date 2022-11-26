import React, { useState } from 'react'
import '../../App.css'
import Header from '../../components/Header'
import Applications from '../../components/Applications'
import Quiz from '../../assets/quizImg.png'
import Palindrome from '../../assets/palindrome.png'
import WordGuess from '../../assets/wordGuess.png'
import WeatherApp from '../../assets/weather.png'

export default function Projects() {
  const [Frame, setFrame] = useState('')


  return (
    <>
      <Header />
      <div id='pageContainer'>
        <div id='actionContainer'>
          <h1 id='activeApp'>Application in Action:</h1>
          <iframe id='frame' src={Frame} title='applications'></iframe>
        </div>
        <div className='projectsContainer'>
          <div id='projectTitle'>
            <h1>Please Click On A Project Below To See It In Action</h1>
          </div>
          <div id='projects'>
            <Applications src={WordGuess} alt={'Word Guess Game'} setFrame={setFrame} projLink={'https://jdiaz240.github.io/wordGuess/'} />
            <Applications src={Quiz} alt={'MK Quiz'} setFrame={setFrame} projLink={'https://jdiaz240.github.io/quiz/'} />
            <Applications src={Palindrome} alt={'Palindrome Checker'} setFrame={setFrame} projLink={'https://jdiaz240.github.io/palindrome/'} />
            <Applications src={WeatherApp} alt={'weather App'} setFrame={setFrame} projLink={'https://jdiaz240.github.io/weatherapp/'} />
          </div>
        </div>
      </div>
    </>
  )
}
