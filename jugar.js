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

var x = 40;
var y= 200;
var s = 0;

var pa = {
  url:"imagenes/papel.png",
  cargaOK: false
}
var ti = {
  url: "imagenes/tijera.png",
  cargaOK: false
}
var pie = {
  url: "imagenes/piedra.png",
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
  if(pa.cargaOK)
    {
      papeldib.drawImage(pa.imagen, x, s);
      var resu = aleatorio(1, 3);
      console.log(resu);
      if (resu == 1)
      {
      papeldib.drawImage(pa.imagen, y, s); 
      mensaje1.innerHTML = "Tu opcion fue: PAPEL y Maquina fue: PAPEL ";
      mensaje2.innerHTML = "Resultado: ****EMPATE**** ";
      }
      if (resu == 2)
      {
      papeldib.drawImage(ti.imagen, y, s); 
      mensaje1.innerHTML = "Tu opcion fue: PAPEL y Maquina fue: TIJERA ";
      mensaje2.innerHTML = "Resultado: ****GANO MAQUINA**** ";
      }
      if (resu == 3)
      {
      papeldib.drawImage(pie.imagen, y, s); 
      mensaje1.innerHTML = "Tu opcion fue: PAPEL y Maquina fue: PIEDRA ";
      mensaje2.innerHTML = "Resultado: ****TU GANASTE**** ";
      }
    }
}

function cargarTijera()
{
  ti.cargaOK = true;
  if(ti.cargaOK)
  {
    papeldib.drawImage(ti.imagen, x, s);
    var resu = aleatorio(1, 3);
    console.log(resu);
      if (resu == 1)
      {
      papeldib.drawImage(pa.imagen, y, s);
      mensaje1.innerHTML = "Tu opcion fue TIJERA y Maquina fue PAPEL ";
      mensaje2.innerHTML = "Resultado: ****TU GANASTE**** ";
      }
      if (resu == 2)
      {
      papeldib.drawImage(ti.imagen, y, s); 
      mensaje1.innerHTML = "Tu opcion fue TIJERA y Maquina fue TIJERA";
      mensaje2.innerHTML = "Resultado: ****EMPATE**** "
      }
      if(resu == 3)
      {
      papeldib.drawImage(pie.imagen, y, s); 
      mensaje1.innerHTML = "tu opcion fue TIJERA y Maquina fue PIEDRA";
      mensaje2.innerHTML = "Resultado: ****GANO MAQUINA**** ";
      }
  }
}

function cargarPiedra()
{
  pie.cargaOK = true;
  if (pie.cargaOK)
  {
    ti.cargaOK = true;
    pa.cargaOK = true;
    papeldib.drawImage(pie.imagen, x, s);
    var resu = aleatorio(1, 3);
    console.log(resu);
    
    if (resu == 1)
    {
    papeldib.drawImage(pa.imagen, y, s); 
    mensaje1.innerHTML = "Tu opcion fue PIEDRA y Maquina fue PAPEL ";
    mensaje2.innerHTML = "Resultado: ****GANO MAQUINA****";
        }
        if(resu == 2)
        {
        papeldib.drawImage(ti.imagen, y, s); 
        mensaje1.innerHTML = "Tu opcion fue PIEDRA y Maquina fue TIJERA ";
        mensaje2.innerHTML = "Resultado: ****TU GANASTE***** ";
        }
        if(resu == 3)
        {
        papeldib.drawImage(pie.imagen, y, s); 
        mensaje1.innerHTML = "Tu opcion fue PIEDRA y Maquina fue PIEDRA";
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