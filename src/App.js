import { useState } from 'react';
import './App.css';

let initialState = [

  {
    id: 1,
    descricao: 'Primeira Atividade',
  },
  {
    id: 2,
    descricao: 'Segunda Atividade',
  },

];

function App() {
  const [atividades, setAtividades] = useState(initialState)

  function addAtividade(e) {

    e.preventDefault();

    const atividade = {
      id: document.getElementById('id').value,
      descricao: document.getElementById('descricao').value,
    };
    atividades.push(atividade);
    setAtividades([...atividades, { ...atividade }])
  }

  return (
    <>
      <form className="row g-3">
        <div className="col-md-6">
          <label for='inputEmail4' className="form-label">Id</label>
          <input id='id' type="text" className="form-control" />
        </div>
        <div className="col-md-6">
          <label for='inputEmail4' className="form-label">Descricao</label>
          <input id='descricao' type="text" className="form-control" />
        </div>
        <hr />
        <div class="col-12">
          <button className='btn btn-outline-secondary' onClick={addAtividade}>
            + Atividade
          </button>
        </div>
        <b />
      </form>
      <div className="mt-3">
          {atividades.map(ativ => (
            <div key={ativ.id} className="card mb-2 shadow-sm" style={{ idth: '18rem' }}>
              <div class="card-body">
                <div className='d-flex justify-content-between'>
                  <h5 className='card-title'>
                    <span className='badge bg-secondary me-1'>
                      {ativ.id}
                    </span>
                    - título
                  </h5>
                  <h6> Prioridade:
                    <span className='ms-1 text-black'>
                       <i className="me-1 far fa-meh"  ></i>
                       Normal
                    </span>
                  </h6>
                </div>
                <p class="card-text">  {ativ.id} - {ativ.descricao} </p>
                <div className='d-flex justify-content-end pt-2 m-0 border-top'>
                  <button className='btn btn-sm btn-outline-primary me-2'>
                      editar
                  </button>
                  <button className='btn btn-sm btn-outline-danger'>
                      Deletar
                  </button>
                </div> 
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default App;
