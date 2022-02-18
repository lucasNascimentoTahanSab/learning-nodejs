const ProgressBar = require('progress') // Module for showing progress bar on console.

const x = 'x'
const y = 'y'
console.log(x, y)

console.log('My %s has %d ears', 'cat', 2)

// Showing console.count() method for examplifying how to count string display times.
const oranges = ['orange', 'orange']
const apples = ['just one apple']

// Counts 2 for the oranges contained in the "oranges" array. 
oranges.forEach(fruit => {
  console.count(fruit)
})

// Counts 2 for the apples contained in the "apples" array. 
apples.forEach(fruit => {
  console.count(fruit)
})

// Reset display times of the "orange" keyword.
console.countReset('orange')

// Counts fruit display times of the "orange" keyword from 1 to 2, as it was reset.
oranges.forEach(fruit => {
  console.count(fruit)
})

// Showing console.trace() method for displaying the code stack trace until this point.
const function2 = () => console.trace()
const function1 = () => function2()
function1()

// Showing console.time() and console.timeEnd() for displaying the time spent on the measureDoingSomething() execution.
const doSomething = () => console.log('test')
const measureDoingSomething = () => {
  console.time('doSomething()')
  //do something, and measure the time it takes
  doSomething()
  console.timeEnd('doSomething()')
}
measureDoingSomething()

// Showing example of how to color console.log() text.
// This can be done without the excessive color codes using the "chalk" module, but I can't require it.
console.log('\x1b[33m%s\x1b[0m', 'hi!')

// Using the "progress" module for displaying the progress bar on the console (in 10 parts).
const bar = new ProgressBar(':bar', { total: 10 })
const timer = setInterval(() => {
  bar.tick()
  if (bar.complete) {
    clearInterval(timer)
  }
}, 100)