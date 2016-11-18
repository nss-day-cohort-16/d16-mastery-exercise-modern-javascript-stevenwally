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





