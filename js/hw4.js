//+++++++++++++++++++++++++++++++++++++++++++++++ДЗ4


 //================================Задача 1=============================

 /* function makePizza() {
  return "Your pizza is being prepared, please wait.";
}
// Change code below this line

const result = makePizza();
const pointer = makePizza;

console.log(result);
console.log(pointer); */

//================================Задача 2=============================
/* 
function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

// Chande code below this line
function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}

console.log(makeMessage("Royal Grand", makePizza));
// "Pizza Royal Grand is being prepared, please wait..."
console.log(makeMessage("Ultracheese", deliverPizza));
// "Delivering Ultracheese pizza." */

//================================Задача 3=============================

/* function makePizza(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}

makePizza("Royal Grand", function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}.`);
});
// Change code below this line



makePizza("Ultracheese", function eatPizza(pizzaName) {
  console.log(`Eating pizza ${pizzaName}`); 
  });
  */

//================================Задача 4=============================

/* const pizzaPalace = {
  pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
  order(pizzaName, onSuccess, onOrderError) {
   for (const pizza of this.pizzas) {
    if ( pizzaName === pizza) {
      onSuccess(pizzaName);
      return
    }    
   }
   onOrderError(`There is no pizza with a name ${pizzaName} in the assortment.`); 
  },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return console.log(`Your order is accepted. Cooking pizza ${pizzaName}.`);
}

// Callback for onError
function onOrderError(error) {
  return console.log(`Error! ${error}`);
}

// Method calls with callbacks
pizzaPalace.order('Smoked', makePizza, onOrderError);
pizzaPalace.order('Four meats', makePizza, onOrderError);
pizzaPalace.order('Big Mike', makePizza, onOrderError);
pizzaPalace.order('Vienna', makePizza, onOrderError);  */

//================================Задача 5=============================

/* function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Change code below this line

  orderedItems.forEach(function callback(number) {
    totalPrice += number;
  }); 

  // Change code above this line
  return totalPrice;
}

console.log(calculateTotalPrice([12, 85, 37, 4])) //)  //138
console.log(calculateTotalPrice([164, 48, 291]))//)  //503
console.log(calculateTotalPrice([412, 371, 94, 63, 176]))//)  //1116 */


//================================Задача 6=============================

/* function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Change code below this line

  numbers.forEach(function callback(number) {
         if(number > value) {
           filteredNumbers.push(number);
        } 
  });      
    return filteredNumbers;
  }

/*   // Change code above this line
  return filteredNumbers; */

/* console.log(filterArray([1, 2, 3, 4, 5], 3))  //[4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4))  //[5]
console.log(filterArray([1, 2, 3, 4, 5], 5))  //[]
console.log(filterArray([12, 24, 8, 41, 76], 38))  //[41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20))  //[24, 41, 76]  */ 


//================================Задача 7=============================

/* function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line

firstArray.forEach( function (i) {
  if (secondArray.includes(i)) {
    commonElements.push(i);
  }
 });
  return commonElements;
  // Change code above this line
}


console.log(getCommonElements([1, 2, 3], [2, 4])) //)  //[2]
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]))  //[1, 2]
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]))  //[12, 27, 3]
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]))  //[10, 30, 40]
console.log(getCommonElements([1, 2, 3], [10, 20, 30]))  //[] */

//================================Задача 9=============================

/* // Change code below this line

const calculateTotalPrice = (quantity, pricePerItem) => {
  // Change code above this line
  return quantity * pricePerItem;
}

console.log(calculateTotalPrice(5, 100))  //500
console.log(calculateTotalPrice(8, 60)) //480
console.log(calculateTotalPrice(3, 400))  //1200 */

//================================Задача 10=============================


// Change code below this line
/* const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach((item) => {
    totalPrice += item;
  });

  return totalPrice;
}
// Change code above this line


console.log(calculateTotalPrice([12, 85, 37, 4])) // 138
console.log(calculateTotalPrice([164, 48, 291])) // 503
console.log(calculateTotalPrice([412, 371, 94, 63, 176])) // 1116 */

//================================Задача 11=============================

/* // Change code below this line
const filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  // Change code above this line
  return filteredNumbers;
}


console.log(filterArray([1, 2, 3, 4, 5], 3)) // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)) // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)) // []
console.log(filterArray([12, 24, 8, 41, 76], 38)) // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)) // [24, 41, 76] */

//================================Задача 12=============================

/* const getCommonElements = (firstArray, secondArray) => {
  const commonElements = [];
  // Change code below this line

firstArray.forEach((element) => {
  if (secondArray.includes(element)) {
    commonElements.push(element);
  }
 });
  return commonElements;
  // Change code above this line
}


console.log(getCommonElements([1, 2, 3], [2, 4])) //)  //[2]
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]))  //[1, 2]
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]))  //[12, 27, 3]
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]))  //[10, 30, 40]
console.log(getCommonElements([1, 2, 3], [10, 20, 30]))  //[]  */

