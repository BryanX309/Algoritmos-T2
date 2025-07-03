function evaluar() {
  const angulo1 = parseFloat(document.getElementById("a1").value);
  const angulo2 = parseFloat(document.getElementById("a2").value);
  const angulo3 = parseFloat(document.getElementById("a3").value);

  document.getElementById("prefijo").textContent = 'Los ángulos ingresados son ';
  document.getElementById("resultado").textContent = angulo1+angulo2+angulo3 === 180 ? 'Compatibles': 'Incompatibles';
  document.getElementById("sufijo").textContent = ' para un Triangulo';
}