import React, { useState } from 'react';

// hook
export const useCounter = () => {
// logica para setear el estado
  const [contador, setContador] = useState(0) 

  // setContador(setState) en este caso es el encargado de avisarle a React que se tiene que rederizar el componente

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
return {  // retorno al componente
    decrementarContador,
    incrementarContador,
    contador
}

}