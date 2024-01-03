import { useState, useEffect } from 'react';
import getResults from '../services/request';
import { IResult } from '../interfaces/result/IResult';

const Bimestre = () => {
  const [dados, setDados] = useState<IResult>({});

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

  return (
    <div>
      <h1>Bimestre 1</h1>
      {dados && dados.primeiro ? (
        dados.primeiro.map((item) => (
          <div key={item.id}>
            <p>{item.disciplina}</p>
            <p>{item.criadoEm}</p>
            <p>{item.nota}</p>
          </div>
        ))
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default Bimestre;