//================================Задача 13=============================

/* function changeEven(numbers, value) {
  // Change code below this line
  const newArray = [];
  numbers.forEach(number => {
       if (number % 2 === 0) {
      number = number + value;
      newArray.push(number);
    } else 
    newArray.push(number);
  });
   return newArray;
  // Change code above this line
}


console.log(changeEven([1, 2, 3, 4, 5], 10))  
// новый массив [1, 12, 3, 14, 5]
console.log(changeEven([2, 8, 3, 7, 4, 6], 10))  
// новый массив [12, 18, 3, 7, 14, 16]
console.log(changeEven([17, 24, 68, 31, 42], 100)) 
 // новый массив [17, 124, 168, 31, 142]
console.log(changeEven([44, 13, 81, 92, 36, 54], 100))  
 // новый массив [144, 13, 81, 192, 136, 154] */

 //================================Задача 14=============================

/*  const planets = ["Earth", "Mars", "Venus", "Jupiter"];
 // Change code below this line
 const planetsLengths = planets.map(planet => planet.length);
 console.log(planetsLengths);

 //[5, 4, 6, 6] */

 //================================Задача 15=============================

/*  const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
// Change code below this line

const titles = books.map(book => book.title);

console.log(titles) */

 //================================Задача 16=============================

/* const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism"],
  },
];
// Change code below this line

const genres = books.flatMap(book => book.genres);

console.log(genres); */

/*  //================================Задача 17=============================

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

const getUserNames = (users) => users.map((user) => user.name);


console.log(getUserNames(users));
 */

 //================================Задача 18=============================
/* 
 const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

const getUserNames = (users) => users.map((user) => user.email);


console.log(getUserNames(users)); */

 //================================Задача 19=============================

/* const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Change code below this line

const evenNumbers = numbers.filter(number => number % 2 === 0);
const oddNumbers = numbers.filter(number => number % 2 > 0);

console.log(evenNumbers);
console.log(oddNumbers);
 */

//================================Задача 20=============================
/* 
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction", "mysticism"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism", "adventure"],
  },
];
// Change code below this line
const allGenres = books.flatMap(book => book.genres);
const uniqueGenres = allGenres.filter((item, index, array) => array.indexOf(item) === index);

console.log(allGenres)
console.log(uniqueGenres)
 */

//================================Задача 21=============================
/* 
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";
// Change code below this line

const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
const booksByAuthor = books.filter(book => book.author === AUTHOR);

console.table(booksByAuthor);
console.table(topRatedBooks);
 */

//================================Задача 21=============================
/* const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
] */

/* const getUsersWithEyeColor = (users, color) => users.filter(user => 
  (user.eyeColor === color));


console.table(getUsersWithEyeColor(users, 'blue1')); */


//================================Задача 22=============================

/* const users = [  {
  name: "Moore Hensley",
  email: "moorehensley@indexia.com",
  eyeColor: "blue",
  friends: ["Sharron Pace"],
  isActive: false,
  balance: 2811,
  gender: "male",
  age: 37
},
{
  name: "Sharlene Bush",
  email: "sharlenebush@tubesys.com",
  eyeColor: "blue",
  friends: ["Briana Decker", "Sharron Pace"],
  isActive: true,
  balance: 3821,
  gender: "female",
  age: 34
},
{
  name: "Ross Vazquez",
  email: "rossvazquez@xinware.com",
  eyeColor: "green",
  friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
  isActive: false,
  balance: 3793,
  gender: "male",
  age: 24
},
{
  name: "Elma Head",
  email: "elmahead@omatom.com",
  eyeColor: "green",
  friends: ["Goldie Gentry", "Aisha Tran"],
  isActive: true,
  balance: 2278,
  gender: "female",
  age: 21
},
{
  name: "Carey Barr",
  email: "careybarr@nurali.com",
  eyeColor: "blue",
  friends: ["Jordan Sampson", "Eddie Strong"],
  isActive: true,
  balance: 3951,
  gender: "male",
  age: 27
},
{
  name: "Blackburn Dotson",
  email: "blackburndotson@furnigeer.com",
  eyeColor: "brown",
  friends: ["Jacklyn Lucas", "Linda Chapman"],
  isActive: false,
  balance: 1498,
  gender: "male",
  age: 38
},
{
  name: "Sheree Anthony",
  email: "shereeanthony@kog.com",
  eyeColor: "brown",
  friends: ["Goldie Gentry", "Briana Decker"],
  isActive: true,
  balance: 2764,
  gender: "female",
  age: 39
}]


const getUsersWithAge = (users, minAge, maxAge) => 
users.filter(user =>(user.age > minAge && user.age < maxAge));



console.table(getUsersWithAge(users, 20, 30)); */

