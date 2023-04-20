let preguntas = ["grammar_img/imagen_1.png", "grammar_img/imagen_2.png", "grammar_img/imagen_3.png", "grammar_img/ala.png", "grammar_img/imagen_5.png"];


let correcta = [2,2,1,1,0];


let opciones = [];

opciones.push(["Herbir", "Ervir", "Hervir"]);
opciones.push(["Haber si vienes a verme.", "Aber si vienes a verme.", "A ver si vienes a verme"]);
opciones.push(["Lápiz.", "Imágen", "Murciélago"]);
opciones.push(["Alá", "Ala", "Hala"]);
opciones.push(["Caminando", "Caminé", "Caminaste"]);


let posActual = 0;

let cantidadAcertadas = 0;

function comenzarJuego(){

    posActual = 0;
    cantidadAcertadas = 0;

    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarImagenes();

}


function cargarImagenes(){
 
    if(preguntas.length <= posActual){
        terminarJuego();
    }
    else{
        limpiarOpciones();

        document.getElementById("imgBandera").src = " " + preguntas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}

function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";

    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
}

function comprobarRespuesta(opElegida){
    if(opElegida==correcta[posActual]){
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    }else{
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";

     
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
   
    setTimeout(cargarImagenes,1000);
}
function terminarJuego(){
    
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
   
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = preguntas.length - cantidadAcertadas;
}

function volverAlInicio(){
  
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}