function evaluar() {
const number = parseFloat(document.getElementById("num").value) || 0;

if(Number.isInteger(number) && number >=1){
    document.getElementById('prefijo').textContent = 'El Numero Ingresado es '
    document.getElementById('resultado').textContent = 'un Entero';
  }else{
    alert('El numero ingresado no es entero\nIngrese un numero valido');
  }
}