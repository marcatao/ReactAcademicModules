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
                        <CardNota 
                        indice={index}
                        apagarNota={this.props.apagarNota}
                        titulo={nota.titulo} 
                        texto={nota.texto}/>
                    </li>
              );
            })}

          </ul>
        );

    };
}

export default ListaDeNotas 


