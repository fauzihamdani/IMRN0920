class Animal {
	constructor(name, legs, cold_blooded) {
		this.name = name;
		this.legs = legs;
		this.cold_blooded = cold_blooded;
	}
}

var sheep = new Animal('shaun', 4, false);

console.log(sheep.name); // "shaun"
console.log(sheep.legs); // 4
console.log(sheep.cold_blooded); // false

class Ape extends Animal {
	constructor(name) {
		super(name);
		this.name = name;
	}
	yell() {
		return `Auooo`;
	}
}

var sungokong = new Ape('kera sakti');
console.log(sungokong.yell()); // "Auooo"

class Frog extends Animal {
	constructor(name) {
		super(name);
		this.jenis = name;
	}
	jump() {
		console.log('Hop Hop');
	}
}

var sungokong = new Frog('buduk');
sungokong.jump();

class Clock {
	constructor(template) {
		this.template = template;
		this.timer;
	}

	render() {
		this.date = new Date();

		this.hours = date.getHours();
		if (hours < 10) hours = '0' + hours;

		this.mins = date.getMinutes();
		if (mins < 10) mins = '0' + mins;

		this.secs = date.getSeconds();
		if (secs < 10) secs = '0' + secs;

		this.output = template
			.replace('h', hours)
			.replace('m', mins)
			.replace('s', secs);

		console.log(output);
	}

	stop() {
		clearInterval(timer);
	}

	start() {
		render();
		timer = setInterval(render, 1000);
	}
}

var clock = new Clock({ template: 'h:m:s' });
clock.start();
