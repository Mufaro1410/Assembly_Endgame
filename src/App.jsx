import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import LanguagesList from './components/LanguagesList'
import Word from './components/Word'
import Alphabet from './components/Alphabet'

function AssemblyEndgame() {
  const [status, setStatus] = useState(true)
  const [currentWord, setCurrentWord] = useState("react")
  const [guessedLetters, setGuessedLetters] = useState([])
  

  const addGuessedLetter = (letter) => {
    setGuessedLetters(prev => prev.includes(letter) ? prev :  [...prev, letter])
  }

  return (
    <main>
      <Header />
      {status &&
        <section className='game-status'>
        <h2>You won!</h2>
        <p> Well done 🎉</p>
        </section>
      }
      <LanguagesList/>
      <Word currentWord={currentWord}/>
      <Alphabet onClick={addGuessedLetter}/>
      <section className='button'>
        <button>New Game</button>
      </section>
    </main>
  )
}

export default AssemblyEndgame
