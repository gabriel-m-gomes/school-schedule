import { excludeNote } from "../services/request";

const RenderBim = (bimestreData: any) => {

  async function deleteNote(event: React.MouseEvent<HTMLButtonElement>) {
    const dbData = await excludeNote(Number(event.currentTarget.id))
    console.log(dbData)
  }

    return bimestreData.dados ? (
      bimestreData.dados.map((item: any) => (
        <div key={item.id}>
          <p>{item.disciplina}</p>
          <p>{item.criadoEm}</p>
          <p>{item.nota}</p>
          <button id={item.id} onClick={deleteNote}>Excluir</button>
        </div>
      ))
    ) : (
      <p>Carregando...</p>
    );
  };

export default RenderBim