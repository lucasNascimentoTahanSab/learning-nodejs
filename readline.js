require('dotenv/config') // Using process variable to manipulate stdin and stdout.

// Through "readline" module its possible to make the NodeJS app interactive.
// The input and output attributes are used to access the standar input and output environment.
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question('What is your name? ', name => {
  console.log(`Hi, ${name}!`)
  readline.close()
})

// Or you can use the inquirer to ask multiple questios one after the other, making it possible to select the input type as well.
const inquirer = require('inquirer')

var questions = [
  {
    type: 'input',
    name: 'name',
    message: "What's your name?"
  }
]

inquirer.prompt(questions).then(answers => {
  console.log(`Hi ${answers['name']}!`)
})
