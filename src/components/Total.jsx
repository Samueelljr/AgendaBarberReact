import React from 'react'
import './Total.css'
import Servico from './Servico'

const Total = ({valor}) => {



  const alertTotal = () => {
    alert("Vc agendou!")
  }

  return (
    <div className="total">
      <h2>
        {`R$ ${valor}`}
      </h2>
      <button 
      onClick={alertTotal} disabled= {!valor}> 
        Confirmar
      </button>

    </div>
  )
}

export default Total