function ejecutar() {
  const numbers = [
    parseFloat(document.getElementById("num1").value) || 0,
    parseFloat(document.getElementById("num2").value) || 0,
    parseFloat(document.getElementById("num3").value) || 0
  ];
  
  const menor = Math.min(...numbers);

  let resultado = `El Promedio del Array es: <span class="resultado">${menor}</span>`
  
  resultado = resultado.concat(menor <0 ? `<br>Valor Absoluto: <span class="resultado">${Math.abs(menor)}</span>` :'');
  
  document.getElementById("resultado").innerHTML = resultado;

  console.log(menor);
}