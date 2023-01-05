

var imagenes = [
  { src: "Albania.png", title: "Albania" },
  { src: "Argentina.png", title: "Argentina" },
  { src: "Australia.png", title: "Australia" },
  { src: "Bolivia.png", title: "Bolivia" },
  { src: "Brazil.png", title: "Brazil" },
  { src: "Bulgaria.png", title: "Bulgaria" },
  { src: "Canada.png", title: "Canada" },
  { src: "Senegal.png", title: "Senegal" },
  { src: "Finland.png", title: "Finlandia" },
  { src: "Ecuador.png", title: "Ecuador" },
  { src: "Chile.png", title: "Chile" },
  { src: "China.png", title: "China" },
  { src: "Colombia.png", title: "Colombia" },
  { src: "Costa-Rica.png", title: "Costa-rica" },
  { src: "Ethiopia.png", title: "Etiopia" },
  { src: "France.png", title: "Francia" },
  { src: "Germany.png", title: "Alemania" },
  { src: "Guinea.png", title: "Guinea" },
  { src: "Honduras.png", title: "Honduras" },
  { src: "Hungary.png", title: "Hungaria" },
  { src: "Iran.png", title: "Iran" },
  { src: "Madagascar.png", title: "Madagascar" },
  { src: "Sweden.png", title: "Suecia" },
  { src: "Spain.png", title: "España" },
  { src: "Slovakia.png", title: "Slovakia" },
  { src: "Monaco.png", title: "Monaco" },
  { src: "Moldova.png", title: "Moldavia" },
  { src: "Japan.png", title: "Japon" },
  { src: "Italy.png", title: "Italia" },
  { src: "Grecee.png", title: "Grecia" },
];

var arrayInput = [];
var posicion = 0;
var pic;
var fotonum;
var numAl;
var tamArray;

 

//funcion principal, se carga al principio
function inicio() {
  numaleat();
  pic = 1;
  fotonum = 1;
  var numBan = document.getElementById("numBan");
  var tablaclick = document.querySelectorAll("table td");
  var aceptar = document.getElementById("aceptar");

  //añade click a cada name y a enviar
  aceptar.addEventListener("click", btnacepta);
  tablaclick.forEach((celdas) => {
    celdas.addEventListener("click", function () {
      pais = document.getElementById("pais");
      var nombrepais = celdas.lastChild.title;
      pais.textContent = nombrepais;
    });
  });

  //bucle foreach pone imagen
  imagenes.forEach((imagen) => {
    var foto = "foto" + fotonum;
    var pic = document.getElementById(foto);
    newImage = document.createElement("img");
    newImage.title = imagen.title;
    newImage.src = imagen.src;
    pic.src = newImage.src;
    pic.title = newImage.title;
    pic++;
    fotonum++;
    //Crea Lista de los paises
    listaPaises = document.getElementById("listaPaises");
    nomPais = document.createElement("li");
    listaPaises.appendChild(nomPais);
    nomPais.textContent = imagen.title;

    //tamaño bandera
    pic.width = 85;
    pic.height = 60;
    
  });

  //imprime num de banderas
  fotonum--;
  numBan.textContent = "Numero de Banderas: " + fotonum;
  tamArray = arrayInput.length;
  numAl = Math.floor(Math.random() * (fotonum - 1) + 1);
}
  //imprime bandera aleatoria
function numaleat() {
  var newFlag;
  var numFlag = Math.floor(Math.random() * 30);
  newflag = document.getElementById("newflag");
  newflag.src = imagenes[numFlag].src;
  newflagname = imagenes[numFlag].title.toUpperCase();
  resp = document.getElementById("resp")
  resp.value="";
}

  // decide si la bandera entrada es la correcta
  var aciertos=1;
  var fallos=1;
  function btnacepta() {
  newflag = document.getElementById("newflag");
  resp = document.getElementById("resp").value.toUpperCase();
  var correcto=document.getElementById("correcto");
  var pantAciertos=document.getElementById("pantAciertos");
  var pantaFallos=document.getElementById("pantaFallos");
  if (resp === newflagname) {
    correcto.textContent = "Acertaste ¡¡";
    pantAciertos.textContent="Aciertos: "+aciertos;
    aciertos++;
  } else {
    correcto.textContent = "Fallaste ¡¡";
    pantaFallos.textContent="Fallos: "+fallos;
    fallos++;
  }
}

