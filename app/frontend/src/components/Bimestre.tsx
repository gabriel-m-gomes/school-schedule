import React, { useState, useEffect } from 'react';
import getResults from '../services/request';

const Bimestre = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getResults(); 
        setDados(response);
        console.log(response)

      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchData();
  }, []); 

  return (
  <div>
    {dados ? (
      <div>
        {dados.map((dado: any, index: number) => (
          <div key={index}>
            <h1>{dado.bimestre}</h1>
            <p>{dado.disciplina}</p>
            <p>{dado.nota}</p>
          </div>
        ))}
      </div>
    ) : (
      <p>Carregando...</p>
    )}
  </div>
);

};

export default Bimestre;
