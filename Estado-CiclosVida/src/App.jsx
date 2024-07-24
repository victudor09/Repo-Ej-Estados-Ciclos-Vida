import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterFunc from './components/CounterFunc'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      
      <CounterFunc initialValue={0} />

    </div>
  )
}

export default App
