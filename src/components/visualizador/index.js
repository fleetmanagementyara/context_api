import React from 'react';
import { useTextContext } from '../../context/TextContext';


function Visualizador() {
  const { text } = useTextContext();
  return (
      <>
        <div>
            Visualizador
        </div>
        <div>
            {text}
        </div>
        
      </>
  )
}

export default Visualizador;