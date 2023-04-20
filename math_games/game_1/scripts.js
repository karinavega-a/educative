const maxLives = 3
const numQuestions = 15;
let lives = maxLives;
let currentQuestion = 0;

var num1, num2, respuesta, score, scoreHtml;
score = 0;
txt_suma = document.getElementById("suma");
op1 = document.getElementById("op1");
op2 = document.getElementById("op2");
op3 = document.getElementById("op3");
txt_msj = document.getElementById("msj");
txt_resultado = document.getElementById("resultado");
scoreHtml = document.getElementById("score");
livesHtml = document.getElementById("lives");

function comenzar(){
	txt_resultado.innerHTML = "?";
	txt_msj.innerHTML = "";
    livesHtml.innerHTML = lives;

	//genera la suma - Numeros aleatorios entre 0 1 9
	num1 = Math.round(Math.random()*9);
	num2 = Math.round(Math.random()*9);
	respuesta = num1 + num2;
	suma.innerHTML = num1 + " + " + num2 + " = ";

	
	indiceOpCorrecta = Math.round(Math.random()*2);
	console.log(indiceOpCorrecta);

	if(indiceOpCorrecta == 0){
		op1.innerHTML = respuesta;
		op2.innerHTML = respuesta + 1;
		op3.innerHTML = respuesta - 1
	}
	if(indiceOpCorrecta == 1){
		op1.innerHTML = respuesta-1;
		op2.innerHTML = respuesta;
		op3.innerHTML = respuesta - 2;
	}
	if(indiceOpCorrecta == 2){
		op1.innerHTML = respuesta+ 2;
		op2.innerHTML = respuesta + 3;
		op3.innerHTML = respuesta;
	}
}

function loseLive() {
    lives--;
    livesHtml.innerHTML = lives;
}

function controlarRespuesta(opcionElegida){	
	txt_resultado.innerHTML = opcionElegida.innerHTML;
	if(respuesta == opcionElegida.innerHTML){
		txt_msj.innerHTML = "¡Excelente!";
		txt_msj.style.color="green";
        currentQuestion++;
        score++;
		avanzarBarra((score/numQuestions)*100); // progress bar
        if(currentQuestion < numQuestions) {
            setTimeout(comenzar, 2000);
        }
	}else{
		txt_msj.innerHTML = "Intenta otra vez";
		txt_msj.style.color="red";
        loseLive()
        if(lives > 0) {
            setTimeout(limpiar, 2000);
        }
	}
}

function limpiar(){
	txt_resultado.innerHTML = "?";
	txt_msj.innerHTML = "";
}

comenzar();




var bar = document.getElementById('bar');
var progress = document.getElementById('progress');
bar.style.width = `0%`;

function avanzarBarra(porcentaje) {
    bar.style.transitionDuration = `0.5s`;
    bar.style.width =`${porcentaje}%`;
	scoreHtml.innerHTML = `${score}/${numQuestions}`;
}