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
	this.damage = null;
}

//// the 'Flyer' robot type
function Flyer() {
	this.model = null;
	this.grounded = false;
	this.wings = true;
	this.robogills = false;
	this.damage = 10;
}
Flyer.prototype = new Robot();

//// the 'Walker' robot type
function Walker() {
	this.grounded = true;
	this.wings = false;
	this.robogills = false;
	this.damage = 30;
}
Walker.prototype = new Robot();

//// the 'Swimmer' robot type
function Swimmer() {
	this.grounded = false;
	this.wings = false;
	this.robogills = true;
	this.damage = 50;
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

// Flyer.prototype.setHealth();
// Walker.setHealth();
// Swimmer.setHealth();


module.exports = {Robot, Flyer, Swimmer, Walker};





