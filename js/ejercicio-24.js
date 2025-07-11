function generar(){

  const n = parseFloat(document.getElementById('num').value) || 0;

  if(Number.isInteger(n)){
    const numbers = [];
    let respuesta = '';

    for (let i = 0; i < n; i++) {
      numbers[i] = Math.floor(Math.random()*100)+1;
    }

    numbers.forEach(number => respuesta = respuesta.concat(number, ', '));

    document.getElementById('resultado').innerHTML = `NÚMEROS GENERADOS<br><span class = "resultado"> ${respuesta.substring(0, respuesta.length-2)} </span>`
  }else{
    alert('El numero generado no es Entero\nIngrese un numero valido');
  }
}