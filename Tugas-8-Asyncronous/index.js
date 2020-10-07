// di index.js
const read = require('./callback.js');

var books = [
	{ name: 'LOTR', timeSpent: 3000 },
	{ name: 'Fidas', timeSpent: 2000 },
	{ name: 'Kalkulus', timeSpent: 4000 },
];

let numBook = 0;
read.readBooks(10000, books[(1, 2)], sisaWaktu => {
	console.log(sisaWaktu);
});
