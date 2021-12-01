//=================================Задача 1==============================

/* const apartment = {
  imgUrl:"https://via.placeholder.com/640x480",
  descr:"Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
}

console.log(apartment) */

//=================================Задача 2==============================
/* 
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com"
  }
};

console.log(apartment); */

//=================================Задача 3==============================

/* const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

// Change code below this line
const aptRating = apartment.rating;
const aptDescr = apartment.descr;
const aptPrice = apartment.price;
const aptTags = apartment.tags;
// Change code above this line

console.log(aptTags) */

//=================================Задача 4==============================
/* const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Change code below this line
const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[2];
// Change code above this line

console.log(ownerName);
console.log(ownerPhone);
console.log(ownerEmail);
console.log(numberOfTags);
console.log(firstTag);
console.log(lastTag); 
*/

//=================================Задача 5==============================
/* 
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

// Change code below this line
const aptRating = apartment["rating"];
const aptDescr = apartment["descr"];
const aptPrice = apartment["price"];
const aptTags = apartment["tags"];
// Change code above this line

 */

//=================================Задача 6==============================
/* const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Change code below this line

apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = "Henry Sibola";
apartment.tags.push("trusted");

console.log(apartment.tags)
 */

//=================================Задача 7==============================

/* const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};
apartment.area = 60;
apartment.rooms = 3;
apartment.location = {
  country: "Jamaica",
  city: "Kingston",
}
console.log(apartment) */

//=================================Задача 8==============================
/* const name = "Repair Droid";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = ["on sale", "trending", "best buy"];

const product = {
  // Change code below this line
  name,
  price,
  image,
  tags
  // Change code above this line
};

console.log(product.price); */

//=================================Задача 9==============================
/* const emailInputName = "email";
const passwordInputName = "password";
console.log(emailInputName);

const credentials = {
  // Change code below this line
  [emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]: "jqueryismyjam"
  // Change code above this line
};
console.log(credentials) */

//================================Задача 10=============================

/* const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = []; 
// Change code below this line
for(key in apartment) {
   keys.push(key);
  values.push(apartment[key]);
}

console.log(keys);
console.log(values); */

//================================Задача 11=============================
/* const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Change code below this line
  
if(apartment.hasOwnProperty(key)) {
  keys.push(key);
  values.push(apartment[key]);
}
  // Change code above this line
}
console.log(keys);
console.log(values); */

//================================Задача 12=============================

/* function countProps(object) {
  let propCount = 0;
  // Change code below this line
for (let values in object) {
  if(object.hasOwnProperty(values)) {
    propCount += 1
  }
}
  // Change code above this line
  return propCount;
}

console.log(countProps({}));
console.log(countProps({ name: "Mango", age: 2 }));  // 2 
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); //3 
*/

//================================Задача 13=============================

/* const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
// Change code below this line
const keys = Object.keys(apartment);
for (const key of keys) {
   values.push(apartment[key])
}
console.log(keys);
console.log(values)
 */

//================================Задача 14=============================

/* function countProps(object) {
  // Change code below this line
  let propCount = Object.keys(object);
  return propCount.length
  
  // Change code above this line
}

console.log(countProps({}));
console.log(countProps({ name: "Mango", age: 2 }));  // 2 
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); //3  */

//================================Задача 15=============================

/* const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
// Change code below this line
const keys = Object.keys(apartment);
const values =  Object.values(apartment);
console.log(keys)
console.log(values) */

//================================Задача 16=============================

/* function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
const salary = Object.values(salaries)
for (const item of salary) { 
  totalSalary += item 
}
  // Change code above this line
  return totalSalary;
}

console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }))//) // 330
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })) */

//================================Задача 17=============================

/* const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line
for (const color of colors) {
  hexColors.push(color.hex)
  rgbColors.push(color.rgb)

}

console.log(hexColors);
console.log(rgbColors); */

//================================Задача 18=============================
/* const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
 
   for (const product of products) {
      if(product.name === productName)
      return product.price
  } 
    return null 
}
console.log(getProductPrice("Grip")) */

//================================Задача 19=============================

/* const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  const propKeys = [];
  for(const product of products) {
    for(const key of Object.keys(product)) {
      if(key === propName) {
        propKeys.push(product[key])
      }
    }

  }
  return propKeys; 
}
console.log(getAllPropValues("name"));
console.log(getAllPropValues("quantity")); 
console.log(getAllPropValues("price"));
console.log(getAllPropValues("category")); */