//================================Задача 24=============================

/* const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39
  }
]

const getUsersWithFriend = (users, friendName) => 
users.filter(user =>(user.friends.includes(friendName)));

console.log(getUsersWithFriend(users, 'Goldie Gentry')); */

//================================Задача 25=============================

/*  const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39
  }
] 



const getFriends = (users) => {
  const arrayFriends = users.flatMap((user) => user.friends);
  return arrayFriends.filter(
      (item, index, array) => array.indexOf(item) === index,
  );
}; */

/* 
const getArray = users.flatMap(user => user.friends);
const getFriends = getArray.filter((item, index) => 
getArray.indexOf(item) === index); */

/* console.log(getFriends(users)) */


/* const allGenres = books.flatMap(book => book.genres);
const uniqueGenres = allGenres.filter((item, index, array) => 
array.indexOf(item) === index);

console.log(allGenres)
console.log(uniqueGenres) */

//================================Задача 26=============================
/* 
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39
  }
]

// Change code below this line
const getInactiveUsers = (users) => {
  return users.filter((user) => user.isActive === false);
  
   
};

console.table(getInactiveUsers(users)) */

//================================Задача 28=============================


/* const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
];
const BOOK_TITLE = 'The Dream of a Ridiculous Man';
const AUTHOR = 'Robert Sheckley';
// Change code below this line

const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
const bookByAuthor = books.find((book) => book.author === AUTHOR);

console.log(bookWithTitle)
console.log(bookByAuthor) */

//Sharlene Bush, Elma Head, Carey Barr и Sheree Anthony

//================================Задача 29=============================
/* 
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
];

const getUserWithEmail = (users, email) => {
   return users.find(user => user.email === email)
};

console.log(getUserWithEmail(users, 'elmahead@omatom.com'))
 */

//================================Задача 30=============================

/* const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change code below this line

const eachElementInFirstIsEven = firstArray.every(item => item % 2 === 0);
console.log(eachElementInFirstIsEven);
const eachElementInFirstIsOdd = firstArray.every(item => item % 2 === !0);
console.log(eachElementInFirstIsOdd);

const eachElementInSecondIsEven = secondArray.every(item => item % 2 === 0);
console.log(eachElementInSecondIsEven);
const eachElementInSecondIsOdd = secondArray.every(item => !item % 2 === 0);
console.log(eachElementInSecondIsOdd);

const eachElementInThirdIsEven = thirdArray.every(item => item % 2 === 0);
console.log(eachElementInThirdIsEven);
const eachElementInThirdIsOdd = thirdArray.every(item => item % 2 === 0);
console.log(eachElementInThirdIsOdd); */

//================================Задача 31=============================
/* const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
];


const isEveryUserActive = (users) => {
   return users.every((user) => user.isActive === true);
};
//const isEveryUserActive = users.every((user) => user.isActive === true);

console.log(isEveryUserActive(users)); */

//================================Задача 32=============================

/* const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change below this line

const anyElementInFirstIsEven = firstArray.some(item => item % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some(item => item % 2);

const anyElementInSecondIsEven = secondArray.some(item => item % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some(item => item % 2);

const anyElementInThirdIsEven = thirdArray.some(item => item % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some(item => item % 2);


console.log(anyElementInFirstIsEven);
console.log(anyElementInFirstIsOdd);

console.log(anyElementInSecondIsEven);
console.log(anyElementInSecondIsOdd);

console.log(anyElementInThirdIsEven);
console.log(anyElementInThirdIsOdd); */


//================================Задача 33=============================
/* 
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]

const isAnyUserActive = users => {
   return users.some((user) => user.isActive === true)
};

console.log(isAnyUserActive(users)); */


//================================Задача 34=============================

/* const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Change code below this line

const totalPlayTime = playtimes.reduce((previousValue, number) => {
  return previousValue + number;
});

// Change code above this line
const averagePlayTime = totalPlayTime / playtimes.length;

console.log(totalPlayTime);
console.log(averagePlayTime); */

//================================Задача 35=============================

/* const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];
// Change code below this line

const totalAveragePlaytimePerGame = players.reduce((avgS, player) => {
  return avgS + (player.playtime / player.gamesPlayed);
}, 0);

console.log(totalAveragePlaytimePerGame) //1023 */

//================================Задача 36=============================

/* const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
] */
/* 
const calculateTotalBalance = (users) => 
  users.reduce((total, user) => {
    return total + user.balance
}, 0);

console.log(calculateTotalBalance(users))
 */

