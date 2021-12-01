//=====================================Задача 1 =====================================

/* const pizzaPalace = {
  pizzas: ["Supercheese", "Smoked", "Four meats"],
  
  checkPizza(pizzaName) {
   
    return this.pizzas.includes(pizzaName);
  },

  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
 
};

console.log(pizzaPalace.checkPizza("Smoked"));
console.log(pizzaPalace.order("Smoked"));
//"Order accepted, preparing «Smoked» pizza"
console.log(pizzaPalace.order("Four meats")); 
//"Order accepted, preparing «Four meats» pizza"
console.log(pizzaPalace.order("Big Mike")); 
//"Sorry, there is no pizza named «Big Mike»"
console.log(pizzaPalace.order("Viennese")); 
//"Sorry, there is no pizza named «Viennese»" */

//=====================================Задача 2 =====================================


/* const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Change code below this line
  getBalance() {
    return this.balance;
  },
   getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  }, 
  // Change code above this line
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak"); 
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"] */

//=====================================Задача 3 =====================================

/* const historyService = {
  orders: [
    { email: "jacob@hotmail.com", dish: "Burrito" },
    { email: "solomon@topmail.net", dish: "Burger" },
    { email: "artemis@coldmail.net", dish: "Pizza" },
    { email: "solomon@topmail.net", dish: "Apple pie" },
    { email: "jacob@hotmail.com", dish: "Taco" },
  ],
  // Change code below this line
  getOrdersLog() {
    return this.orders
      .map(order => `email: ${order.email} dish: ${order.dish}`)
      .join(" - ");
  },
  getEmails() {
    const emails = this.orders.map(order => order.email);
    const uniqueEmails = new Set(emails);
    return [...uniqueEmails];
  },
  getOrdersByEmail(email) {
    return this.orders.filter(order => order.email === email);
  },
  // Change code above this line
};


console.log(historyService.getOrdersLog());  
//строку с перечислением данных всех заказов из свойства orders
console.log(historyService.getEmails());  
//массив всех уникальных почтовых адресов из свойства orders
console.log(historyService.getOrdersByEmail("solomon@topmail.net")); 
 //[{ email: "solomon@topmail.net", dish: "Burger" }, { email: "solomon@topmail.net", dish: "Apple pie" }]
console.log(historyService.getOrdersByEmail("artemis@coldmail.net")); 
 //[{ email: "artemis@coldmail.net", dish: "Pizza" }]
 */

 //=====================================Задача 4 =====================================

/*  const parent = {
  name: "Stacey",
  surname: "Moore",
  age: 54,
  heritage: "Irish",
};
// Change code below this line

const child = Object.create(parent);

// Change code above this line
child.name = "Jason";
child.age = 27;


console.log(parent.hasOwnProperty("surname"));
console.log(child.name);
console.log(child.hasOwnProperty("age"));
console.log(child.age);
console.log(child.hasOwnProperty("heritage"))
console.log(child.heritage);
console.log(parent.isPrototypeOf(child)); */

//=====================================Задача 5 =====================================

/* const ancestor = {
  name: "Paul",
  age: 83,
  surname: "Dawson",
  heritage: "Irish",
};
// Change code below this line

const parent = Object.create(ancestor);
parent.name = "Stacey";
parent.surname = "Moore";
parent.age = 54;

const child = Object.create(parent);
child.name = "Jason";
child.age = 27;

 */

//=====================================Задача 7 =====================================

/* class Car {
  // Change code below this line
 constructor (brand, name, price) {
   this.brand = brand;
   this.name = name;
   this.price = price;
 }
  // Change code above this line
}

console.log(new Car("Audi", "Q3", 36000));
console.log(new Car("BMW", "X5", 58900));
console.log(new Car("Nissan","Murano", 31700));
console.log(Car); */

//=====================================Задача 8 =====================================

/* 
class Car {
  // Change code below this line
  constructor( {brand, model, price} ) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  // Change code above this line
}

console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }));
console.log(new Car({ brand: "BMW", model: "X5", price: 58900 }));
console.log(new Car({ brand: "Nissan", model: "Murano", price: 31700 }));
console.log(Car);
 */

