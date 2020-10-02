//Soal 1
console.log('Soal 1');
function range(startNum, finishNum) {
	var result = [];
	for (let i = startNum; i <= finishNum; i++) {
		result.push(i);
	}
	return result;
}
console.log(range(1, 10));
console.log('');

//Soal 2
console.log('Soal 2');
function rangeWithStep(startNum, finishNum, step) {
	var result = [];
	for (let i = startNum; i <= finishNum; i += step) {
		result.push(i);
	}
	return result;
}
console.log(rangeWithStep(1, 10, 2));
console.log('');

//Soal 3
console.log('Soal 3');
function sum(startNum, finishNum, step) {
	var arr = range(startNum, finishNum);
	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	return arr.reduce(reducer);
}
console.log(sum(1, 10, 1));
console.log('');

//Soal 4

console.log('Soal 4');
function dataHandling() {
	var inputs = [
		['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca'],
		['0002', 'Dika Sembiring', 'Medan', '10/10/1992', 'Bermain Gitar'],
		['0003', 'Winona', 'Ambon', '25/12/1965', 'Memasak'],
		['0004', 'Bintang Senjaya', 'Martapura', '6/4/1970', 'Berkebun'],
	];

	inputs.forEach(input => {
		input.forEach(data => {
			console.log(data);
		});
		console.log('');
	});
}
dataHandling();
console.log('');

//soal no. 5
console.log('Soal 5');
function balikKata(inputString) {
	var result = [];
	var jumlahkata = inputString.length;
	for (let i = jumlahkata - 1; i >= 0; i--) {
		result.push(inputString[i]);
	}
	result.forEach(data => {
		process.stdout.write(data);
	});
	console.log('');
}

balikKata('SanberCode');
console.log('');

// soal no.6
console.log('Soal 6');
function dataHandling2() {
	const input = [
		'0001',
		'Roman Alamsyah',
		'Bandar Lampung',
		'21/05/1989',
		'Membaca',
	];
	input.splice(5, 0, 'Pria', 'International School');
	input.splice(2, 1, 'Provinsi Bandar Lampung');

	console.log(input);

	const month = input[3];
	const monthResult = month.split('/');

	switch (parseInt(monthResult[1])) {
		case 01: {
			console.log(` Januari `);
			break;
		}
		case 02: {
			console.log(` Februari `);
			break;
		}
		case 03: {
			console.log(` Maret `);
			break;
		}
		case 04: {
			console.log(` April `);
			break;
		}
		case 05: {
			console.log(` Mei `);
			break;
		}
		case 06: {
			console.log(` Juni `);
			break;
		}
		case 07: {
			console.log(` Juli `);
			break;
		}
		case 08: {
			console.log(` Agustus `);
			break;
		}
		case 09: {
			console.log(` September `);
			break;
		}
		case 10: {
			console.log(` Oktober `);
			break;
		}
		case 11: {
			console.log(` November `);
			break;
		}
		case 12: {
			console.log(` November `);
			break;
		}
		default: {
			console.log(`Bulan Tidak terdaftar`);
			break;
		}
	}

	console.log(monthResult.join('-'));
}
dataHandling2();
console.log('');
