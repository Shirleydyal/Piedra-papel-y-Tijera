var papelito = document.getElementById("papel");
papelito.addEventListener("click", juegoPapel);

var tijerita = document.getElementById("tijera");
tijerita.addEventListener("click", juegoTijera);

var piedrita = document.getElementById("piedra");
piedrita.addEventListener("click", juegoPiedra);

var dib = document.getElementById("canvass1");
var papeldib = dib.getContext("2d");

var pa = {
  url:"papel.png",
  cargaOK: false
}
var ti = {
  url: "tijera.png",
  cargaOK: false
}
var pie = {
  url: "piedra.png",
  cargaOK: false
};


function juegoPapel()
{
pa.imagen = new Image();
pa.imagen.src = pa.url;
pa.imagen.addEventListener("load", cargarPapel);
}
function juegoTijera()
{
ti.imagen = new Image();
ti.imagen.src = ti.url;
ti.imagen.addEventListener("load", cargarTijera);
}

function juegoPiedra()
{
pie.imagen = new Image();
pie.imagen.src = pie.url;
pie.imagen.addEventListener("load", cargarPiedra);
}

function cargarPapel()
{
  pa.cargaOK = true;
  dibujarPa();
}

function cargarTijera()
{
  ti.cargaOK = true;
  dibujarTij();
}

function cargarPiedra()
{
  pie.cargaOK = true;
  dibujarPie();
}

function dibujarPa()
{
  if(pa.cargaOK)
  {
    papeldib.drawImage(pa.imagen, 40, 0);
    maquina();
  }
}
 
function dibujarTij()
{
   if(ti.cargaOK)
  {
    papeldib.drawImage(ti.imagen, 40, 0);
    maquina();
  }

}

function dibujarPie(){
  if (pie.cargaOK)
  {
    papeldib.drawImage(pie.imagen, 40, 0);
    maquina();
  } 
}   


  

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}


function maquina()
{
  var resu = aleatorio(1, 3);
  console.log(resu);
  Procesar()
}

function Procesar(resu)
{
  if (resu = 1)
  {
    papeldib.drawImage(pa.imagen, 220, 0); 
  }
  if (resu = 2)
  {
    papeldib.drawImage(ti.imagen, 220, 0); 
  }
  if (resu = 3)
  {
    papeldib.drawImage(pa.imagen, 220, 0); 
  }
}
