function evaluar() {
  const number = parseFloat(document.getElementById("num").value) || 0;

  if(Number.isInteger(number)){
    let resultado = '';
    for (let i = 0; i <= number; i++) {
      if(number%i ===0){
        resultado = resultado+i+', ';
      }
    }

    resultado = resultado.substring(0,resultado.length-2);
    //console.log(resultado);
    
    document.getElementById('prefijo').textContent = `Los multiplos de ${number} son:\n`;
    document.getElementById('resultado').textContent = resultado;
  }else{
    alert('el numero ingresado no es entero');
  }
}