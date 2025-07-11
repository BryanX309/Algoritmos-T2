function ejecutar() {  
  const text = String(document.querySelector("#txt").value).trim() || '';
  
   if (text != '') {
    const elementos = text.split(',');
    let invertido = [];

    for (let i = 0; i < elementos.length; i++) {
      invertido[i] = elementos[elementos.length-i-1];
    }

    let resultado = '';

    invertido.forEach(valor => resultado = resultado.concat(valor, ', '));
    
    
    document.getElementById("resultado").innerHTML = 
    `El Arreglo invertido queda: <span class="resultado">${resultado.substring(0, resultado.length-2)}</span>`;
    
  }else{
    document.getElementById("resultado").innerHTML = 'no hay texto ingresado';
  }
}