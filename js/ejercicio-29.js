function promedio() {
  const numbers = [
    parseFloat(document.getElementById("num1").value) || 0,
    parseFloat(document.getElementById("num2").value) || 0,
    parseFloat(document.getElementById("num3").value) || 0
  ];

  let suma = 0;
  numbers.forEach(number => suma+=number);
  const promedio = suma/numbers.length;
  
  document.getElementById("resultado").innerHTML = 
  `El Promedio del Array es: <span class="resultado">${promedio.toFixed(2)}</span>`;
}