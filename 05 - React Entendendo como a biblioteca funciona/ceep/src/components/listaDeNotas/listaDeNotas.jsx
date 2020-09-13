import React, {Component} from 'react'
import CardNota from '../cardNota'

import './style.css'


class ListaDeNotas extends Component{
  constructor(){
    super();
    this.state = {notas:[]}
  }
  componentDidMount(){
    this.props.notas.inscrever(this._novasNotas.bind(this));
  }

  _novasNotas(notas){
    this.setState({...this.state, notas});
  } 
    render(){
        return(
          <ul className="lista-notas">
            {this.state.notas.map((nota, index) => {
              return(
                     <li key={index} className="lista-notas_item">
                        <CardNota
                        apagarNota={this.props.apagarNota}
                        indice={index}
                        nota={nota} />
                    </li>
              );
            })}

          </ul>
        );

    };
}

export default ListaDeNotas 


