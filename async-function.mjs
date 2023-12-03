function samplePromise(){
  return Promise.resolve('yusuf')
}

const data = await samplePromise()
console.log(data)


/* 
  JIka kita menggunakan file extension '.mjs'
  maka kita bisa secara langsung menggunakan 'await'
  tanpa harus menggunakan async function terlebih dahulu.

  Kenapa demikian karean js modules (.mjs file)
  sudah default menggunakan async function
*/