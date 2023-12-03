function samplePromise () {
  return Promise.resolve('yusuf')
}

// ! Contoh yang error
/*

const errorExample = await samplePromise()
console.log(errorExample)

*/

// ================================================

// * Conoh yang benar
const successExample = async () => {
  const data = await samplePromise()

  console.log(data)
}

successExample()


/*
  Jika kita tidak mau menggunakan async function seperti 'Contoh yang benar'
  maka kita harus membuat file program kita menggunakan extension '.mjs'
  apabila kita maksa menggunakan extension '.js'
  maka kita harus membuat async function secara manual.

  Jika kita menggunakan file extension '.mjs'
  maka kita bisa menjalankan pada 'Contoh yang error'
*/