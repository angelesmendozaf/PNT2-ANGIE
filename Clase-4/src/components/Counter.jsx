import React, { useState } from 'react';


export const Counter = () => {

  const [contador, setContador] = useState(0)

    const incrementarContador= (e) => {
       
      if(contador <10){
        setContador(contador + 1);
      }
     
}

const decrementarContador=(e)=> {
  if(contador>0){
    setContador(contador-1);
  }
  
}

    // no se pueda incrementar mas de 10
    // no se pueda reducir mas de 0
  return (
    <div>
        <h2>Contador: {contador}</h2>
        <button onClick={incrementarContador}>+1</button>
        <button onClick={decrementarContador}>-1</button>
    </div>
  )
} 