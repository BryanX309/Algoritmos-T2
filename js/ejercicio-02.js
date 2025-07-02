function comparar() {
  const numbers = [
    parseFloat(document.getElementById("num1").value),
    parseFloat(document.getElementById("num2").value),
    parseFloat(document.getElementById("num3").value)
  ];
  
  let resultado = 0;
  
  numbers.forEach(number => {
    if(number>resultado){
        resultado = number;
    }
  })

  document.getElementById("prefijo").textContent = 'El Numero Mayor es: ';
  document.getElementById("resultado").textContent = resultado;
}