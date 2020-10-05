arrayToObject = () => {
	var people = [
		['Bruce', 'Banner', 'male', 1975],
		['Natasha', 'Romanoff', 'female'],
	];

	var result = [];
	var result1 = {};
	var count = 1;

	for (let i = 0; i < people.length; i++) {
		console.log(count);
		for (let j = 0; j < people[i].length; j++) {
			result1.nama = people[i][[j]];
			console.log(people[i][j]);
		}
		console.log(result1);
		console.log('');
		count += 1;
	}
};

arrayToObject();

function shoppingTime(memberId, money) {
	var data = {};
	var barang = ['Sepatu Stacattu', 'Baju Zoro', 'Baju H&N'];
	var harga = [1500000, 500000, 250000];
	if (!memberId || !money) {
		return 'Mohon maaf, toko X hanya berlaku untuk member saja';
	}
	if (money <= 50000) {
		return 'maaf uang tidak cukup';
	}
	data.memberId = memberId;
	data.money = money;
	data.listPurchased = barang;
	data.total = harga.reduce((a, b) => a + b, 0);
	data.changeMoney = money - data.total;
	return data;
}
console.log(shoppingTime('1820RzKrnWn08', 5000000000));
