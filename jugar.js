var papelito = document.getElementById("papel");
papelito.addEventListener("click", juegoPapel);

var tijerita = document.getElementById("tijera");
tijerita.addEventListener("click", juegoTijera);

var piedrita = document.getElementById("piedra");
piedrita.addEventListener("click", juegoPiedra);

var dib = document.getElementById("canvass1");
var papeldib = dib.getContext("2d");

var mensaje1 = document.getElementById("mensaje1");
var mensaje2 = document.getElementById("mensaje2");



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
    var resu = aleatorio(1, 3);
    console.log(resu);
    if (resu == 1)
    {
    papeldib.drawImage(pa.imagen, 40, 0);
    papeldib.drawImage(pa.imagen, 220, 0); 
    mensaje1.innerHTML = "Tu opcion fue: PAPEL y Maquina fue: PAPEL ";
    mensaje2.innerHTML = "Resultado: ****EMPATE**** ";
    }
    if (resu == 2)
    {
    papeldib.drawImage(pa.imagen, 40, 0);
    papeldib.drawImage(ti.imagen, 220, 0); 
    mensaje1.innerHTML = "Tu opcion fue: PAPEL y Maquina fue: TIJERA ";
    mensaje2.innerHTML = "Resultado: ****GANO MAQUINA**** ";
    }
    if (resu == 3)
    {
    papeldib.drawImage(pa.imagen, 40, 0);
    papeldib.drawImage(pie.imagen, 220, 0); 
    mensaje1.innerHTML = "Tu opcion fue: PAPEL y Maquina fue: PIEDRA ";
    mensaje2.innerHTML = "Resultado: ****TU GANASTE**** ";
    }
    }
    
    }
 
function dibujarTij()
{
   if(ti.cargaOK)
  {
    papeldib.drawImage(ti.imagen, 40, 0);
    var resu = aleatorio(1, 3);
    console.log(resu);
        if (resu == 1)
      {
      papeldib.drawImage(pa.imagen, 220, 0);
      mensaje1.innerHTML = "tu opcion fue TIJERA y Maquina fue PAPEL ";
      mensaje2.innerHTML = "Resultado: ****TU GANASTE**** ";
      }
        if (resu == 2)
      {
      papeldib.drawImage(ti.imagen, 220, 0); 
      mensaje1.innerHTML = "tu opcion fue TIJERA y Maquina fue TIJERA";
      mensaje2.innerHTML = "Resultado: ****EMPATE**** "
      }
        if(resu == 3)
      {
      papeldib.drawImage(pie.imagen, 220, 0); 
      mensaje1.innerHTML = "tu opcion fue TIJERA y Maquina fue PIEDRA";
      mensaje2.innerHTML = "Resultado: ****GANO MAQUINA**** ";
      }
  }
}

function dibujarPie(){
  if (pie.cargaOK)
  {
    papeldib.drawImage(pie.imagen, 40, 0);
    var resu = aleatorio(1, 3);
    console.log(resu);
    if (resu == 1)
    {
    papeldib.drawImage(pa.imagen, 220, 0); 
    mensaje1.innerHTML = "Tu opcion fue PIEDRA y Maquina fue PAPEL ";
    mensaje2.innerHTML = "Resultado: ****GANO MAQUINA****";
        }
        if(resu == 2)
        {
        papeldib.drawImage(ti.imagen, 220, 0); 
        mensaje1.innerHTML = "tu opcion fue PIEDRA y Maquina fue TIJERA ";
        mensaje2.innerHTML = "Resultado: ****TU GANASTE ";
        }
        if(resu == 3)
        {
        papeldib.drawImage(pie.imagen, 220, 0); 
        mensaje1.innerHTML = "tu opcion fue PIEDRA y Maquina fue PIEDRA";
        mensaje2.innerHTML = "Resultado: ****EMPATE**** ";
        }
    }
  }  


  

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}