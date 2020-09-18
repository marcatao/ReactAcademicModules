import React from 'react';
import {Container, Typography} from '@material-ui/core'
import 'fontsource-roboto'
import {validarCPF,validarSenha} from './models/cadastro';

import FormularioCadastro from './components/FomularioCadastro/FormularioCadastro';
import './App.css';
import ValidacoesCadastro from './context/ValidacoesCadastro';

function App() {
  return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1">Formulário de Cadastro</Typography>
        <ValidacoesCadastro.Provider value={{cpf:validarCPF, senha:validarSenha, nome:validarSenha}}>
          <FormularioCadastro aoEnviar={aoEnviarForm}/>
        </ValidacoesCadastro.Provider>
      </Container>
  );
}


function aoEnviarForm(dados){
  console.log(dados)
}


export default App;
