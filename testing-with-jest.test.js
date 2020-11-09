// ASSESSMENT 1: Testing practical questions

// $ yarn add jest

// Practice red-green refactor development
// $ yarn jest


// --------------------1a) Create a test for a function called addThemUp that takes two numbers as arguments and returns the sum.

describe("addThemUp", () =>{
  test("It takes in two numbers as arguments and returns the sum", () => {
    expect(addThemUp(100, 75)).toEqual(175)

  //  expect(addThemUp(input)).toEqual("output")

  })
})


// --------------------1b) See the test fail. THEN write the code to make the test pass.

//Huge help when i relized that i didnt have to name variables first and just had to make a function that would give the answer

const addThemUp = (x, y) =>{
  return x + y
}
// var num1 = 500
// var num2 = 75
// //var num3 = num1 + num2
// //
// const addThemUp = (num1, num2) => {
//    //let num3 = num1 + num2
//    return num1 + num2
// }
 //console.log(adThemUp(100,75))


// --------------------2a) Create a test for a function called triangleArea that takes the base and the height of a triange and returns the area. The area of a triange is the base times the height divided by two.

describe("triangleArea", () =>{
  test("Takes base and height of a triangle and returns the area", () => {
    expect(triangleArea(5, 10)).toEqual(25.0)
  })
})



// --------------------2b) See the test fail. THEN write the code to make the test pass.

//originally wanted to use valirables but it seemed to easy so i posted to slack and Sami was able to help me by telling me that we could directly put values in the test.

// var base = 10
// var height = 30
// var area = (base * height) / 2

const triangleArea = (x, y) => {
  return x * y / 2
}
