import React, { useState } from 'react';
import { createNote } from '../services/request';
import '../App.css';
import { IButton } from '../interfaces/button/IButton';
import cancelSvg from '../assets/cancel.svg'

const Buttons = (prop: IButton) => {
  const [input, setInputValue] = useState<string>('');
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('');

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  async function createNoteAndDiscipline() {
    if (!selectedDiscipline || !input) {
      console.log('Por favor, selecione a disciplina e insira a nota.');
      return;
    }

    const nota = {
      bimestre: prop.bimestreProp,
      disciplina: selectedDiscipline,
      nota: Number(input),
    };

    const dbData = await createNote(nota);
    console.log(dbData);
    prop.updateData()
    setSelectedDiscipline(''); 
    setInputValue('');
    prop.bool(false)
  }

  const cancel = () => {
    prop.bool(false)
  };

  function handleDisciplineSelection(discipline: string) {
    setSelectedDiscipline(discipline);
  }

  return (
    <div className='new'>
      <div className='div-title'>
        <h2> Bimestre: {prop.bimestreProp}</h2>
        <button className='cancel' onClick={cancel}><img src={cancelSvg} alt='icone de um x'/></button>
      </div>
      <div className='div-disciplina'>
        <p>Disciplina</p>
      </div>
      <div className='div-buttons'>
        <button onClick={() => handleDisciplineSelection('Biologia')} id="Biologia">Biologia</button>
        <button onClick={() => handleDisciplineSelection('Artes')} id="Artes">Artes</button>
        <button onClick={() => handleDisciplineSelection('Geografia')} id="Geografia">Geografia</button>
        <button onClick={() => handleDisciplineSelection('Sociologia')} id="Sociologia">Sociologia</button>
      </div>
      <p className='p-button'>Nota</p>
      <input
        className='input-button'
        value={input}
        onChange={handleInputChange}
      />
      <button onClick={createNoteAndDiscipline} className='button-confirm'>
        Confirmar
      </button>
    </div>
  );
};

export default Buttons;
