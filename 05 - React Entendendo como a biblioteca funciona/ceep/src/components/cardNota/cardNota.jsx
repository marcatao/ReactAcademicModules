import React, {Component} from 'react'

import './style.css'
import {ReactComponent as DeleteIcon} from '../../assets/img/delete-icon.svg';

class CardNota extends Component{

  _apagarNota(){
       this.props.apagarNota(this.props.indice);
    }

    
    render(){
        return(
          <div>
           <h4 className="categoriaName">{this.props.nota.categoria}</h4>
            <section className="card-nota">
              <header className="card-nota_cabecalho">
                <h3 className="card-nota_titulo">{this.props.nota.titulo}</h3>
               
                <DeleteIcon className="svg-icon" onClick={this._apagarNota.bind(this)}/>
              </header>
              <p className="card-nota_texto">{this.props.nota.texto}</p>
            </section>
            </div>
        );

    };
}

export default CardNota 