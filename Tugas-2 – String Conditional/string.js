// jawaban soal 1

var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';
console.log(
	word +
		' ' +
		second +
		' ' +
		third +
		' ' +
		fourth +
		' ' +
		fifth +
		' ' +
		sixth.concat(seventh)
);

// jawaban soal 2

var sentence = 'I am going to be React Native Developer';

console.log(sentence[0]);
console.log(sentence[2] + sentence[3]);
console.log(
	sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9]
);
console.log(sentence[11] + sentence[12]);
console.log(sentence[14] + sentence[15]);
console.log(
	sentence[17] + sentence[18] + sentence[19] + sentence[20] + sentence[21]
);
console.log(
	sentence[23] +
		sentence[24] +
		sentence[25] +
		sentence[26] +
		sentence[27] +
		sentence[28]
);
console.log(
	sentence[30] +
		sentence[31] +
		sentence[32] +
		sentence[33] +
		sentence[34] +
		sentence[35] +
		sentence[36] +
		sentence[37] +
		sentence[38]
);

// jawaban soal 3
var sentence3 = 'wow JavaScript is so cool';
var exampleWord1 = sentence3.substring(0, 3);
var exampleWord2 = sentence3.substring(4, 14);
var exampleWord3 = sentence3.substring(15, 17);
var exampleWord4 = sentence3.substring(18, 20);
var exampleWord5 = sentence3.substring(21, 25);

var WordLength1 = exampleWord1.length;
var WordLength2 = exampleWord2.length;
var WordLength3 = exampleWord3.length;
var WordLength4 = exampleWord4.length;
var WordLength5 = exampleWord5.length;

console.log('First Word: ' + exampleWord1 + ', with length: ' + WordLength1);
console.log('Second Word: ' + exampleWord2 + ', with length: ' + WordLength2);
console.log('Third Word: ' + exampleWord3 + ', with length: ' + WordLength3);
console.log('Fourth Word: ' + exampleWord4 + ', with length: ' + WordLength4);
console.log('fifth Word: ' + exampleWord5 + ', with length: ' + WordLength5);
