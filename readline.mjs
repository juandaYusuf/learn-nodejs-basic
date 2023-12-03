import process from 'process'
import readline from 'readline'

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

input.question("Input Nama : ", (name) => {
  console.info(`Nama anada adalah : ${name}`)
  input.close()
})
