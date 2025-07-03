function evaluar() {
  const text = String(document.getElementById("txt").value).trim() || '';
  if(text != ''){
    document.getElementById("prefijo").textContent = 'El texto ingresado empieza con ';
    document.getElementById("resultado").textContent = text.charAt(0) === text.charAt(0).toUpperCase() ? 'Mayusculas': 'Minusculas';
  }else{
    document.getElementById("prefijo").textContent = '';
    document.getElementById("resultado").textContent = '';
  }
}