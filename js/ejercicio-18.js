function ejc_13() {
const number = parseFloat(document.getElementById("ejc_13_num").value) || 0;

if(Number.isInteger(number) && number >=1){
  let resultado = '';
  for (let i = 1; i <= number; i++) {
    resultado = resultado+i+', ';
  }
    document.getElementById('resultado_13').innerHTML = `Números Generados: <span class="resultado">${resultado.substring(0, resultado.length-2)}</span>`;
  }else{
    alert('el numero ingresado no es Valido');
  }
}

function ejc_14() {
const number = parseFloat(document.getElementById("ejc_14_num").value) || 0;

if(Number.isInteger(number) && number >=1 && number%2 !== 0){
  let resultado = '';
  for (let i = 1; i <= number; i+=2) {
    resultado = resultado+i+', ';
  }
    document.getElementById('resultado_14').innerHTML = `Números Generados: <span class="resultado">${resultado.substring(0, resultado.length-2)}</span>`;
  }else{
    alert('el numero ingresado no es Valido');
  }
}

function ejc_15() {
const number = parseFloat(document.getElementById("ejc_15_num").value) || 0;

if(Number.isInteger(number) && number >=1){
  let resultado = '';
  for (let i = number; i >= 1; i--) {
    resultado = resultado+i+', ';
  }
    document.getElementById('resultado_15').innerHTML = `Números Generados: <span class="resultado">${resultado.substring(0, resultado.length-2)}</span>`;
  }else{
    alert('el numero ingresado no es Valido');
  }
}

function ejc_16() {
const number = parseFloat(document.getElementById("ejc_16_num").value) || 0;

if(Number.isInteger(number)){
  let resultado = '';
  
  for (let i = 1; i <=12; i++) {
    resultado = resultado + `${number} x ${i} = <span class="resultado">${number*i}</span><br>`;    
  }
    document.getElementById('resultado_16').innerHTML = 'TABLA GENERADA<br><br>' +resultado;
  }else{
    alert('el numero ingresado no es entero');
  }
}


function ejc_17() {
  const numbers = [
    parseFloat(document.getElementById("ejc_17_num1").value) || 0,
    parseFloat(document.getElementById("ejc_17_num2").value) || 0
  ];

  if(numbers.every(number=>Number.isInteger(number))){
    //identificamos el numero mayor y menor de los dos
    const m = Math.max(...numbers);
    const n = Math.min(...numbers);
    let i = n, suma = 0;
    
    for (let i = 0; i <=m; i++) {
      if(i%2 ===0){
        suma+=i;
      }      
    }
    document.getElementById("resultado_17").innerHTML=`La Suma de los pares entre ${n} y ${m} es de: <span class="resultado">${suma}</span>`;
  }
  else alert('Los números ingresados no son todos enteros\nIngrese números validos');
}