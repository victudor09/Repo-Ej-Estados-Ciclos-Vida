import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeFunc from './components/HomeFunc'
import HeaderFunc from './components/HeaderFunc'


function App() {
  const [count, setCount] = useState(0)

  const dishesArr = [
    {
    id:1,
    name:'plato 1',
    description:'Este es el plato 1',
    price:10
    },
    {
    id:2,
    name:'plato 2',
    description:'Este es el plato 2',
    price:20
    },
    {
    id:3,
    name:'plato 3',
    description:'Este es el plato 3',
    price:15
    }
    ] 

  return (
    <>
     {/*  <HeadersFunc /> */}
    <div className="App">
      {dishesArr.map(dish => (
        <HomeFunc
          id={dish.id} 
          name={dish.name}
          description={dish.description}
          price={dish.price}
        />
      ))}
    </div>



    </>
  )
}

export default App