//=====================================Задача 9 =====================================

/* class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  // Change code below this line
getPrice () {
  return this.price;
}

changePrice (newPrice) {
  this.price = newPrice;
}

  // Change code above this line
} */

//=====================================Задача 10 =====================================

/*class Storage {
  constructor (items) {
    this.items = items;
  };

  getItems() {
    return this.items;
  };

  addItem(newItem) {
    this.items.push(newItem);
  };

  removeItem(itemToRemove) {
    this.items.splice(this.items.indexOf(itemToRemove), 1);
  };

}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"] */


//=====================================Задача 11 =====================================

/* class StringBuilder {
  constructor(value) {
    this.value = value;
  };

  getValue() {
    return this.value;
  };

  padEnd(newValue) {
    this.value = this.value + newValue;
  };

  padStart(newValue) {
    this.value = newValue + this.value;
  };

  padBoth(newValue) {
    this.value = newValue + this.value + newValue;
  };
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."

builder.padStart("^");
console.log(builder.getValue()); // "^."

builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
 */

//=====================================Задача 12 =====================================

/* class Car {  
  #brand;
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  };

  getBrand() {
    return this.#brand;
  }

  changeBrand(newBrand) {
    return this.#brand = newBrand;
  };
  // Change code above this line
}

const car = new Car({ brand: "Audi", model: "Q3", price: 36000 });
console.log(car)
console.log(car.getBrand());
 */

//=====================================Задача 13 =====================================

/* class Storage {
  // Change code below this line
  #items
  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    this.#items = this.#items.filter(item => item !== itemToRemove);
  }
}

// Change code above this line
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"] */

//=====================================Задача 14 =====================================

/* class StringBuilder {
  // Change code below this line
  #value;
  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padEnd(str) {
    this.#value += str;
  }

  padStart(str) {
    this.#value = str + this.#value;
  }

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^=" */

//=====================================Задача 15 =====================================

/* class Car {
  // Change code below this line
  #brand;
  #model;
  #price;


  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }

  get brand() {
    return this.#brand;
  }

  set brand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.#model;
  }

  set model(newModel) {
    this.#model = newModel;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
  // Change code above this line
}
 
const car = new Car({ brand: "Audi", model: "Q3", price: 36000 });
console.log(car);
*/

//=====================================Задача 16 =====================================

/* class Car {
  // Change code below this line
  static MAX_PRICE = 50000; 

  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) { 
    newPrice < 50000 ? this.#price = newPrice : this.#price;    
  }
  // Change code above this line
}

const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000 */

//=====================================Задача 17 =====================================


/* class Car {
  static #MAX_PRICE = 50000;
  // Change code below this line
 static  checkPrice(price) {
    if (price < this.#MAX_PRICE) {
      return  "Success! Price is within acceptable limits"; 
    } else {
    return "Error! Price exceeds the maximum";
    }
  }
  // Change code above this line

  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"


console.log(Car.checkPrice(36000)) 
//"Success! Price is within acceptable limits"
console.log(Car.checkPrice(18000)) 
//"Success! Price is within acceptable limits"
console.log(Car.checkPrice(64000)) 
//"Error! Price exceeds the maximum"
console.log(Car.checkPrice(57000)) 
//"Error! Price exceeds the maximum" */


//=====================================Задача 18 =====================================



/* class User {
  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
// Change code below this line

class Admin extends User {
 static AccessLevel = {
  BASIC: "basic", 
  SUPERUSER: "superuser",
 } 
}

console.log(Admin.AccessLevel.BASIC);
console.log(Admin.AccessLevel.SUPERUSER) */

//=====================================Задача 19 =====================================

/* 
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  // Change code below this line

  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor({ email, accessLevel}) {
    super(email);
    this.email = email,
    this.accessLevel = accessLevel
    // Change code above this line
}
}
  
  const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"
 */


//=====================================Задача 20 =====================================

