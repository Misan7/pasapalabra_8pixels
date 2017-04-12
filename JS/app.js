// This is an object's array that contents all questions and answers of the game
// The status show 0 if the question is not answered, 1 if it's correct and 2 for error
// This are spanish definitions, so the user will need a keyboard with the letter 'ñ'

var questions = [
	{letter: "a", answer: "abducir", status: 0, question: ("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien")},
	{letter: "b", answer: "bingo", status: 0, question: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso")},
	{letter: "c", answer: "churumbel", status: 0, question: ("CON LA C. Niño, crío, bebé")},
	{letter: "d", answer: "diarrea", status: 0, question: ("CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida")},
	{letter: "e", answer: "ectoplasma", status: 0, question: ("CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación")},
	{letter: "f", answer: "facil", status: 0, question: ("CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad")},
	{letter: "g", answer: "galaxia", status: 0, question: ("CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas")},
	{letter: "h", answer: "harakiri", status: 0, question: ("CON LA H. Suicidio ritual japonés por desentrañamiento")},
	{letter: "i", answer: "iglesia", status: 0, question: ("CON LA I. Templo cristiano")},
	{letter: "j", answer: "jabali", status: 0, question: ("CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba")},
	{letter: "k", answer: "kamikaze", status: 0, question: ("CON LA K. Persona que se juega la vida realizando una acción temeraria")},
	{letter: "l", answer: "licantropo", status: 0, question: ("CON LA L. Hombre lobo")},
	{letter: "m", answer: "misantropo", status: 0, question: ("CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas")},
	{letter: "n", answer: "necedad", status: 0, question: ("CON LA N. Demostración de poca inteligencia")},
	{letter: "ñ", answer: "señal", status:0, question: ("CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.")},
	{letter: "o", answer: "orco", status: 0, question: ("CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien")},
	{letter: "p", answer: "protoss", status: 0, question: ("CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft")},
	{letter: "q", answer: "queso", status: 0, question: ("CON LA Q. Producto obtenido por la maduración de la cuajada de la leche")},
	{letter: "r", answer: "raton", status: 0, question: ("CON LA R. Roedor")},
	{letter: "s", answer: "stackoverflow", status: 0, question: ("CON LA S. Comunidad salvadora de todo desarrollador informático")},
	{letter: "t", answer: "terminator", status: 0, question: ("CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984")},
	{letter: "u", answer: "unamuno", status: 0, question: ("CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914")},
	{letter: "v", answer: "vikingos", status: 0, question: ("CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa")},
	{letter: "w", answer: "sandwich", status: 0, question: ("CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso")},
	{letter: "x", answer: "botox", status: 0, question: ("CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética")},
	{letter: "y", answer: "peyote", status: 0, question: ("CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos")},
	{letter: "z", answer: "zen", status: 0, question: ("CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional")},
]

// Count vars
var points = 0;
var errors = 0;
var num = 0;
var d = document.getElementById('definition');
var results = document.getElementById('results');

// Music and sound effects
var sndMusic = new Audio("sound/music01.mp3");
var sndStart = new Audio("sound/start.mp3");
sndStart.currentTime = 0;
sndStart.volume = 0.5;
sndMusic.currentTime = 0;
sndMusic.volume = 1;
sndMusic.play();
sndMusic.addEventListener('ended', function() {
	this.currentTime = 0;
  	this.play();
}, false);

function soundBtn() {
	var music = document.getElementById("soundBtn");

	if (sndMusic.muted) {
    	sndMusic.muted = "";
    	music.innerHTML = "music on";
	} 
	else {
    	sndMusic.muted = "true";
    	music.innerHTML = "music off";
	}
}

// Functions that starts when the player hit the button "Nueva Partida"
function ask4Name() {
	document.getElementById("div_name").style.display = "block";
	document.getElementById('definition').style.display = "block";
	document.getElementById('play').style.display = "none";
	document.getElementById('highscores').style.display = "none";
	document.getElementById('heroes').style.display = "none";
	definition.innerHTML = "Introduce un nombre en la casilla";
}

function sendName() {
	var name = document.getElementById('name').value;
	document.getElementById('letters_group').style.display = "block";
	if(name === "") {
		definition.innerHTML = "Nombre no válido";
		document.getElementById('letters_group').style.display = "none";
	}
	else {
		header.innerHTML = name;
		newGame();
	}
}

function newGame() {
	num = 0;
	points = 0;
	errors = 0;
	d.innerHTML = questions[num].question;
	results.innerHTML = "¡Que comience el juego!";
	document.getElementById('btn_hid').style.display = "block";
	document.getElementById("div_name").style.display = "none";
	sndStart.play();
}

// Function that shows higscores
function showScores() {
	document.getElementById('play').style.display = "none";
	document.getElementById('definition').style.display = "none";
	document.getElementById('letters_group').style.display = "none";
	document.getElementById('highscores').style.display = "none";
	document.getElementById('startScreen').style.display = "block";
	document.getElementById('ranking_show').style.display = "block";

}
// Function that verify if the status of the question is 0 and end the game when you respond all questions
function status0() {
	if (questions[num].status === 0){
		questionDisplay();
	}
	else if (num === questions.length-1 && errors + points === questions.length){
		gameOver();	
	}
	else if (num === questions.length-1){
		restartRound();
	}
	else {
		num++
		status0();
	}
}

// Function that shows next question
function questionDisplay(){
		d.innerHTML = questions[num].question;
		results.innerHTML = "Has acertado " + points + " palabras y has cometido " + errors + " errores.";
		document.getElementById("answer").value = "";
		document.getElementById("answer").autofocus = "";
}

// Function that gives the possibility to repeat questions after letter 'z'
function restartRound(){
	num = 0;
	status0();
}

// Function that turns on when there are no more questions
function gameOver(){
	document.getElementById('btn_hid').style.display = "none";
	document.getElementById('definition').style.display = "none";
	document.getElementById('gameOver').style.display = "block";
	document.getElementById('megaman_hid').style.display='none';
	document.getElementById('animation_hid').style.display='none'
	results.innerHTML = "Has acertado " + points + " palabras y has cometido " + errors + " errores.";
}

// Function that verify if the answer given by the user is correct or not
function answerCheck() {
	var re = /\W/g;
	var userAnswer = document.getElementById('answer').value.toLowerCase().replace(re, "");
	var letter = document.getElementById("letters_group").children;
		if(userAnswer === questions[num].answer){
			points++;
			questions[num].status = 1;
			letter[num].className = "letter-true";
			document.getElementById('megaman_hid').style.display = "block";
			setTimeout(function() {
			document.getElementById('megaman_hid').style.display='none'
			}, 1200);
			status0();
		}
		else if(userAnswer !== questions[num].answer){
			errors++;
			questions[num].status = 2;
			letter[num].className = "letter-false";
			document.getElementById('animation_hid').style.display = "block";
			setTimeout(function() {
			document.getElementById('animation_hid').style.display='none'
			}, 1100);			
			status0();
		}
}

// Function that is activated when the user hits the button 'pasapalabra'
function showNext() {
	if (num < questions.length-1){
		num++;
		status0();
	}
	else {
		restartRound();
	}
}

function stopGame() {
	document.getElementById('btn_hid').style.display = "none";
	document.getElementById('definition').style.display = "none";
	document.getElementById("startScreen").style.display = "block"
	results.innerHTML = "Has acertado " + points + " palabras y has cometido " + errors + " errores.";
}