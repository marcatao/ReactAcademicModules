import { Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import React, {Fragment, useState} from 'react';
import { useEffect } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
 


function FormularioCadastro({aoEnviar, validacoes}){
const [etapaAtual, setEtapaAtual] = useState(0);
const [dadosColetado, setDadosColetado] = useState({});

useEffect(()=>{
  if(etapaAtual === (fomulario.length -1)){
    aoEnviar(dadosColetado);
  }
})

const fomulario = [
      <DadosUsuario  aoEnviar={coletarDados} validacoes={validacoes}/>,
      <DadosPessoais aoEnviar={coletarDados} validacoes={validacoes}/>,
      <DadosEntrega  aoEnviar={coletarDados} validacoes={validacoes}/>,
      <Typography variant="h5">Obrigado Pelo Cadastro </Typography>
    ];

function coletarDados(dados){
  setDadosColetado({...dadosColetado, ...dados});
  proximo();
}    
function proximo(){
  setEtapaAtual(etapaAtual+1);
}

     return (<Fragment>
                <Stepper activeStep={etapaAtual}>
                  <Step><StepLabel>Login</StepLabel></Step>
                  <Step><StepLabel>Pessoal</StepLabel></Step>
                  <Step><StepLabel>Entrega</StepLabel></Step>
                  <Step><StepLabel>Finalização</StepLabel></Step>
                </Stepper>
                {fomulario[etapaAtual]}
              </Fragment>);
}


export default FormularioCadastro;