/*
  Dengan keyword 'debugger' kita bisa menambahkan breakpoint
  kemudian jalankan program dalam mode debug dengan mengetikan 'node inspect namaprogram.mjs/js'
*/

function calcSquareArea(length, width) {
  debugger
  const calc = length * width
  debugger
  const result = `Panjang peregi : ${length}\nLebar persegi : ${width}\nLuas persegi => ${calc}`
  return result
}

const square = calcSquareArea(10, 5)
debugger
console.log(square)