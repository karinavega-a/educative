/* Variables */
var ctx;
var canvas;
var palabra;
var letras = "QWERTYUIOPASDFGHJKLÑZXCVBNM";
var colorTecla = "#585858";
var colorMargen = "red";
var inicioX = 200;
var inicioY = 300;
var lon = 35;
var margen = 20;
var pistaText = "";

/* Arreglos */
var teclas_array = new Array();
var letras_array = new Array();
var palabras_array = new Array();

/* Variables de control */
var aciertos = 0;
var errores = 0;

/* Para agregar Palabras se usa el array y el.push */
palabras_array.push("LEON");
palabras_array.push("CEBRA");
palabras_array.push("PERRO");
palabras_array.push("GATO");
palabras_array.push("PEZ");
palabras_array.push("MARIPOSA");
palabras_array.push("TIBURON");
palabras_array.push("CANGREJO");
palabras_array.push("ALACRAN");
palabras_array.push("ARAÑA");
palabras_array.push("GRILLO");
palabras_array.push("VENADO");
palabras_array.push("GALLINA");
palabras_array.push("CONEJO");
palabras_array.push("AGUILA");
palabras_array.push("ABEJA")
palabras_array.push("VACA")
        
/* Objetos */
function Tecla(x, y, ancho, alto, letra){
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.letra = letra;
    this.dibuja = dibujaTecla;
}

function Letra(x, y, ancho, alto, letra){
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.letra = letra;
    this.dibuja = dibujaCajaLetra;
    this.dibujaLetra = dibujaLetraLetra;
}



/* Dibujar Teclas*/
function dibujaTecla(){
    ctx.fillStyle = "black"; // color de relleno de la tecla de escribir//
    ctx.strokeStyle = "black"; //color de contorno tecla//
    ctx.fillRect(this.x, this.y, this.ancho, this.alto);
    ctx.strokeRect(this.x, this.y, this.ancho, this.alto);
    
    ctx.fillStyle = "white";
    ctx.font = "bold 20px green";
    ctx.fillText(this.letra, this.x+this.ancho/2-5, this.y+this.alto/2+5);
}

/* Dibua la letra y su caja */
function dibujaLetraLetra(){
    var w = this.ancho;
    var h = this.alto;
    ctx.fillStyle = "black"; // color de letra cuadro grande//
    ctx.font = "bold 40px Courier"; // tipo de letra//
    ctx.fillText(this.letra, this.x+w/2-12, this.y+h/2+14);
}
function dibujaCajaLetra(){
    ctx.fillStyle = "white"; // color cuadro grande
    ctx.strokeStyle = "red"; // color del contorno del cuadro grande//
    ctx.fillRect(this.x, this.y, this.ancho, this.alto);
    ctx.strokeRect(this.x, this.y, this.ancho, this.alto);
}


/// Funcion para dar una pista al usuario ////
function pistaFunction(palabra){
    let pista = "";
    switch(palabra){  
        case 'LEON':   
            pista = "Ruge y es fuerte";
            break;     
        case 'CEBRA':
            pista = "Es igual que un caballo pero tiene frajas negras";
            break;
        case 'PERRO':
            pista = "El mejor amigo del hombre";
            break;
        case 'GATO':
            pista = "Son tiernos pero arañan";
            break;
        case "PEZ":
            pista = "Interpreta la pelicula de Nemo"
            break;
        case "MARIPOSA":
            pista = "Nace de la oruga y tiene 4 pequeñas alas"
            break;
        case "TIBURON":
            pista = "Soy gris con blanco y vivo en el mar"
            break;
        case "CANGREJO":
            pista = "Pequeño animal que camina hacia atras"
            break;
        case "Alacran":
            pista = "Animal que pica con la cola"
            break;
        case "ARAÑA":
            pista = "Teje su casa"
            break;
        case "GRILLO":
            pista = "Consejero de Pinocho"
            break;
        case "VENADO":
            pista = "Personaje principal de Bambi"
            break;
        case "GALLINA":
            pista = "La mamá de los pollitos"
            break;
        case "CONEJO":
            pista = "Amante de las Zanahorias"
            break;
        case "AGUILA":
            pista = "Simbolo en la bandera de México"
            break;
        case "ABEJA":
            pista = "Zumba en las flores"
            break;
        case "VACA":
            pista = "Mamá de los Becerritos"
            break;




        default:  // El defaul se puede omitir // 
            pista="No hay pista aun xP";
    }
  
    ctx.fillStyle = "black";  // color de la letra
    ctx.font = "bold 22px Courier";  //tamaño de la letra
    ctx.fillText(pista, 10, 15);  // aqui ponemos la frase en nuestro caso la variable pista , seguido de la posx y posy
}

        
 /* Distribuir nuestro teclado con sus letras respectivas al acomodo de nuestro array */
