import axios from 'axios';

const baseURL = 'http://localhost:3001';

const getResults = async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar dados da API');
  }
};

export default getResults;
