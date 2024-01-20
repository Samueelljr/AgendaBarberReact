import './Calendario.css'
import { GoChevronDown } from "react-icons/go"
import Calendar from 'react-calendar'




const Calendario = () => {
 
  


  

  return (
   
    <div className="calendario">

     <div className="data">
      <h2>
        Escolha a data
      <GoChevronDown />
      </h2>

    
      
      <input type="date" />
      
      </div>
      
    </div>

      )
    }

    export default Calendario;