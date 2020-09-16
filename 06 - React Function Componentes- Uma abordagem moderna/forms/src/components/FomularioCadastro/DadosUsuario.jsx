import React,{ useState }  from 'react';
import { TextField, Button} from '@material-ui/core';
 
 
function DadosUsuario({aoEnviar}){

 const [email, setEmail] = useState("");
 const [senha, setSenha] = useState("");

     return (
         <form onSubmit={(event)=>{
             event.preventDefault();
             aoEnviar({email,senha});
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