import './App.css'
import './index.css'

import Cadastro from './components/Cadastro'
import Calendario from './components/Calendario'
import Horario from './components/Horario'
import Servico from './components/Servico'





function App() {

  let nome = ""
  const addNome = (novoNome) => {
    nome = novoNome
  }

  let data = ""
  const addData = (novaData) => {
    data = novaData
  }

  let horario = []
  const addHorario = (novoHorario) => {
    horario = novoHorario
 }

 let servico = []
  const addServico = (novoServico) => {
    servico = novoServico
 }


  return (
    <>
      <div className="app">
        <Cadastro novoNome={addNome} />
        <Calendario novaData={addData}/>
        <Horario novoHorario={addHorario} />
        <Servico novoServico={addServico} />

      </div>
    </>
  )
}

export default App
