const maxLives = 3
const numQuestions = 15;
let lives = maxLives;
let currentQuestion = 0;

var num1, num2, respuesta, score;
score = 0;
txt_suma = document.getElementById("suma");
op1 = document.getElementById("op1");
op2 = document.getElementById("op2");
op3 = document.getElementById("op3");
txt_msj = document.getElementById("msj");
txt_resultado = document.getElementById("resultado");
scoreHtml = document.getElementById("bar-score");
livesHtml = document.getElementById("bar-lives");

function comenzar(){
	txt_resultado.innerHTML = "?";
	txt_msj.innerHTML = "";
	scoreHtml.innerHTML = `${score}/${numQuestions}`;
	livesHtml.innerHTML = `${lives}/${maxLives}`;

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
	reducirBarraLives((lives/maxLives)*100)
}

function controlarRespuesta(opcionElegida){	
	txt_resultado.innerHTML = opcionElegida.innerHTML;
	if(respuesta == opcionElegida.innerHTML){
		txt_msj.innerHTML = "¡Excelente!";
		txt_msj.style.color="green";
         // progress bar
        if(currentQuestion < numQuestions) {
			currentQuestion++;
			score++;
			avanzarBarraScore((score/numQuestions)*100);
            setTimeout(comenzar, 2000);
        }
	}else{
		txt_msj.innerHTML = "Intenta otra vez";
		txt_msj.style.color="red";
        if(lives > 0) {
			loseLive()
            setTimeout(limpiar, 2000);
        }
	}
}

function limpiar(){
	txt_resultado.innerHTML = "?";
	txt_msj.innerHTML = "";
}

comenzar();




var scoreBar = document.getElementById('score_bar');
scoreBar.style.width = `0%`;
function avanzarBarraScore(porcentaje) {
    scoreBar.style.transitionDuration = `0.5s`;
    scoreBar.style.width =`${porcentaje}%`;
	scoreHtml.innerHTML = `${score}/${numQuestions}`;
}

var livesBar = document.getElementById('lives_bar');
livesBar.style.width = `100%`;
function reducirBarraLives(porcentaje) {
    livesBar.style.transitionDuration = `0.5s`;
    livesBar.style.width =`${porcentaje}%`;
	livesHtml.innerHTML = `${lives}/${maxLives}`;
}