function teclado(){
    var ren = 0;
    var col = 0;
    var letra = "";
    var miLetra;
    var x = inicioX;
    var y = inicioY;
    for(var i = 0; i < letras.length; i++){
        letra = letras.substr(i,1);
        miLetra = new Tecla(x, y, lon, lon, letra);
        miLetra.dibuja();
        teclas_array.push(miLetra);
        x += lon + margen;
        col++;
        if(col==10){
            col = 0;
            ren++;
            if(ren==2){
                x = 280;
            } else {
                x = inicioX;
            }
        }
        y = inicioY + ren * 50;
    }
}


/* aqui obtenemos nuestra palabra aleatoriamente y la dividimos en letras */
function pintaPalabra(){
    var p = Math.floor(Math.random()*palabras_array.length);
    palabra = palabras_array[p];

    pistaFunction(palabra);

    var w = canvas.width;
    var len = palabra.length;
    var ren = 0;
    var col = 0;
    var y = 230;
    var lon = 50;
    var x = (w - (lon+margen) *len)/2;
    for(var i=0; i<palabra.length; i++){
        letra = palabra.substr(i,1);
        miLetra = new Letra(x, y, lon, lon, letra);
        miLetra.dibuja();
        letras_array.push(miLetra);
        x += lon + margen;
    }
}

/* para insertar las imagenes */
function horca(errores){
    var imagen = new Image();
    imagen.src = "imagenes/ahorcado"+errores+".png";
    imagen.onload = function(){
        ctx.drawImage(imagen, 390, 0, 230, 230);
    }

}

/* ajustar coordenadas */
function ajusta(xx, yy){
    var posCanvas = canvas.getBoundingClientRect();
    var x = xx-posCanvas.left;
    var y = yy-posCanvas.top;
    return{x:x, y:y}
}

/* Detecta tecla clickeada y la compara con las de la palabra ya elegida al azar */
function selecciona(e){
    var pos = ajusta(e.clientX, e.clientY);
    var x = pos.x;
    var y = pos.y;
    var tecla;
    var bandera = false;
    for (var i = 0; i < teclas_array.length; i++){
        tecla = teclas_array[i];
        if (tecla.x > 0){
            if ((x > tecla.x) && (x < tecla.x + tecla.ancho) && (y > tecla.y) && (y < tecla.y + tecla.alto)){
                break;
            }
        }
    }
    if (i < teclas_array.length){
        for (var i = 0 ; i < palabra.length ; i++){ 
            letra = palabra.substr(i, 1);
            if (letra == tecla.letra){ /* comparamos y vemos si acerto la letra */
                caja = letras_array[i];
                caja.dibujaLetra();
                aciertos++;
                bandera = true;
            }
        }
        if (bandera == false){ /* Si falla aumenta los errores y checa si perdio para mandar a la funcion gameover */
            errores++;
            horca(errores);
            if (errores == 5) gameOver(errores);
        }
        /* Borra la tecla que se a presionado */
        ctx.clearRect(tecla.x - 1, tecla.y - 1, tecla.ancho + 2, tecla.alto + 2);
        tecla.x - 1;
        /* checa si se gano y manda a la funcion gameover */
        if (aciertos == palabra.length) gameOver(errores);
    }
}


function gameOver(errores){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";

    ctx.font = "bold 50px Courier";
    if (errores < 5){
        ctx.fillText("Muy bien, la palabra era: ", 110, 280);
    } else {
        ctx.fillText("Lo sentimos, la palabra era: ", 110, 280);
    }
    
    ctx.font = "bold 80px Courier";
    lon = (canvas.width - (palabra.length*48))/2;
    ctx.fillText(palabra, lon, 380);
    horca(errores);
}

/* Detectar si se a cargado nuestro contexco en el canvas, iniciamos las funciones necesarias para jugar o se le manda msj de error segun sea el caso */
window.onload = function(){
    canvas = document.getElementById("pantalla");
    if (canvas && canvas.getContext){
        ctx = canvas.getContext("2d");
        if(ctx){
            teclado();
            pintaPalabra();
            horca(errores);
            canvas.addEventListener("click", selecciona, false);
        } else {
            alert ("Error al cargar el contexto!");
        }
    }
}