require('dotenv/config')

// You can, as well, access node arguments passed before executing through process.argv.
process.argv.splice(2, process.argv.length).forEach((val, index) => {
  const attribute = val.split('=')
  console.log(`${index}: your ${attribute[0]} is ${attribute[1]}`)
})

// Or you can you the minimist library to parse the arguments into an object.
const args = require('minimist')(process.argv.slice(2))

for (const attribute in args) console.log(`Your ${attribute} is ${args[attribute]}`);
