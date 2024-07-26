import React from 'react'


const HomeFunc = (props) => {
    return (
      <div>
        
        <h2>Nº plato {props.id}</h2>
        <h3>Nombre: {props.name}</h3>
        <p>Descripción: {props.description}</p>
        <p>Price: ${props.price}</p>
        
      </div>
    );
  };

export default HomeFunc