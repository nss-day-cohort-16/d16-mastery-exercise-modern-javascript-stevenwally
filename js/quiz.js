"use strict";

let Robots = require('./robots.js');
let robotOne;
let robotTwo;

///// Setting Robot #1's name via user text input
$('#set-one').click( () => {
	robotOne = new Robots.Robot();
	robotOne.setName($('#player-one').val());
	console.log("robotOne", robotOne);
});

///// Setting Robot #2's name via user text input
$('#set-two').click( () => {
	robotTwo = new Robots.Robot();
	robotTwo.setName($('#player-two').val());
	console.log("robotTwo", robotTwo);
});

///// Setting Robot #1's type via dropdown menu
$('#drop-one').change( () => {
	let modelChosen = $(event.target).val();
	if ($(event.target).val() === 'albatro$$' || $(event.target).val() === 'g00se') {
		robotOne = new Robots.Flyer();
		buildStats(robotOne, $('#player-one').val(), modelChosen);
	} else if ($(event.target).val() === 'p3gl3g' || $(event.target).val() === 'flintst0ne') {
		robotOne = new Robots.Walker();
		buildStats(robotOne, $('#player-one').val(), modelChosen);
	} else if ($(event.target).val() === 'n3m0' || $(event.target).val() === 'ne$$ie') {
		robotOne = new Robots.Swimmer();
		buildStats(robotOne, $('#player-one').val(), modelChosen);
	}
	showRobotOne();
});

///// Setting Robot #2's type via dropdown menu
$('#drop-two').change( () => {
	let modelChosen = $(event.target).val();
	if ($(event.target).val() === 'albatro$$' || $(event.target).val() === 'g00se') {
		robotTwo = new Robots.Flyer();
		buildStats(robotTwo, $('#player-two').val(), modelChosen);
	} else if ($(event.target).val() === 'p3gl3g' || $(event.target).val() === 'flintst0ne') {
		robotTwo = new Robots.Walker();
		buildStats(robotTwo, $('#player-two').val(), modelChosen);
	} else if ($(event.target).val() === 'n3m0' || $(event.target).val() === 'ne$$ie') {
		robotTwo = new Robots.Swimmer();
		buildStats(robotTwo, $('#player-two').val(), modelChosen);
		// console.log(robotTwo.prototype.name);
	}
	showRobotTwo();
});

$('#fight-button').click(robotFight);

///// Function building robot stats (Health, name, etc.)
function buildStats(bot, name, model) {
	bot.setHealth();
	bot.setName(name);
	bot.setModel(model);
	console.log("robotOne", robotOne);
	console.log("robotTwo", robotTwo);
}

function updateHealth(bot1, bot2) {
	if (robotOne.health <= 0) {
		alert(`${robotTwo.name} wins!`);
		console.log("robot 2 wins");
		$('#battle-type-one').html(`Health: 0`);
		// $('#battle-type-two').html(`Health: ${robotTwo.health}`);
	} else if (robotTwo.health <= 0) {
		console.log("robot 1 wins");
		$('#battle-type-one').html(`Health: ${robotOne.health}`);
		$('#battle-type-two').html(`Health: ${robotTwo.health}`);
		alert(`${robotOne.name} wins!`);
	} else {
		$('#battle-type-one').html(`Health: ${robotOne.health}`);
		$('#battle-type-two').html(`Health: ${robotTwo.health}`);
	}
}

///// Function building each robot "card"
/////// Each card contains bot name, model, type & health.
function showRobotOne() {
	$('#battle-one').addClass('battle-border');
	$('#battle-header-one').html(robotOne.name);
	$('#battle-model-one').html(`Model: ${robotOne.model}`);
	$('#battle-type-one').html(`Health: ${robotOne.health}`);
}

function showRobotTwo() {
	$('#battle-two').addClass('battle-border');
	$('#battle-header-two').html(robotTwo.name);
	$('#battle-model-two').html(`Model: ${robotTwo.model}`);
	$('#battle-type-two').html(`Health: ${robotTwo.health}`);
}

function robotFight() {
	robotOne.health = robotOne.health - robotTwo.damage;
	robotTwo.health = robotTwo.health - robotOne.damage;
	updateHealth();
}

