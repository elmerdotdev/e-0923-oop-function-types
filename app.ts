// Function declaration
function hello(fullname: string): string {
  return fullname
}

hello('John')

// Anonymous function
const hello2 = function(fullname: string): string {
  return fullname
}

hello2('Joe')

// Arrow function
const hello3 = (fullname: string): string => {
  return fullname
}

hello3('David')

// Void return
function greeting(fullname: string): void {
  console.log(fullname)
}

greeting('Joey')

// Undefined
function printAge(age: number): undefined {
  console.log(age)
  return
}

// Optional return type
// TypeScript will infer the return type
function printLastname(lastname: string): string { // void
  console.log(lastname)
  return lastname
}

// Optional parameters
function birthdayGreeting(name: string, age?: number, birthdate?: string): string {
  if (age) {
    return `Happy birthday ${name}. You are now ${age} years old!`
  } else {
    return `Happy birthday ${name}!`
  }
}

console.log(birthdayGreeting('John'))
console.log(birthdayGreeting('John', 30))
console.log(birthdayGreeting('John', 30, 'December 2000'))

// Rest Parameter
function getTotal(...numbers: number[]): number {
  let sum = 0
  for (let i=0; i < numbers.length; i++) {
    sum += numbers[i]
  }
  return sum
}

console.log(getTotal(1, 2, 3, 4, 5, 6, 7, 8))


function getTotal2(num1: number, num2: number, ...numbers: number[]): number {
  let sum = num1 + num2
  for (let i=0; i < numbers.length; i++) {
    sum += numbers[i]
  }
  return sum
}

console.log(getTotal(1, 2, 3, 4, 5, 6, 7, 8))

// Function Overloading
function getInfo(fullname: string): string
function getInfo(age: number): string
function getInfo(field: string | number): string {
  if (typeof field === 'string') {
    return `I am ${field}.`
  } else {
    return `I am ${field} years old.`
  }
}

console.log(getInfo('John'))