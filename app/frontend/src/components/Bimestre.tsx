import React, { useState, useEffect } from 'react';
import { getResults } from '../services/request';
import { IResult } from '../interfaces/result/IResult';
import Buttons from './buttons';
import RenderBim from './RenderBim';

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

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsFalse(true);
    setBimestre(event.currentTarget.id);
  };

  const cancel = () => {
    setIsFalse(false);
  };

  return (
    <div>
      {['primeiro', 'segundo', 'terceiro', 'quarto'].map((num) => (
        <div key={num}>
          <h1>Bimestre {num}</h1>
          <button id={`${num}`} onClick={handleButtonClick}>
            +
          </button>
          <RenderBim dados={dados[num]}/>
        </div>
      ))}
      {isFalse && (
        <div>
          <Buttons bimestreProp={bimestre} bool={isFalse} />
          <button onClick={cancel}>x</button>
        </div>
      )}
    </div>
  );
};

export default Bimestre;

