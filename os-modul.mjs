import os from 'os'

console.log("⭕ OS Arsitektur")
console.log("-> ",os.arch())
console.log("\n")

console.log("⭕ OS Platform")
console.log("-> ",os.platform())
console.log("\n")

console.log("⭕ Uptime")
console.log("-> ",os.uptime())
console.log("\n")

console.log("⭕ Host Name")
console.log("-> ",os.hostname())
console.log("\n")

console.log("⭕ Home Directory")
console.log("-> ",os.homedir())
console.log("\n")

console.log("⭕ Total Memory")
console.log("-> ",os.totalmem())
console.log("\n")

console.log("⭕ Free Memory")
console.log("-> ",os.freemem())
console.log("\n")

console.log("⭕ CPUs")
console.table(os.cpus())
console.log("\n")


console.log("⭕ Network interfaces")
console.table(os.networkInterfaces())
console.log("\n")

