import { excludeNote } from "../services/request";
import '../App.css'
import trash from '../assets/Trash.svg'
import '../style/icons.css'
import getNotaStyle from "../utils/getNotaStyle";

const RenderBim = (bimestreData: any) => {

  async function deleteNote(event: React.MouseEvent<HTMLButtonElement>) {
    const dbData = await excludeNote(Number(event.currentTarget.id))
    bimestreData.updateData()
    console.log(dbData)
  }

  return bimestreData.dados ? (
    bimestreData.dados.map((item: any, index: number) => {
      const cores = ['#CC4090', '#05a2c2', '#C26719', '#9B19C2'];
      const backgroundColor = cores[index % cores.length];
      const notaStyle = getNotaStyle(Number(item.nota));
      return (
        <div className="filha" style={{ backgroundColor }} key={item.id}>
          <div className="div-info">
            <p className="disciplina">{item.disciplina}</p>
            <p className="data">{item.criadoEm}</p>
          </div>
          <div className="div-nota">
            <p className="p-nota" style={notaStyle}> Nota: {item.nota}</p>
          </div>
        <div className="div-trash">
          <button 
            id={item.id} 
            onClick={deleteNote} 
            className="trash">
            <img src={trash} alt="icone de uma lixeira"/>
          </button>
          </div>
        </div>
      );
    })
    ) : (
  <p>Carregando...</p>
);
}

export default RenderBim