function comparar() {
  const n1 = parseFloat(document.getElementById("num1").value) || 0;
  const n2 = parseFloat(document.getElementById("num2").value) || 0;
  
  let resultado = 0;
  
  if(num1 > num2){
    resultado = n1;
  }else{
    resultado = n2;
  }

  document.getElementById("prefijo").textContent = 'El Numero Mayor es: ';
  document.getElementById("resultado").textContent = resultado;
}