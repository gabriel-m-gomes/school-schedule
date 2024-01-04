import React, { useState } from 'react';
import { createNote } from '../services/request';

import { IButton } from '../interfaces/button/IButton'

const Buttons = (prop: IButton) => {
  const [input, setInputValue] = useState(undefined);
  const [nota, setNota] = useState({});


  function handleInputChange(event: any) {
    setInputValue(event.target.value);
  };


  function setNote(event: any) {
    setNota({
        bimestre: prop.bimestreProp,
        disciplina: event.target.id,
        nota: Number(input)
    });
  };

  async function createNot() {
    const dbData = await createNote(nota)
    console.log(dbData)
  }

  return (
    <div>
      <h2>Disciplina</h2>
      <input
        placeholder="nota"
        value={input}
        onChange={handleInputChange}
      />
        <button onClick={setNote} id='Biologia'>Biologia</button>
        <button onClick={setNote} id='Artes'>Artes</button>
        <button onClick={setNote} id='Geografia'>Geografia</button>
        <button onClick={setNote} id='Sociologia'> Sociologia</button>
        <button onClick={createNot}>Confirmar</button>
    </div>
  );
};

export default Buttons;
