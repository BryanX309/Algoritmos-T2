function evaluar() {
  const numbers = [
    parseFloat(document.getElementById("num1").value) || 0,
    parseFloat(document.getElementById("num2").value) || 0
  ];

  if(numbers.every(number=>Number.isInteger(number))){
    //identificamos el numero mayor y menor de los dos
    const m = Math.max(...numbers);
    const n = Math.min(...numbers);
    let i = n, suma = 0;
    
    while(i <= m){
      if(i%2 ===0){
        suma+=i;
      }
      i++;
    }
    document.getElementById("prefijo").textContent = `La Suma de los pares entre ${n} y ${m} es de: `;
    document.getElementById("resultado").textContent = suma;
  }
  else alert('Los números ingresados no son todos enteros\nIngrese números validos');
}