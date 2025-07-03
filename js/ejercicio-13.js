function generar() {
const number = parseFloat(document.getElementById("num").value) || 0;

if(Number.isInteger(number) && number >=1){
  let resultado = '';
  let i = 1;
  while(i <= number) {
    resultado = resultado+i+', ';
    i++;
  }
    document.getElementById('prefijo').textContent = 'Números generados: '
    document.getElementById('resultado').textContent = resultado.substring(0, resultado.length-2);
  }else{
    alert('el numero ingresado no es Valido');
  }
}