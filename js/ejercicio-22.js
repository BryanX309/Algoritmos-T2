const array = [1,2,3,4,5,6];

function respuesta(msj){
  if(msj != ''){
    document.getElementById('resultado').innerHTML = msj;
  }
}

function show_while() {
  let resultado = '';
  let i = 0;
  while(i<array.length){
    resultado = resultado.concat(array[i], ', ');
    i++;
  }
  let mensaje = `MOSTRAR CON WHILE<br><br> <span class='resultado'> ${resultado.substring(0, resultado.length-2)} </span>`
  respuesta(mensaje);
}

function show_for() {
  let resultado = '';
  for (let i = 0; i < array.length; i++) {
    resultado = resultado.concat(array[i], ', ');
  }
  let mensaje = `MOSTRAR CON FOR<br><br> <span class='resultado'> ${resultado.substring(0, resultado.length-2)} </span>`
  respuesta(mensaje);
}

function show_forEach() {
  let resultado = '';
  array.forEach(number => resultado = resultado.concat(number, ', '));
  let mensaje = `MOSTRAR CON FOREACH<br><br> <span class='resultado'> ${resultado.substring(0, resultado.length-2)} </span>`
  respuesta(mensaje);
}

function show_plus() {
  let resultado = '';
  array.forEach(number => resultado = resultado.concat(number+1, ', '));
  let mensaje = `ARRAY CON +1<br><br> <span class='resultado'> ${resultado.substring(0, resultado.length-2)} </span>`
  respuesta(mensaje);
}

function copia_plus() {
  let resultado = '';
  const copia = array.map(number => {return number+1});
  copia.forEach(number => resultado = resultado.concat(number, ', '));

  let mensaje = `COPIAR +1<br><br> <span class='resultado'> ${resultado.substring(0, resultado.length-2)} </span>`
  respuesta(mensaje);
}


function promedio() {
  let suma = 0;
  array.forEach(number => suma+=number);
  
  let mensaje = `PROMEDIO:<br><br> <span class='resultado'> ${suma/array.length} </span>`
  respuesta(mensaje);
}