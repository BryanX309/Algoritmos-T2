function filtrar() {  
  const text = String(document.querySelector("txt").value).trim() || '';
  
   if (text != '') {
    const numbers = text.split(',');
    
    const resultado = numbers.reduce((pares, number) => {
      const num = parseInt(number);
      if (num % 2 === 0) {
        pares = pares.concat(num, ', ');
      }
      return pares;
    }, '');

    document.getElementById("resultado").innerHTML = 
    `Los Números Pares ingresados son: <span class="resultado">${resultado.substring(0, resultado.length-2)}</span>`;
    
  }else{
    document.getElementById("resultado").innerHTML = 'no hay texto ingresado';
  }
}