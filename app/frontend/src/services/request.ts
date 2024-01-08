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

const createNote = async (nota: any) => {
  try {
    const response = await axios.post('http://localhost:3001', nota)
    return response.data
  } catch (error: any) {
    throw new Error(error.response.data.message);

  }
}

const excludeNote = async(id: number) => {
  try {
    const response = await axios.delete(`http://localhost:3001/${id}`)
    return response.data
  } catch (error: any) {
    console.log(error)
    throw new Error(error.response.data.message);
  }
}

export {
  getResults,
  createNote,
  excludeNote
};
