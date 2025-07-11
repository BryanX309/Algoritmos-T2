function evaluar() {
const number = parseFloat(document.getElementById("num").value) || 0;

if(Number.isInteger(number) && number >=1){
  let divisores='', sumadiv =0;
  
  for (let i = 0; i < number; i++) {
    if(number%i === 0){
      divisores = divisores.concat(i,' + ');
      sumadiv +=i;
    }
  }
    document.getElementById('prefijo').innerHTML = `Divisores de ${number}: ${divisores.substring(0,divisores.length-3)} = ${sumadiv} `;
    document.getElementById('resultado').textContent = sumadiv === number ? `es un Numero Perfecto`:'no es un Numero Perfecto'
  }else{
    alert('el numero ingresado no es Valido');
  }
}