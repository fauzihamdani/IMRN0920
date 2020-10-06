//soal 1
const goldenFunction = () => {
	console.log('this is golden!!');
};
console.log('soal 1');
goldenFunction();
// soal2

const newFunction = function literal(firstName, lastName) {
	const data = {
		firstName: firstName,
		lastName: lastName,
		fullName: function () {
			console.log(this.firstName + ' ' + this.lastName);
			return;
		},
	};
	return data;
};
console.log('soal 2');
newFunction('john', 'doe').fullName();

const newObject = {
	firstName: 'Harry',
	lastName: 'Potter Holt',
	destination: 'Hogwarts React Conf',
	occupation: 'Deve-wizard Avocado',
	spell: 'Vimulus Renderus!!!',
};
const { firstName, lastName, destination, occupation, spell } = newObject;
console.log('soal 3');
console.log(firstName, lastName, destination, occupation);

const west = ['Will', 'Chris', 'Sam', 'Holly'];
const east = ['Gill', 'Brian', 'Noel', 'Maggie'];
const combined = [...west, ...east];
console.log('soal 4');
console.log(combined);

function templateLiteral() {
	const planet = 'earth';
	const view = 'glass';
	var before = `	Lorem ${view} dolor sit amet consectetur adipiscing elit ${planet} do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eni ad minim veniam`;

	// Driver Code
	return before;
}
console.log('soal 5');
console.log(templateLiteral());
