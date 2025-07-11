function evaluar() {
  const text = String(document.getElementById("txt").value).trim() || '';
  if(text != ''){
    let c = 0;
    for (let i = 0; i < text.length; i++) {
      if(text.substring(i,i+1).toLocaleLowerCase() === 'a'){
        c++;
      }
    }
    document.getElementById("prefijo").textContent = 'La Letra a fue encontrada ';
    document.getElementById("resultado").textContent = `${c} veces`;
    document.getElementById("sufijo").textContent = ' en el texto ingresado';
  }else{
        document.getElementById("prefijo").textContent = '';
    document.getElementById("resultado").textContent = '';
    document.getElementById("sufijo").textContent = '';
  }
}