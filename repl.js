const repl = require('repl') // Importing repl module for handling console requisitions
const prompt = require("prompt") // Importing prompt module for handling communications with repl

const local = repl.start(prompt) // Starts the repl console, registering everything at the prompt constant
local.on('exit', () => console.log('Bye bye REPL!!!'))

prompt.get(['name'], (err, res) => {
  console.log(`Your name is ${res.name}`)
  local.close()
})