//================================Задача 37=============================

// Change code below this line
/* const getTotalFriendCountArray = (users) => {
  const arrayFreinds = users.reduce((acc, user) => {
    acc.push(...user.friends);
    return acc;  
  }, [])
  return arrayFreinds.length;
};
console.log(getTotalFriendCountArray(users)); */

//================================Задача 38=============================

/* const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];
// Change code below this line

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();

console.log(ascendingReleaseDates);
console.log(alphabeticalAuthors); */

//================================Задача 39=============================

/* const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Change code below this line

const ascendingReleaseDates = [...releaseDates].sort((a, b)=> a - b);

const descendingReleaseDates = [...releaseDates].sort((a, b)=> b - a);

console.log(ascendingReleaseDates);
console.log(descendingReleaseDates); */

//================================Задача 40=============================

/* const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
  "Howard Lovecraft",
];
// Change code below this line

const authorsInAlphabetOrder = [...authors].sort((a,b) => a.localeCompare(b));

const authorsInReversedOrder = [...authors].sort((a,b) => b.localeCompare(a));

console.log(authorsInAlphabetOrder);
console.log(authorsInReversedOrder); */

//================================Задача 41=============================
/* 
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
// Change code below this line

const sortedByAuthorName = [...books].sort((firstAuthor, secondAuthor) => 
firstAuthor.author.localeCompare(secondAuthor.author));

const sortedByReversedAuthorName = [...books].sort((firstAuthor, secondAuthor) => 
secondAuthor.author.localeCompare(firstAuthor.author));

const sortedByAscendingRating = [...books].sort((firstRating, secondRating) => 
firstRating.rating - secondRating.rating);

const sortedByDescentingRating = [...books].sort((firstRating, secondRating) => 
secondRating.rating - firstRating.rating);


console.table(sortedByAuthorName);

console.table(sortedByReversedAuthorName);

console.table(sortedByAscendingRating);

console.table(sortedByDescentingRating);
 */

//================================Задача 42=============================

/* const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]; */

/* const sortByAscendingBalance = users => {
  const usersArray = [...users].sort((balanceFirst, balanceSecond) => 
  balanceFirst.balance - balanceSecond.balance);
  return usersArray;
   
}; 

console.table(sortByAscendingBalance(users));
*/

//================================Задача 43=============================

/* const sortByDescendingFriendCount = users => {
  const usersArray = [...users].sort((friendFirst, friendSecond)=> 
  friendSecond.friends.length - friendFirst.friends.length);
  return usersArray;
};

console.table(sortByDescendingFriendCount(users));
 */

//================================Задача 43=============================

/* const sortByName = users => {
  const usersArray = [...users].sort((firstName, secondName) => 
  firstName.name.localeCompare(secondName.name));
  return usersArray;
};

console.table(sortByName(users)); */

//================================Задача 44=============================
/* 
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;
// Change code below this line

const names = [...books].filter(book => book.rating > MIN_BOOK_RATING)
.sort((firstAuthor, secondAuthor) => 
firstAuthor.author.localeCompare(secondAuthor.author))
.map((authorName) => authorName.author);

console.log(names); */

//================================Задача 46=============================

/* const users = [
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      gender: "male"
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      gender: "female"
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      gender: "male"
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      gender: "female"
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
      isActive: true,
      balance: 3951,
      gender: "male"
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
      isActive: false,
      balance: 1498,
      gender: "male"
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      eyeColor: "brown",
      friends: ["Goldie Gentry", "Briana Decker"],
      isActive: true,
      balance: 2764,
      gender: "female"
    }
  ]
   */
  /* const getNamesSortedByFriendCount = (users) => {
    const usersArray = [...users].sort((friendFirst, friendSecond)=> 
    friendFirst.friends.length - friendSecond.friends.length).
    map((userName) => userName.name);
    return usersArray;
  }; 
  
  console.table(getNamesSortedByFriendCount(users));
   */  
  
  
  //================================Задача 47=============================
  
  /* const getSortedFriends = users => {
    const usersArray = [...users].flatMap((user) => user.friends)
    .filter((user, index, array) => array.indexOf(user) === index)
    .sort((firstFriend, secondFriend) => 
    firstFriend.localeCompare(secondFriend))
    return usersArray;
  };
  console.table(getSortedFriends(users)); */
  
  
  
  
  /* const getTotalBalanceByGender = (users, gender) => {
    const usersArray = [...users].filter((user) =>  user.gender === gender)
    .map((userBalance) => userBalance.balance)
    .reduce((balance, number)=> {
      return balance + number;
    }, 0);
    return usersArray;
  };
  console.table(getTotalBalanceByGender(users, "female")); */
  