//No.1
function teriak() {
	return 'Halo Sanbers!';
}
console.log(teriak());

// No.2
function kalikan(num1, num2) {
	var result = num1 * num2;
	return result;
}

var hasilKali = kalikan(4, 3);
console.log(hasilKali);

// No.3
function introduce(name, age, address, hobby) {
	return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}`;
}
var perkenalan = introduce('fauzi', 26, 'Surabaya Jawa Timur', 'Tidur');
console.log(perkenalan);
