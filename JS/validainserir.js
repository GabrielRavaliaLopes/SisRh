function validarInserir(){
    // só permitirá o envio se os dados forem fornecidos    

    var retorno = false;

    if(document.finserir.login.value == ""){
      alert("Forneca o login do usuario");
      document.finserir.login.focus();
      return retorno;
    } else if(document.finserir.senha.value == "") {
      alert("Forneca a senha do usuario");
      document.finserir.senha.focus();
      return retorno;
    } else if(document.finserir.status.value == "") {
      alert("Forneca a status do usuario");
      document.finserir.status.focus();
      return retorno;
    } else if(document.finserir.tipo.value == "") {
      alert("Forneca a tipo do usuario");
      document.finserir.tipo.focus();
      return retorno;
    } else if(document.finserir.fone.value == "") {
      alert("Forneca a fone do usuario");
      document.finserir.fone.focus();
      return retorno;

    } else {
	alert("Dados Valido Inserido Com Sucesso"); 	
	retorno = true;
        return retorno;
    }
}
