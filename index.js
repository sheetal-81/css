// script.js

let questions = [
	{
		prompt: `What does CSS stand for?`,
		options: [
		    "Cascading Style Sheets",
		    "Creative Style Sheets",
		    "Computer Style Sheets",
		    "Colorful Style Sheets",
		],
		answer: "Cascading Style Sheets",
	    },
	    {
		prompt: `Which property is used to change the background color of an element?`,
		options: [
		    "background-color",
		    "color",
		    "bgcolor",
		    "background",
		],
		answer: "background-color",
	    },
	    {
		prompt: `How do you select an element with id "demo" in CSS?`,
		options: [
		    ".demo",
		    "demo",
		    "#demo",
		    "*demo",
		],
		answer: "#demo",
	    },
	    {
		prompt: `How do you select elements with class "example" in CSS?`,
		options: [
		    ".example",
		    "#example",
		    "example",
		    "*example",
		],
		answer: ".example",
	    },
	    {
		prompt: `Which property is used to change the font size of an element?`,
		options: [  
		    "text-size",
		    "font-style",
		    "font-size",
		    "text-style",
		],
		answer: "font-size",
	    },
	    {
		prompt: `Which CSS property controls the text size?`,
		options: [
		    "font-size",
		    "text-size",
		    "font-style",
		    "text-style",
		],
		answer: "font-size",
	    },
	    {
		prompt: `What does the "padding" property in CSS do?`,
		options: [
		    "Adds space outside the element",
		    "Changes the element's font",
		    "Adds space inside the element",
		    "Changes the element's color",
		],
		answer: "Adds space inside the element",
	    },
	    {
		prompt: `What does the "margin" property in CSS do?`,
		options: [
		    "Adds space outside the element",
		    "Adds space inside the element",
		    "Changes the element's font",
		    "Changes the element's color",
		],
		answer: "Adds space outside the element",
	    },
	    {
		prompt: `Which property is used to change the font color of an element?`,
		options: [ 
		    "text-color",
		    "font-color",
		    "color",
		    "text",
		],
		answer: "color",
	    },
	    {
		prompt: `How do you add a background color to all <h2> elements?`,
		options: [
		    "h2 {background-color: #FFFFFF;}",
		    "h2 {bg-color: #FFFFFF;}",
		    ".h2 {background-color: #FFFFFF;}",
		    "h2 {color: #FFFFFF;}",
		],
		answer: "h2 {background-color: #FFFFFF;}",
	    },
	    {
		prompt: `Which property is used to make text bold in CSS?`,
		options: [
		    "text-weight",
		    "bold",
		    "text-bold",
		    "font-weight",
		],
		answer: "font-weight",
	    },
	    {
		prompt: `Which property is used to create space between the element's border and inner content in CSS?`,
		options: [  
		    "margin",
		    "spacing",
		    "padding",
		    "border-spacing",
		],
		answer: "padding",
	    },
	    {
		prompt: `What does the "display: none;" property do in CSS?`,
		options: [
		    "Hides the element",
		    "Shows the element",
		    "Changes the element's color",
		    "Changes the element's font",
		],
		answer: "Hides the element",
	    },
	    {
		prompt: `Which CSS property is used to specify the width of a border?`,
		options: [ 
		    "width",
		    "border-size",
		    "border-style",
		    "border-width",
		],
		answer: "border-width",
	    },
	    {
		prompt: `How do you select all elements of a specific type in CSS?`,
		options: [
		    "Using the element's name",
		    "Using the element's class",
		    "Using the element's id",
		    "Using the element's attribute",
		],
		answer: "Using the element's name",
	    },
	    {
		prompt: `What does the "float" property in CSS do?`,
		options: [
		    "Moves the element to the left or right of its container",
		    "Changes the element's color",
		    "Changes the element's font",
		    "Hides the element",
		],
		answer: "Moves the element to the left or right of its container",
	    },
	    {
		prompt: `Which CSS property is used to control the space between lines of text?`,
		options: [
		    "spacing",
		    "margin",
		    "padding",
		    "line-height",
		],
		answer: "line-height",
	    },
	    {
		prompt: `Which property is used to specify the font family of an element in CSS?`,
		options: [
		    "family",
		    "font-type",
		    "font-family",
		    "typeface",
		],
		answer: "font-family",
	    },
	    {
		prompt: `What does the "position: absolute;" property do in CSS?`,
		options: [
		    "Positions the element relative to the browser window",
		    "Hides the element",
		    "Positions the element relative to its first positioned (not static) ancestor element",
		    "Shows the element",
		],
		answer: "Positions the element relative to its first positioned (not static) ancestor element",
	    },
	    {
		prompt: `Which property is used to specify the thickness of a border in CSS?`,
		options: [
		    "border-thickness",
		    "border-width",
		    "thickness",
		    "border-size",
		],
		answer: "border-width",
	    },
	    
	    
];

