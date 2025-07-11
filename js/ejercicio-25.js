const colores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];

function buscar(){
  const color = document.getElementById('txt').value || '';
  const resultado = colores.includes(color) ? 'Existe': 'No Existe';

  document.getElementById('resultado').innerHTML = `El Color ${color} <span class = "resultado">${resultado}</span> en el array`
}