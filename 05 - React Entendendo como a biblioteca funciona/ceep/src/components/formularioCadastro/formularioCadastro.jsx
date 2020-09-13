import React, {Component} from 'react'

import './style.css'
class FormularioCadastro extends Component{

constructor(props){
    super(props);
    this.titulo="";
    this.texto="";
    this.categoria="";
    this.state = {categorias:[]}
}

componentDidMount(){
    this.props.categorias.inscrever(this._novasCategorias.bind(this));
  }

  _novasCategorias(categorias){
    this.setState({...this.state, categorias});
  } 


_handleChangeTile(ev){
    ev.stopPropagation();
    this.titulo = ev.target.value;
}    
_handleChangeText(ev){
    ev.stopPropagation();
    this.texto = ev.target.value;
}
_handleChangeCategoria(ev){
    ev.stopPropagation();
    this.categoria = ev.target.value;
}
_criarNota(ev){
    ev.preventDefault();
    ev.stopPropagation();
    this.props.criarNota(this.titulo,this.texto,this.categoria);

    
}
    render(){
        return(
            <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
            <input 
                type="text" 
                placeholder="Titulo" 
                className="form-cadastro_input" 
                onChange={this._handleChangeTile.bind(this)}
            />
            <select className="form-cadastro_input"
                onChange={this._handleChangeCategoria.bind(this)}
            >
                <option defaultChecked='true'>Sem categoria</option>
                {this.state.categorias.map(((categoria, key)=>{
                    return <option key={key}>{categoria}</option>
                }))}
            </select>
            <textarea 
                placeholder="Escreva sua nota" 
                className="form-cadastro_input" 
                onChange={this._handleChangeText.bind(this)}
            />
            <button className="form-cadastro_input form-cadastro_submit">Criar Nota</button>
          </form>
        );

    };
}

export default FormularioCadastro 