// Get Dom Elements

let questionsEl =
	document.querySelector(
		"#questions"
	);
let timerEl =
	document.querySelector("#timer");
let choicesEl =
	document.querySelector("#options");
let submitBtn = document.querySelector(
	"#submit-score"
);
let startBtn =
	document.querySelector("#start");
let nameEl =
	document.querySelector("#name");
let feedbackEl = document.querySelector(
	"#feedback"
);
let reStartBtn =
	document.querySelector("#restart");

// Quiz's initial state
let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerId;

// Start quiz and hide frontpage

function quizStart() {
	timerId = setInterval(
		clockTick,
		1000
	);
	timerEl.textContent = time;
	let landingScreenEl =
		document.getElementById(
			"start-screen"
		);
	landingScreenEl.setAttribute(
		"class",
		"hide"
	);
	questionsEl.removeAttribute(
		"class"
	);
	getQuestion();
}

// Loop through array of questions and
// Answers and create list with buttons
function getQuestion() {
	let currentQuestion =
		questions[currentQuestionIndex];
	let promptEl =
		document.getElementById(
			"question-words"
		);
	promptEl.textContent =
		currentQuestion.prompt;
	choicesEl.innerHTML = "";
	currentQuestion.options.forEach(
		function (choice, i) {
			let choiceBtn =
				document.createElement(
					"button"
				);
			choiceBtn.setAttribute(
				"value",
				choice
			);
			choiceBtn.textContent =
				i + 1 + ". " + choice;
			choiceBtn.onclick =
				questionClick;
			choicesEl.appendChild(
				choiceBtn
			);
		}
	);
}

// Check for right answers and deduct
// Time for wrong answer, go to next question

function questionClick() {
	if (
		this.value !==
		questions[currentQuestionIndex]
			.answer
	) {
		time -= 10;
		if (time < 0) {
			time = 0;
		}
		timerEl.textContent = time;
		feedbackEl.textContent = `Wrong! The correct answer was 
		${questions[currentQuestionIndex].answer}.`;
		feedbackEl.style.color = "red";
	} else {
		feedbackEl.textContent =
			"Correct!";
		feedbackEl.style.color =
			"green";
	}
	feedbackEl.setAttribute(
		"class",
		"feedback"
	);
	setTimeout(function () {
		feedbackEl.setAttribute(
			"class",
			"feedback hide"
		);
	}, 2000);
	currentQuestionIndex++;
	if (
		currentQuestionIndex ===
		questions.length
	) {
		quizEnd();
	} else {
		getQuestion();
	}
}

// End quiz by hiding questions,
// Stop timer and show final score

function quizEnd() {
	clearInterval(timerId);
	let endScreenEl =
		document.getElementById(
			"quiz-end"
		);
	endScreenEl.removeAttribute(
		"class"
	);
	let finalScoreEl =
		document.getElementById(
			"score-final"
		);
	finalScoreEl.textContent = time;
	questionsEl.setAttribute(
		"class",
		"hide"
	);
}

// End quiz if timer reaches 0

function clockTick() {
	time--;
	timerEl.textContent = time;
	if (time <= 0) {
		quizEnd();
	}
}

// Save score in local storage
// Along with users' name

function saveHighscore() {
	let name = nameEl.value.trim();
	if (name !== "") {
		let highscores =
			JSON.parse(
				window.localStorage.getItem(
					"highscores"
				)
			) || [];
		let newScore = {
			score: time,
			name: name,
		};
		highscores.push(newScore);
		window.localStorage.setItem(
			"highscores",
			JSON.stringify(highscores)
		);
		alert(
			"Your Score has been Submitted"
		);
	}
}

// Save users' score after pressing enter

function checkForEnter(event) {
	if (event.key === "Enter") {
		saveHighscore();
		alert(
			"Your Score has been Submitted"
		);
	}
}
nameEl.onkeyup = checkForEnter;

// Save users' score after clicking submit

submitBtn.onclick = saveHighscore;

// Start quiz after clicking start quiz

startBtn.onclick = quizStart;
