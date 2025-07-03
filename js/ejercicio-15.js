function generar() {
let number = parseFloat(document.getElementById("num").value) || 0;

if(Number.isInteger(number) && number >=1){
  let resultado = '';
  while(number >=1) {
    resultado = resultado+number+', ';
    number--;
  }
    document.getElementById('prefijo').textContent = 'Números generados: '
    document.getElementById('resultado').textContent = resultado.substring(0, resultado.length-2);
  }else{
    alert('el numero ingresado no es Valido');
  }
}