//================================Задача 20=============================

/* const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
  for(const product of products) {
    if(product.name === productName)
    return product.price * product.quantity;
  }
return 0 

  // Пиши код выше этой строки
}
console.log(calculateTotalPrice("Blaster")) // 0
console.log(calculateTotalPrice("Radar")) // 5200
console.log(calculateTotalPrice("Droid")) // 2800
console.log(calculateTotalPrice("Grip")) // 10800
console.log(calculateTotalPrice("Scanner")) // 8100 */

//================================Задача 21=============================

/* const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const {yesterday, today, tomorrow} = highTemperatures;


// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;
console.log(yesterday);
console.log(today);
console.log(tomorrow);
console.log(meanTemperature); */


//================================Задача 22=============================
/* 
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const {yesterday, today, tomorrow, icon = 
  "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;
console.log(yesterday);
console.log(today);
console.log(tomorrow);
console.log(meanTemperature); 
console.log(icon);
 */

//================================Задача 23=============================

/* const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const {yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = 
  "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;

// Change code above this line
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
console.log(highYesterday);
console.log(highToday);
console.log(highTomorrow);
console.log(meanTemperature); 
console.log(highIcon); */

//================================Задача 24=============================

/* const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (const color of colors) {
  const {hex, rgb} = color
  hexColors.push(hex);
  rgbColors.push(rgb);
}


console.log(hexColors)
console.log(rgbColors) */

//================================Задача 25=============================

/* const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Change code below this line

const {
  today: {low: lowToday, high: highToday, icon: todayIcon = 
"https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"}, 
tomorrow: {low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = 
    "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"}
  } = forecast;

console.log(highToday);
console.log(lowToday) //today.low;
console.log(todayIcon) //today.icon;

console.log(highTomorrow) //tomorrow.high;
console.log(lowTomorrow) //tomorrow.low;
console.log(tomorrowIcon) //tomorrow.icon; */

//================================Задача 26=============================

// Change code below this line
/* function calculateMeanTemperature(forecast) {
const {today: {low: todayLow, high: todayHigh}, 
  tomorrow: {low: tomorrowLow, high: tomorrowHigh} }  = forecast; 
 

  // Change code above this line
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;

}

console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, 
  tomorrow: {low: 25, high: 29}}));
console.log(calculateMeanTemperature({ today: {low: 37, high: 40}, 
  tomorrow: {low: 33, high: 38} })); */

  //================================Задача 27=============================

/*   const scores = [89, 64, 42, 17, 93, 51, 26];
// Change code below this line
const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);

console.log(bestScore);
console.log(worstScore); */

  //================================Задача 28=============================

/* const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Change code below this line
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);

console.log(allScores);
console.log(bestScore);
console.log(worstScore); */

  //================================Задача 29=============================

/* const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Change code below this line
const finalSettings = {...defaultSettings, ...overrideSettings};
console.log(finalSettings) */

  //================================Задача 30=============================

/* function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  let dataObject = {
    completed: false,
    category: "General",
    priority: "Normal",
  }
 
  const newData = {...dataObject, ...data}
  return newData
}


console.log(makeTask({}))
 //{ category: "General", priority: "Normal", completed: false }
 console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" })) 
//{ category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
console.log(makeTask({ category: "Finance", text: "Take interest" }))
 //{ category: "Finance", priority: "Normal", text: "Take interest", completed: false }
console.log(makeTask({ priority: "Low", text: "Choose shampoo" })) 
//{ category: "General", priority: "Low", text: "Choose shampoo", completed: false }
console.log(makeTask({ text: "Buy bread" })) 
//{ category: "General", priority: "Normal", text: "Buy bread", completed: false }  */

  //================================Задача 31=============================
/* // Change code below this line
function add(...args) {
  let sumArgs = 0;
  for (let arg of args) {
    sumArgs += arg;
  
  }
  return sumArgs;
  // Change code above this line
}
  
 
console.log(add(15, 27)) //42
console.log(add(12, 4, 11, 48)) //75
console.log(add(32, 6, 13, 19, 8)) //78
console.log(add(74, 11, 62, 46, 12, 36)) //241  */

  //================================Задача 32=============================

