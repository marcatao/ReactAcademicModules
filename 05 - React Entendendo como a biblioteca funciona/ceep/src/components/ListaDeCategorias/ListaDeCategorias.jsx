import React, {Component} from 'react';
import './style.css';

class ListaDeCategorias extends Component{

  constructor(){
    super();
    this.state = {categorias:[]}
  }
  componentDidMount(){
    this.props.categorias.inscrever(this._novasCategorias.bind(this));
    this.props.adicionarCategoria('Jogos','Trabalho');
   }

  _novasCategorias(categorias){
    this.setState({...this.state, categorias});
  } 

  
  _handleEventoInput(e){
    if(e.key == "Enter"){
      const valorCategoria = e.target.value;
      this.props.adicionarCategoria(valorCategoria);
    }
  }
    render () { 
        return (
            <section>
              <ul className="lista-categorias">
                {this.state.categorias.map((categoria, index)=>{
                  return <li key={index} className="lista-categorias_item">{categoria}</li>
                })}
                   <input type="text"  
                          className="lista-categorias_input" 
                          placeholder="Adicionar categoria"
                          onKeyUp={this._handleEventoInput.bind(this)}
                   />
             </ul>
            </section>
         );
    }
}

export default ListaDeCategorias;