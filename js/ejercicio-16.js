function generar() {
const number = parseFloat(document.getElementById("num").value) || 0;

if(Number.isInteger(number)){
  let resultado = '';
  let i = 1;
  while(i <= 12) {
    resultado = resultado + `${number} x ${i} = <span class="resultado">${number*i}</span><br>`
    i++;
  }
    document.querySelector('.task-result').innerHTML = 'Tabla Generada<br><br>'+resultado;
  }else{
    alert('el numero ingresado no es entero');
  }
}