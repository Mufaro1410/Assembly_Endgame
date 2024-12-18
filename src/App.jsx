import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import LanguagesList from './components/LanguagesList'
import Word from './components/Word'

function AssemblyEndgame() {
  const [status, setStatus] = useState(true)

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
      <Word/>
    </main>
  )
}

export default AssemblyEndgame
