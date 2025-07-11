function ingresar() {
  const text = String(document.getElementById("txt").value).trim() || '';
  if(text != ''){
    let resultado = '';
    const array = text.split(',');

    array.forEach(texto => resultado = resultado.concat(texto.trim(), ' / '));

    document.getElementById("resultado").innerHTML = 
    `Texto dividido en array: <span class="resultado">${resultado.substring(0, resultado.length-3)}</span>`;
  }else{
    document.getElementById("resultado").innerHTML = '';
  }
}