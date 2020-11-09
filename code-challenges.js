// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// Psuedo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212
//Must diffentiate between different condtions "temperature" so most likely use if statments
const boil = (temp) => {
  if(temp === 212){
    //must make condtion for one equal to
    return "212 is at boiling point"
    //make a greather than statement
  } else if(temp > 212){
    return "350 is above boiling point"
    //else statment should catch all other numbers
  } else {
    return "35 is below boilng point"
  }
}
//need to consol.log for each variable
console.log(boil(temp1))
console.log(boil(temp2))
console.log(boil(temp3))

// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

var myNumbers1 = [3, 7, 0, 6, -9]
//Must create function that multiplies each number in the array by 5
//Must include .length to take in all number of array to mulitply by 5
//must console log with i in brackets to get it to get actual numbers
  for(let i = 0; i < myNumbers1.length; i++){
    console.log(myNumbers1[i] * 5);
  }

// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]


//Use .map to access the values within the array and mulitpy them by 5
var myNumbers2 = [8, -7, 0, 6, 2].map(value =>{
  return value * 5
})
console.log(myNumbers2);



// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"
//want to use .split to turn the strings into arrays
//want to use .filter to filter out certain arrays and then combine them into a single array
//have to rule out lower case and uppercase for all vowels since I is capital
const vowelGone = (string) => {
  let spliter = string.split("")
  let filtered = spliter.filter(value => {
    return value !== "a" && value !== "e" && value !== "i" && value !== "o" && value !== "u" && value !== "y" && value !== "A" && value !== "E" && value !== "I" && value !== "O" && value !== "U" && value !== "Y"
  })
  return filtered.join("")
}
console.log(vowelGone(stringWithVowels1));
console.log(vowelGone(stringWithVowels2));


// --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user that the variable passed into the vowel removal function is not a string.
// Use the test variables provided below. Expected output: "true is not a string" "42 is not a string"

var notAString1 = true
var notAString2 = 42

const notAString = (value) =>{
  //create conditonal staments in order to identify string
  if(typeof value === "string"){
    //.split to turn stirng into array
    let spliter = string.split("")
    //.filter to get rid of vowels and then return .join to form arrray
    let filtered = spliter.filter(value => {
      return value !== "a" && value !== "e" && value !== "i" && value !== "o" && value !== "u" && value !== "y" && value !== "A" && value !== "E" && value !== "I" && value !== "O" && value !== "U" && value !== "Y"
    })
    return filtered.join("")
    //else statment to catch anything that is not a string and return input and message
  } else{
    return `${value} is not a string`
  }
}
console.log(notAString(notAString1));
console.log(notAString(notAString2));



// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]


//Put objects into individual lines
//use .filter to call only

var toonimals = [
{ name: "Itchy", animal: "mouse" },
{ name: "Stimpy", animal: "cat" },
{ name: "Daffy", animal: "duck" },
{ name: "Scratchy", animal: "cat" },
{ name: "Ren", animal: "dog" },
{ name: "Felix", animal: "cat" }]

//use .filter to call only cat values
const catCatcher = (array) => {
  return array.filter(toonimal =>{
return toonimal.animal === "cat"
  })
}

console.log(catCatcher(toonimals));





// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"


// var toonimals = [
// { name: "Itchy", animal: "mouse" },
// { name: "Stimpy", animal: "cat" },
// { name: "Daffy", animal: "duck" },
// { name: "Scratchy", animal: "cat" },
// { name: "Ren", animal: "dog" },
// { name: "Felix", animal: "cat" }]

//gonna be simililar to the one before this
//prety much same function

const noCat = (array) =>{
  let noneCat = array.filter(toonimal =>{
    return toonimal.animal !== "cat"
  })
  //want to return names of those in array
  //name is a a key and can use dot notatin to get only value returned
  let names = noneCat.map(animal =>{
    return  animal.name
  })
  return names
}
console.log(noCat(toonimals));



// biggest help for this one was realizing that you can use let staments to put functions within fuctions before closing it out with final return statment.  
