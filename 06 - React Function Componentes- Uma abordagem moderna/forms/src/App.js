import React from 'react';
import {Container, Typography} from '@material-ui/core'
import 'fontsource-roboto'

import FormularioCadastro from './components/FomularioCadastro/FormularioCadastro';
import './App.css';

function App() {
  return (
      <Container component="article" maxWidth="sm" align="center">
        <Typography variant="h3" component="h1">Formulário de Cadastro</Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm}  validarCPF={validarCPF}/>
      </Container>
  );
}

function aoEnviarForm(dados){
  console.log(dados)
}

function validarCPF(cpf){
  if(cpf.length !== 11) return {valido:false,texto:"cpf deve conter 11 digitos..."} 
  return {valido:true, texto:""} 
  
}
export default App;
