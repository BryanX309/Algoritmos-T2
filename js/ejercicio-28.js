function ingresar() {  
  const text = String(document.querySelector("#txt").value).trim() || '';
  
   if (text != '') {
    const palabras = text.split(' ');
    
    const vocales = palabras.filter(palabra => 
      palabra.substring(0,1).toLocaleLowerCase() === 'a' ||
      palabra.substring(0,1).toLocaleLowerCase() === 'e' ||
      palabra.substring(0,1).toLocaleLowerCase() === 'i' ||
      palabra.substring(0,1).toLocaleLowerCase() === 'o' ||
      palabra.substring(0,1).toLocaleLowerCase() === 'u'
    )
    
    let resultado = '';

    vocales.forEach(vocal => resultado = resultado.concat(vocal, ', ') || '')
    
    document.getElementById("resultado").innerHTML = 
    `Palabras que empiezan con una vocal: <span class="resultado">${resultado.substring(0, resultado.length-2)}</span>`;

    //console.log(resultado);
    
  }else{
    document.getElementById("resultado").innerHTML = 'no hay texto ingresado';
  }
}