function generar(){
  const numbers = [];
  let respuesta = '';

  for (let i = 0; i < 20; i++) {
    numbers[i] = Math.floor(Math.random()*100)+1;
  }

  numbers.forEach(number => respuesta = respuesta.concat(number, ', '));

  document.getElementById('resultado').innerHTML = `NÚMEROS GENERADOS<br><span class = "resultado"> ${respuesta.substring(0, respuesta.length-2)} </span>`
}