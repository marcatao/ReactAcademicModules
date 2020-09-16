import React, {Fragment, useState} from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
 


function FormularioCadastro({aoEnviar, validarCPF}){
const [etapaAtual, setEtapaAtual] = useState(0);

const fomulario = [
      <DadosUsuario aoEnviar={proximo} />,
      <DadosPessoais  aoEnviar={proximo} aoEnvia={aoEnviar} validarCPF={validarCPF} />,
      <DadosEntrega  aoEnviar={aoEnviar} />
    ];

function proximo(){
  setEtapaAtual(etapaAtual+1);
}

     return (<Fragment>{fomulario[etapaAtual]}</Fragment>);
}


export default FormularioCadastro;