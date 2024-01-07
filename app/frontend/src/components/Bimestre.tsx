import React, { useState, useEffect } from 'react';
import { getResults } from '../services/request';
import { IResult } from '../interfaces/result/IResult';
import Buttons from './buttons';
import RenderBim from './RenderBim';
import '../App.css';
import adicionar from '../assets/adicionar.svg'

const Bimestre = () => {
  const [dados, setDados] = useState<IResult>({});
  const [isFalse, setIsFalse] = useState(false);
  const [bimestre, setBimestre] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getResults();
        setDados(response);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchData();
  }, []);

  const updateData = async () => {
    try {
      const updatedResults = await getResults();
      setDados(updatedResults);
    } catch (error) {
      console.error('Erro ao atualizar os dados:', error);
    }
  };

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsFalse(true);
    setBimestre(event.currentTarget.id);
  };


  return (
    <div className='pai'>
      {['primeiro', 'segundo', 'terceiro', 'quarto'].map((num) => (
        <>
          <div className='period'>
            <h1 className='title'>Bimestre {num}</h1>
            <button id={`${num}`} className='button-add' onClick={handleButtonClick}>
              <img src={adicionar} alt='simbolo de adição'/>
            </button>
          </div>
          <div className="teste">
          <RenderBim dados={dados[num]} updateData={updateData}/>
          </div>
        </>
      ))}
      {isFalse && (
        <>
          <Buttons bimestreProp={bimestre} bool={setIsFalse} updateData={updateData} />
        </>
      )}
    </div>
  );
};

export default Bimestre;

