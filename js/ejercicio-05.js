function evaluar() {
  const text = String(document.getElementById("txt").value).trim() || '';
  let ca =0, ce =0, ci=0, co=0, cu=0;

  for (let i = 0; i < text.length; i++) {
    switch(text.substring(i,i+1)){
      case 'a': ca++; break;
      case 'e': ce++; break;
      case 'i': ci++; break;
      case 'o': co++; break;
      case 'u': cu++; break;
      default: break;
    }
  }

  document.getElementById("cont-a").textContent = ca;
  document.getElementById("cont-e").textContent = ce;
  document.getElementById("cont-i").textContent = ci;
  document.getElementById("cont-o").textContent = co;
  document.getElementById("cont-u").textContent = cu;
}