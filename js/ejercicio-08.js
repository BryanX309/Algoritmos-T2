function evaluar() {
  const number = parseFloat(document.getElementById("num").value);
  
  let resultado = number%5 === 0 ? "Es Divisible" : 'No Es Divisible';

  document.getElementById("prefijo").textContent = `El Numero ${number} `;
  document.getElementById("resultado").textContent = resultado;
  document.getElementById("sufijo").textContent = ' entre 5';
}