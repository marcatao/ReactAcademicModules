import React, {useState} from 'react';
import {Button,TextField, Switch, FormControlLabel} from '@material-ui/core'
 


function FormularioCadastro({aoEnviar, validarCPF}){

const [nome,setNome] = useState("");
const [sobrenome,setSobrenome] = useState("");
const [cpf,setCpf] = useState("");
const [promocoes,setPromocoes] = useState(true);
const [novidades,setNovidades] = useState(false);
const [erros,setErros] = useState({cpf:{valido:true,texto:""}});

     return (
    <form onSubmit={(event) => {
         event.preventDefault();
         aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
    }}>
        <TextField 
             label="Nome"
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
             onBlur={(event)=>{
               setErros({cpf:validarCPF(cpf)})
             }}
             label="CPF"
             id="cpf"
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

        <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
                
    </form>
        );
}

export default FormularioCadastro;