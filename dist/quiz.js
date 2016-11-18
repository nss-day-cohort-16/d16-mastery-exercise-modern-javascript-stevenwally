(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

let Robots = require('./robots.js');
let robotOne;
let robotTwo;

///// Setting Robot #1's type + name via dropdown menu
$('#drop-one').change( () => {
	let modelChosen = $(event.target).val();
	if ($(event.target).val() === 'albatro$$' || $(event.target).val() === 'g00se') {
		robotOne = new Robots.Flyer();
		buildBotOne(robotOne, $('#player-one').val(), modelChosen);
	} else if ($(event.target).val() === 'p3gl3g' || $(event.target).val() === 'flintst0ne') {
		robotOne = new Robots.Walker();
		buildBotOne(robotOne, $('#player-one').val(), modelChosen);
	} else if ($(event.target).val() === 'n3m0' || $(event.target).val() === 'ne$$ie') {
		robotOne = new Robots.Swimmer();
		buildBotOne(robotOne, $('#player-one').val(), modelChosen);
	}
	showRobotOne();
});

///// Setting Robot #2's type via dropdown menu
$('#drop-two').change( () => {
	let modelChosen = $(event.target).val();
	if ($(event.target).val() === 'albatro$$' || $(event.target).val() === 'g00se') {
		robotTwo = new Robots.Flyer();
		buildBotTwo(robotTwo, $('#player-two').val(), modelChosen);
	} else if ($(event.target).val() === 'p3gl3g' || $(event.target).val() === 'flintst0ne') {
		robotTwo = new Robots.Walker();
		buildBotTwo(robotTwo, $('#player-two').val(), modelChosen);
	} else if ($(event.target).val() === 'n3m0' || $(event.target).val() === 'ne$$ie') {
		robotTwo = new Robots.Swimmer();
		buildBotTwo(robotTwo, $('#player-two').val(), modelChosen);
	}
	showRobotTwo();
});

$('#fight-button').click(robotFight);

///// Function building robot stats (Health, name, etc.)
function buildBotTwo(bot, name, model) {
	bot.setHealth();
	bot.setName(name);
	bot.setModel(model);
	bot.setDamage(model);
}

function buildBotOne(bot, name, model) {
	bot.setHealth();
	bot.setName(name);
	bot.setModel(model);
	bot.setDamage(model);
}

function updateHealth(bot1, bot2) {
	if (robotOne.health <= 0) {
		alert(`${robotTwo.name} wins with his/her ${robotTwo.weapon}!`);
		$('#battle-type-one').html(`Health: 0`);
	} else if (robotTwo.health <= 0) {
		$('#battle-type-two').html(`Health: 0`);
		alert(`${robotOne.name} wins with his/her ${robotOne.weapon}!`);
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

///// Function for fight: subtracting from health based on damage points.
function robotFight() {
	robotOne.health = robotOne.health - robotTwo.damage;
	robotTwo.health = robotTwo.health - robotOne.damage;
	updateHealth();
}
},{"./robots.js":2}],2:[function(require,module,exports){
"use strict";

//// Base robot function
function Robot() {
	this.name = null;
	this.type = null;
	this.model = null;
	this.health = 100;
	this.human = false;
	this.robot = true;
	this.grounded = null;
	this.wings = null;
	this.robogills = null;
	this.damage = 15;
}

//// the 'Flyer' robot type
function Flyer() {
	this.model = null;
	this.grounded = false;
	this.wings = true;
	this.robogills = false;
	this.weapon = ['goosebombs', 'iron beak'];
}
Flyer.prototype = new Robot();

//// the 'Walker' robot type
function Walker() {
	this.grounded = true;
	this.wings = false;
	this.robogills = false;
	this.weapon = ['truthbombs', 'frisbee of death'];
}
Walker.prototype = new Robot();

//// the 'Swimmer' robot type
function Swimmer() {
	this.grounded = false;
	this.wings = false;
	this.robogills = true;
	this.weapon = ['waterblade', 'aquabombs'];
}
Swimmer.prototype = new Robot();

Robot.prototype.setName = function(name) {
	this.name = name || "Anonymous Bot Fighter!";
};

Robot.prototype.setModel = function(model) {
	this.model = model || "Unknown Bot Model!";
};

Robot.prototype.setHealth = function() {
	if (this.grounded === true) {
		this.health = Math.floor(Math.random() * ((this.health + 40) - this.health + 1)) + this.health;
	} else if (this.wings === true) {
		this.health = Math.floor(Math.random() * ((this.health + 15) - this.health + 1)) + this.health;
	} else if (this.robogills === true) {
		this.health = Math.floor(Math.random() * ((this.health - 20) - this.health + 1)) + this.health;
	}
};

Flyer.prototype.setDamage = function(model) {
	if (model === 'albatro$$') {
		this.damage = Math.floor(Math.random() * ((this.damage + 5) - this.damage + 1)) + this.damage;
		this.weapon = this.weapon[1];
	} else if (model === 'g00se') {
		this.damage = Math.floor(Math.random() * ((this.damage + 3) - this.damage + 1)) + this.damage;
		this.weapon = this.weapon[0];
	}
};

Walker.prototype.setDamage = function(model) {
	if (model === 'p3gl3g') {
		this.damage = Math.floor(Math.random() * ((this.damage + 7) - this.damage + 1)) + this.damage;
		this.weapon = this.weapon[0];
	} else if (model === 'flintst0ne') {
		this.damage = Math.floor(Math.random() * ((this.damage + 10) - this.damage + 1)) + this.damage;
		this.weapon = this.weapon[1];
	}
};

Swimmer.prototype.setDamage = function(model) {
	if (model === 'n3m0') {
		this.damage = Math.floor(Math.random() * ((this.damage + 6) - this.damage + 1)) + this.damage;
		this.weapon = this.weapon[0];
	} else if (model === 'ne$$ie') {
		this.damage = Math.floor(Math.random() * ((this.damage + 8) - this.damage + 1)) + this.damage;
		this.weapon = this.weapon[1];
	}
};

module.exports = {Robot, Flyer, Swimmer, Walker};






},{}],3:[function(require,module,exports){

},{}]},{},[1,2,3]);
