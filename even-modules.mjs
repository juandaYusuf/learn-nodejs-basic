import EvenEmitter from 'events'

const emitter = new EvenEmitter()

emitter.addListener("printName", (name) => {
  console.log(`Hallo : ${name}`)
})

emitter.emit('printName', 'yusuf')