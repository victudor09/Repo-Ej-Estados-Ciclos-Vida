import React, { useEffect, useState } from 'react'

const GreetingFunc = (props) => {

    const [name, setName] = useState('Euralio')
    useEffect(() => {
        setTimeout(() => {
            setName('Alfonsina')
        }, 3000)
    }, [])

  return (
    <div>
        <p>Hola {name}</p>
    </div>
  )
}

export default GreetingFunc