import React, { Component } from 'react';
import ListaDeNotas from './components/listaDeNotas'
import FormularioCadastro from './components/formularioCadastro';
import ListaDeCategorias from './components/ListaDeCategorias';

import "./assets/App.css";
import './assets/index.css';
 

class App extends Component {

  constructor(){
    super();
    this.state = {
      notas:[{'titulo':'teste', 'texto': 'Meu grande texto'},{'titulo':'teste', 'texto': 'Meu grande texto'}]
    }
  }

  criarNota(titulo,texto) {
    const novaNota = {titulo, texto }
    const novoArrayNotas = [...this.state.notas,novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado);
  }

  deletarNota(index){
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index,1);
    this.setState({notas:arrayNotas});
    console.log(arrayNotas);
  }

  render(){
  return (
    <section className="conteudo">
      <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
      <main className="conteudo-principal">
        <ListaDeCategorias />
        <ListaDeNotas 
           apagarNota={this.deletarNota.bind(this)}
           notas={this.state.notas}/>
      </main>
    </section>
    );
  }
}
export default App;
