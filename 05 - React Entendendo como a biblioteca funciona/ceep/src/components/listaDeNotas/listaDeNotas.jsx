import React, {Component} from 'react'
import CardNota from '../cardNota'

import './style.css'


class ListaDeNotas extends Component{
    render(){
        return(
          <ul className="lista-notas">
            {Array.of("nota","Materia","Estudos").map((categoria, index) => {
              return(
                     <li key={index} lassName="lista-notas_item">
                        <CardNota />
                    </li>
              );
            })}

          </ul>
        );

    };
}

export default ListaDeNotas 