/* class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Change code below this line

  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
    this.email = email
  }

  blacklistedEmails = [];
  

  blacklist(email) {
    this.blacklistedEmails.push(email)    
  }

  isBlacklisted(email) {
     if (this.blacklistedEmails.includes(email)) {
       return true;
     } else {
       return false;
     };

  }
  // Change code above this line
}

const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true */

// дополнительная задаяа 1 

/* function disemvowel(str) {
  const vowels = ['e', 'y', 'u', 'i', 'o', 'a', 'E', 'Y', 'U', 'I', 'O', 'A'];
  const unvowels = [];
   for (const vowel of str) {    
     if(!vowels.includes(vowel))  {
      unvowels.push(vowel);
     }
        }
  return unvowels.join("");
}
 */

/* function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

console.log(disemvowel("This website is for losers LOL!")) */
// создаем масси гласных 
// 1. приходит строка в функцию 
// 2. в цикле сравниваем каждую букву строки с массивом гласных
// 3. если буква согласноя возвращаем ее в массив

// дополнительная задача 2

/* function squareDigits(num){
  let finalString = "";
  num = String(num);
  
  for (let item of num) {
    item = String(Math.pow(Number(item), 2));
    finalString += item;


    console.log(item)
  }
   return Number(finalString);
}

console.log(squareDigits(3212)) // should equal 9414

 */

//дополнительная задача 5

/*  function solution(str){
  const newArray = [];
  if (str.length % 2 !== 0) {
    str += "_"
  }  
  for (let i = 0; i < str.length; i += 2) {
     newArray.push(str[i] + str[i+1]);     
  }
  return newArray
 }
 

console.log(solution('')); */


//дополнительная задача 6


// написать функцию, которая на входе принимает сообщение на азбуке морзе(строка)
// разбивает строку на 1 кода (букву) и записывает в массив.
//
//возвращает строку с дешифрованным текстом
 
const morseLibrary = {
  'a': '.-',    'b': '-...',  'c': '-.-.', 'd': '-..',
  'e': '.',     'f': '..-.',  'g': '--.',  'h': '....',
  'i': '..',    'j': '.---',  'k': '-.-',  'l': '.-..',
  'm': '--',    'n': '-.',    'o': '---',  'p': '.--.',
  'q': '--.-',  'r': '.-.',   's': '...',  't': '-',
  'u': '..-',   'v': '...-',  'w': '.--',  'x': '-..-',
  'y': '-.--',  'z': '--..',  ' ': '/',
  '1': '.----', '2': '..---', '3': '...--', '4': '....-', 
  '5': '.....', '6': '-....', '7': '--...', '8': '---..', 
  '9': '----.', '0': '-----', ' ': '!!!', 'SOS': '...---...', '!': '-.-.--',
  
}


/* decodeMorse = function(morseCode){
 
  const morseUnCode = [];
  const keys = Object.keys(morseLibrary);
  for (const words of morseCode.split("   ").join("   !!!   ").split("   ")) {
   
   for (const item of words.split(" ")) {    
    for (const key of keys) { 
      if(morseLibrary[key] === item) {        
        morseUnCode.push(key); 
      }
    }
  }
}

if(morseUnCode[0] === ' ') {
  return morseUnCode.join('').toLocaleUpperCase().replace('  ', ' ').replace(' ', '')

}
  return morseUnCode.join('').toLocaleUpperCase();
 
 
}
 */

/* 
console.log(decodeMorse('   .... . -.--   .--- ..- -.. .'))
//console.log(decodeMorse('...---...'));

  */



 //a<b+c b<c+ac<a+b}.


/*  function isTriangle(a,b,c) {
  return  a < b + c && b < c + a && c < a + b
 }

console.log(isTriangle(1,2,2));
console.log(isTriangle(7,2,2));



 */



/* function divisors(integer) {
  const integerArray = [];
  const prime = `${integer} is prime`
  for (let i = 2; i < integer; i += 1) {
    if (integer % i === 0) {
       integerArray.push(i);  
    } 
   }
  if (integerArray.length > 0) {
  return integerArray;
  }
  return prime
};

console.log(divisors(15))
console.log(divisors(12))
console.log(divisors(13)) */