function comparar() {
const number = parseFloat(document.getElementById("num").value) || 0;
const rndm = Math.floor(Math.random() * 10) + 1;

  if(Number.isInteger(number) && number >=1 && number <=10){

    document.getElementById('random_num').textContent = rndm;
    document.getElementById('resultado').textContent = number == rndm? 'Buen Trabajo': 'Intente otra vez';
  }else{
    alert('el numero ingresado no es Valido');
  }
}