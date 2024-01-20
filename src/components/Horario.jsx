import React, { useState } from 'react'
import "./Horario.css"
import { GoChevronDown } from "react-icons/go"




const Horario = () => {

  const horarios = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"]

  const [horaMarcada, setHoraMarcada] = useState()

  return (
    <div className='hora'>


      <div className="tituloHora">
        <h2>
          Escolha o horário
          <GoChevronDown />
        </h2>
      </div>

      <div>
        {horarios.map((number) => <button
        onClick={() => setHoraMarcada(number)}
        className={horaMarcada === number ? "ativo":""}
        >{number}</button>)}
      </div>



    </div>
  )
}

export default Horario