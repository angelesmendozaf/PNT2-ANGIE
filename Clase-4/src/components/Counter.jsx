import React, { useState } from 'react';
import { useCounter } from '../hooks/useCounter';


export const Counter = () => {
// creo las referencias(variables) donde voy a guardar los datos que me llegan del hook para luego usar en el JSX
 const {incrementarContador,decrementarContador,contador} =useCounter();

   
  return (
    <div>
        <h2>Contador: {contador}</h2>
        <button onClick={incrementarContador}>+1</button>
        <button onClick={decrementarContador}>-1</button>
    </div>
  )
} 