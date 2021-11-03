import React from 'react';
import { useTextContext } from '../../context/TextContext';

function Input() {
  const { setText } = useTextContext();

  return (
      <>
        <div>
            Input
        </div>
        <input onChange={(e) => setText(e.target.value)}/>
      </>
  )
}

export default Input;