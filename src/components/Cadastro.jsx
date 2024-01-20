import React from 'react'
import './Cadastro.css'

const Cadastro = ({novoNome}) => {
  return (
    <div className='cadastro'>
       <h1>
        Bem vindo!
       </h1>

       <h2> 
        Agende seu horário
       </h2>

       
        <label htmlFor="">Digite seu nome </label>
        
        <input type="text" 
        placeholder='Digite aqui'
        required
        onChange={(ev) => novoNome(ev.target.value)}
        />
       

    </div>
  )
}

export default Cadastro