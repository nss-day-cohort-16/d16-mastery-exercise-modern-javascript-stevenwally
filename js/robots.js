"use strict";

//// Base robot function
function Robot() {
	this.name = null;
	this.health = 100;
	this.human = false;
	this.robot = true;
	this.grounded = null;
	this.wings = null;
	this.robogills = null;
}

//// 3 types of robots, each a prototype of the base Robot
function Flyer() {
	this.grounded = false;
	this.wings = true;
	this.robogills = false;
}
Flyer.prototype = new Robot();

function Walker() {
	this.grounded = true;
	this.wings = false;
	this.robogills = false;
}
Walker.prototype = new Robot();

function Swimmer() {
	this.grounded = false;
	this.wings = false;
	this.robogills = true;
}
Swimmer.prototype = new Robot();

Robot.prototype.setName = function(name) {
	this.name = name || "Anonymous Bot Fighter!";
};

Robot.prototype.setHealth = function() {
	if (this.grounded === true) {
		this.health = this.health + 25;
	} else if (this.wings === true) {
		this.health = this.health + 10;
	} else if (this.robogills === true) {
		this.health = this.health - 15;
	}
};

Flyer.prototype.setHealth();
// Walker.setHealth();
// Swimmer.setHealth();

// console.log("Swimmer", Swimmer());
// console.log("Walker", Walker());
// console.log("Flyer", Flyer());
// console.log("Robot", Robot());
let newBot = new Robot();
console.log("newBot", newBot);

let newFlyer = new Flyer();
newFlyer.setHealth();
newFlyer.setName();
console.log("newFlyer", newFlyer);

let newWalker = new Walker();
newWalker.setHealth();
newWalker.setName();
console.log("newWalker", newWalker);


let newSwimmer = new Swimmer();
newSwimmer.setHealth();
newSwimmer.setName();
console.log("newSwimmer", newSwimmer);

module.exports = Robot;