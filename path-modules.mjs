import path from 'path'


const file = 'example/file/module/index.html'

console.log("⭕ Directory Name")
console.log("-> ",path.dirname(file))
console.log("\n")

console.log("⭕ File Name")
console.log("-> ",path.basename(file))
console.log("\n")

console.log("⭕ Extension Name")
console.log("-> ",path.extname(file))
console.log("\n")


/*
  Digunakan untuk mengakses path/direktori dan informasi file
*/

