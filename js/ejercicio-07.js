function evaluar() {
  const number = parseFloat(document.getElementById("num").value) || 0;

  if(Number.isInteger(number)){
    document.getElementById('prefijo').textContent = `El número ${number} es `;
    document.getElementById('resultado').textContent = number%2===0 ? 'Par': 'Impar';
  }else{
    alert('el numero ingresado no es entero');
  }
}