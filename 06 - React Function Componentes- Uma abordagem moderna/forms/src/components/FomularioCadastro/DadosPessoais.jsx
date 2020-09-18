import React, {useState, useContext} from 'react';
import {Button,TextField, Switch, FormControlLabel} from '@material-ui/core'
import ValidacoesCadastro from '../../context/ValidacoesCadastro'
import useErros from '../../hooks/useErros';


function DadosPessoais({aoEnviar}){

const [nome,setNome] = useState("");
const [sobrenome,setSobrenome] = useState("");
const [cpf,setCpf] = useState("");
const [promocoes,setPromocoes] = useState(true);
const [novidades,setNovidades] = useState(false);
const validacoes = useContext(ValidacoesCadastro);

const [erros, validarCampos,possoEnviar] = useErros(validacoes);




     return (
    <form onSubmit={(event) => {
         event.preventDefault();
         if(possoEnviar()) aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
    }}>
        <TextField 
             label="Nome"
             name="nome"
             id="nome"
             variant="outlined"
             margin="normal"
             fullWidth
             onChange={(event) => {
               setNome(event.target.value);
             }}
             value={nome}
        />

        <TextField 
             label="Sobrenome"
             name="Sobrenome"
             id="sobrenome"
             variant="outlined"
             margin="normal"
             fullWidth
             onChange={event => {
               setSobrenome(event.target.value);
             }}
           value={sobrenome}
        />
        
        <TextField 
             error={!erros.cpf.valido}
             helperText={erros.cpf.texto}
             onBlur={validarCampos}
             label="CPF"
             id="cpf"
             name="cpf"
             variant="outlined"
             margin="normal"
             fullWidth
             onChange={event => {
               setCpf(event.target.value);
             }}
           value={cpf}
        />
        
        <FormControlLabel label="Promoções" control={
            <Switch 
                    name="promocoes" 
                    color="primary"
                    onChange={event => {
                         setPromocoes(event.target.checked);
                       }}
                    checked={promocoes}
                     />
        }/>

         <FormControlLabel label="Novidades" control={
            <Switch 
                    name="novidades" 
                    color="primary"
                    onChange={event => {
                         setNovidades(event.target.checked);
                       }}
                    checked={novidades}
                      />
        }/>

        <Button type="submit" variant="contained" color="primary">Proximo</Button>
                
    </form>
        );
}

export default DadosPessoais;