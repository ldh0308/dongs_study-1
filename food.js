class Food {
    constructor(name) {
	this.name = name;
	this.brands = [];
    }

    addBrand(brand) {
	this.brands.push(brand)
    }

    print() {
	console.log(`${this.name}을/를 파는 음식점들: `)
	console.log(this.brands.join(', '));
    }
}

//class Pizza extends Food{
    //constructor(name) {
//	super(name);
//    }
//}

//class Chicken extends Food {
//    constructor(name) {
//	super(name);
//    }
//}
const pizza = new Food('피자');
pizza.addBrand('피자헛');
pizza.addBrand('도미노');

const chicken = new Food('치킨');
chicken.addBrand('후참잘');
chicken.addBrand('두마리');

pizza.print();
chicken.print();

