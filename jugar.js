var papelito = document.getElementById("papel");
papelito.addEventListener("click", juegoPapel);

function juegoPapel()
{
  alert("comoooooooo papel");
}

var cantidad = aleatorio(1, 3);

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
