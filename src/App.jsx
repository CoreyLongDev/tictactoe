import { useState } from 'react'
import Header from '../src/components/Header'
import Board from './components/Board'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Header />
  <Board />
  <Footer />
    </>
  )
}

export default App
