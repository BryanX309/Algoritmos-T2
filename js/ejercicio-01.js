function comparar() {
  const numbers = [
    parseFloat(document.getElementById("num1").value) || 0,
    parseFloat(document.getElementById("num2").value) || 0
  ];

  document.getElementById("prefijo").textContent = 'El Numero Mayor es: ';
  document.getElementById("resultado").textContent = Math.max(...numbers);
}