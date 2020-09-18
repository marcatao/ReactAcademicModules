function validarCPF(cpf){
    if(cpf.length !== 11) return {valido:false,texto:"cpf deve conter 11 digitos..."} 
    return {valido:true, texto:""} 
    
}

function validarSenha(senha){
    if(senha.length < 4 || senha.length > 72 ){
        return {valido:true,texto:"senha fora da quantidade esperada de caracteres"} 
    }else{
        return {valido:false, texto:""} 
    }
}


export { validarCPF, validarSenha}
