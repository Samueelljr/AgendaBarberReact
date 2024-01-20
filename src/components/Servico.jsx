import React, { useState } from 'react'
import { GoChevronDown } from "react-icons/go"

import './Servico.css'
import Total from './Total'

const Servico = () => {

  const [servSelecionado, setServSelecionado] = useState([])

  const [valor, setValor] = useState(0)
  const servicos = [
    {
      nome: "Corte de máquina  R$ 25,00",
      preco: 25,
    },
    {
      nome: "Corte de tesoura R$ 20,00",
      preco: 20,
    },
    {
      nome: "Barba R$ 15,00",
      preco: 15,
    },
    {
      nome: "Pigmentação R$ 10,00",
      preco: 10,
    }
  ]

  const addValor = (preco, addServicos) => {

    setValor(valor + preco)
    setServSelecionado([...servSelecionado, addServicos])
  }

  const remove = (preco, addServicos) => {
    const atualServ = servSelecionado.filter(item => item === addServicos)
    const novoServ = servSelecionado.filter(item => item !== addServicos)
    setValor(valor - (preco * atualServ.length))
    setServSelecionado(novoServ)
  }

  let total = ""
  const addTotal = (novoTotal) => {
    total = novoTotal
  }


  return (
    <div className='servico'>


      <h2>
        Serviços
        <GoChevronDown />
      </h2>

      <div className="opcoes">


        <div>
          {
            servicos.map((serv) => <div className='listaServicos'>
              <p>{serv.nome}</p>
              <div className="btn">
                <button onClick={() => remove(serv.preco, serv.nome)} disabled={!servSelecionado.find(item => item === serv.nome)}>
                  Cancelar
                </button>
                <button onClick={() => addValor(serv.preco, serv.nome)}>
                  Agendar
                </button>
              </div>
            </div>
            )}
        </div>


      </div>
      <Total valor={valor} novoTotal={addTotal} />
    </div>
  )
}

export default Servico;