/* // Change code below this line
function addOverNum(firstNumber, ...args) {
  let total = 0;

  for (const arg of args) {
    if(firstNumber < arg) {
    total += arg;
  }
}

  return total;
  // Change code above this line
}

console.log(addOverNum(50, 15, 27)) // 0
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)) // 71
console.log(addOverNum(15, 32, 6, 13, 19, 8)) // 51
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)) // 218 */

//================================Задача 33=============================
/* 
// Change code below this line
function findMatches(firstArray, ...args) {
  const matches = []; // Don't change this line
  for (const arg of args) {
    for (const arr of firstArray) {
      if (arg === arr) {
        matches.push(arr)
      }
    }   
  }
  // Change code above this line
  return matches;
}


console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)) // [1, 2]
console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)) // [17, 89, 2]
console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41)) // [24, 9, 41]
console.log(findMatches([63, 11, 8, 29], 4, 7, 16)) // []
 */


//================================Задача 34=============================

/* const bookShelf = {
  // Change code below this line
  books: ["The last kingdom", "The guardian of dreams"],
  getBooks() {
    return "Returning all books";
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  removeBook(bookName) {
    let str = `Deleting book ${bookName}`; 
    return str;
  },
  updateBook(oldName, newName) {
    return `Updating book ${oldName} to ${newName}`;
  }
  // Change code above this line
};

console.log(bookShelf.updateBook("Sands of dune", "Dune")) */

//================================Задача 35=============================

/* const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {

  const bookIndex = this.books.indexOf(oldName);
  this.books[bookIndex] = newName;
  }
};
//bookShelf.updateBook("Haze", "Dungeon chronicles");
bookShelf.updateBook("The last kingdom", "Dune")
console.log(bookShelf)
 */

//================================Задача 36=============================
/* const atTheOldToad = {
  // Change code below this line
	potions: [],


  // Change code above this line
};
 console.log(atTheOldToad) */

 //================================Задача 37=============================

/*  const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  // Change code below this line
  getPotions () {
    return atTheOldToad.potions;
  }
  
  // Change code above this line
};
atTheOldToad.getPotions(); */

 //================================Задача 38=============================

/* 
 const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  addPotion(potionName) {
    // Change code below this line
    this.potions.push(potionName)
    return atTheOldToad.potions;
    // Change code above this line
  },
};
console.log(atTheOldToad.potions)
atTheOldToad.addPotion("Invisibility")
console.log(atTheOldToad.potions)

//["Speed potion", "Dragon breath", "Stone skin", "Invisibility"]
atTheOldToad.addPotion("Power potion")
console.log(atTheOldToad.potions)
//["Speed potion", "Dragon breath", "Stone skin", "Invisibility", "Power potion"] */


 //================================Задача 39=============================
/*  const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    // Change code below this line
    const potionIndex = this.potions.indexOf(potionName);
    this.potions.splice(potionIndex, 1);
    return atTheOldToad.potions;

    // Change code above this line
  },
};

console.log(atTheOldToad.potions)
console.log(atTheOldToad.removePotion("Dragon breath"));
console.log(atTheOldToad.removePotion("Speed potion")); */


 //================================Задача 40=============================

/*  const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  updatePotionName(oldName, newName) {
    // Change code below this line
    const potionIndex = this.potions.indexOf(oldName);
    this.potions[potionIndex] = newName;
    return atTheOldToad.potions;

    // Change code above this line
  },
};
console.log(atTheOldToad.potions)
console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"))
console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility"))
 */

 //================================Задача 41=============================
/* 
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    const newPotinName = newPotion.name
    for (const potion of this.potions) {
      if(potion.name === newPotion.name) {      
        return `Error! Potion ${newPotinName} is already in your inventory!`;
      }       
    }
    this.potions.push(newPotion); 
    return atTheOldToad.potions;
  },
  removePotion(potionName) {
    
    for (const potion of this.potions) { 
       
      if(potion.name === potionName) {
      this.potions.splice(this.potions.indexOf(potion), 1);
      return atTheOldToad.potions;
      }
    }
     return `Potion ${potionName} is not in inventory!`;
  },
  updatePotionName(oldName, newName) {
    for (const potion of this.potions){
   
      if(potion.name === oldName) {
        potion.name = newName;
        return this.potions

      }
    }


  },
  // Change code above this line
};

//console.log(atTheOldToad.potions)
//console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }))
//console.log(atTheOldToad.removePotion("Dragon breath"));
//console.log(atTheOldToad.removePotion("Speed potion"));
console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth")); */

