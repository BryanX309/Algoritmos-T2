function evaluar() {
  const text = String(document.getElementById("txt").value).trim() || '';
  if(text != ''){
    
    let resultado = 'una Letra';
    for (let i = 0; i <= 9; i++) {
      if(text.charAt(0) === String(i)){
        resultado = 'un Numero';
        break;
      }
    }

    document.getElementById("prefijo").textContent = 'El texto ingresado empieza con ';
    document.getElementById("resultado").textContent = resultado;
  }else{
    document.getElementById("prefijo").textContent = '';
    document.getElementById("resultado").textContent = '';
  }
}