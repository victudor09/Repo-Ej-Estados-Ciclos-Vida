import { useState } from 'react'
import './App.css'
import GreetingFunc from './components/GreetingFunc'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GreetingFunc name="Euralio"/>
    </>
  )
}

export default App
