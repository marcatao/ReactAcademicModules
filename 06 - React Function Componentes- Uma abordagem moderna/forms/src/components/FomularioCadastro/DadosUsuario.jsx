import React,{ useState, useContext }  from 'react';
import { TextField, Button} from '@material-ui/core';
import ValidacoesCadastro from '../../context/ValidacoesCadastro'
import useErros from '../../hooks/useErros'
 
function DadosUsuario({aoEnviar}){

 const [email, setEmail] = useState("");
 const [senha, setSenha] = useState("");
 const validacoes = useContext(ValidacoesCadastro);

 const [erros, validarCampos, possoEnviar]  = useErros(validacoes);

 

     return (
         <form onSubmit={(event)=>{
             event.preventDefault();
             console.log(possoEnviar());
             if(possoEnviar()) aoEnviar({email,senha});
         }}>
             <TextField 
                  id="email" 
                  label="E-mail" 
                  type="email"
                  variant="outlined"
                  margin="normal"
                  onChange={(event)=>{
                      setEmail(event.target.value)
                  }}
                  value={email}
                  fullWidth 
                  required
             />

            <TextField 
                  id="senha" 
                  label="Senha" 
                  type="password"
                  variant="outlined"
                  margin="normal"
                  onChange={(event)=>{
                    setSenha(event.target.value)
                }}
                  name="senha"
                  onBlur={validarCampos}
                  error={erros.senha.valido}
                  helperText={erros.senha.texto}
                  value={senha}
                  fullWidth 
                  required
             />
             <Button 
             type="submit"
             variant="contained" color="primary"> Proximo </Button>
         </form>
        );
}

export default DadosUsuario;