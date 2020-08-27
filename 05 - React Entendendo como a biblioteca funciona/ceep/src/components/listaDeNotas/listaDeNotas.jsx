import React, {Component} from 'react'
import CardNota from '../cardNota'

import './style.css'


class ListaDeNotas extends Component{
  constructor(props){
    super(props)
  }
  
    render(){
        return(
          <ul className="lista-notas">
            {this.props.notas.map((nota, index) => {
              return(
                     <li key={index} className="lista-notas_item">
                        <CardNota />
                    </li>
              );
            })}

          </ul>
        );

    };
}

export default ListaDeNotas 


