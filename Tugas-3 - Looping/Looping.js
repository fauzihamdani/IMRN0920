console.log('\n JAWABAN NO.1 \n');
//Jawaban No. 1 Looping While
console.log('LOOPING PERTAMA');
let index = 2;
while (index <= 20) {
	console.log(index + ' I Love Coding');
	index++;
}

console.log('LOOPING KEDUA');
let index_ = 20;
while (index_ >= 2) {
	console.log(index_ + ' I will become a mobile developer');
	index_--;
}
console.log('\n');

console.log('\n JAWABAN NO.2 \n');
//Jawaban No. 2 Looping menggunakan for
for (let i = 1; i <= 20; i++) {
	if (i % 3 == 0 && i % 2 != 0) {
		console.log(i + ' - i love coding');
	} else if (i % 2 == 0) {
		console.log(i + ' - berkualitas');
	} else if (i % 2 != 0) {
		console.log(i + ' - santai');
	}
}

console.log('\n JAWABAN NO.3 \n');
//No. 3 Membuat Persegi Panjang
for (let j = 1; j <= 4; j++) {
	for (let k = 1; k <= 8; k++) {
		process.stdout.write('#');
	}
	console.log('\n');
}

console.log('\n JAWABAN NO.4 \n');
// No. 4 Membuat Tangga
for (let j = 1; j <= 7; j++) {
	for (let k = 1; k <= j; k++) {
		process.stdout.write('#');
	}
	console.log('\n');
}

console.log('\n JAWABAN NO.5 \n');
// // No. 5 Membuat Papan Catur

const rows = 8;
const chessElements = 8;

for (let j = 1; j <= rows; j++) {
	if (j % 2 != 0) {
		for (let k = 1; k <= chessElements; k++) {
			if (k % 2 != 0) {
				process.stdout.write('#');
			} else if (k % 2 == 0) {
				process.stdout.write(' ');
			}
		}
		console.log('');
	}
	if (j % 2 == 0) {
		for (let k = 1; k <= chessElements; k++) {
			if (k % 2 != 0) {
				process.stdout.write(' ');
			} else if (k % 2 == 0) {
				process.stdout.write('#');
			}
		}
		console.log('');
	}
}
