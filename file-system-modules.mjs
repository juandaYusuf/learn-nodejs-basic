import fsSync from 'fs' // File System synchronous
import fsAsync from 'fs/promises' // File System asynchronous


//! Contoh membaca file secara synchronous (blocking)
console.log('⭕ Read File Synchronous')
const bufferSync = fsSync.readFileSync('./example-for-read-with-fs.txt') // Berjalan secara synchronous (blocking)
console.log(bufferSync.toString())

console.log('\n')

//! Contoh membaca file secara asynchronous (non-blocking)
console.log('⭕ Read File Asynchronous')
const bufferAsync = await fsAsync.readFile('./example-for-read-with-fs.txt')
console.log(bufferAsync.toString())

// ! Contoh menulis file secara asynchronous (non-blocking)
fsAsync.writeFile('temp.txt', 'File ini di buat oleh file system moduls')