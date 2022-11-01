import { useState } from 'react';
import './App.css';
import AtividadeForm from './components/AtividadeForm';
import AtividadeLista from './components/AtividadeLista';

let initialState = [

  {
    id: 1,
    prioridade:'3',
    titulo: 'titulo',
    descricao: 'Primeira Atividade',
  },

];

function App() {
  const [atividades, setAtividades] = useState(initialState)

  function addAtividade(e) {

    e.preventDefault();

    const atividade = {
      id: document.getElementById('id').value,
      prioridade: document.getElementById('prioridade').value,
      titulo: document.getElementById('titulo').value,
      descricao: document.getElementById('descricao').value,
    };
    atividades.push(atividade);
    setAtividades([...atividades, { ...atividade }])
  }

  function deletarAtividade(id){
    const atividadesFiltradas =  atividades.filter(atividade => atividade.id !== id)
    setAtividades([...atividadesFiltradas])
  }

  return (
    <>
      <AtividadeForm 
        addAtividade={addAtividade}
        atividades={atividades}
      />
      <AtividadeLista
        atividades = {atividades}
        deletarAtividade = {deletarAtividade}
      />
    </>
  );
}

export default App;
