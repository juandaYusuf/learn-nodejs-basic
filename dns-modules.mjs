import dns from 'dns/promises'

console.log("⭕ DNS Lookup")
const addr = await dns.lookup('www.unikom.ac.id')
console.log('addres: ', addr.address)
console.log('ip version: ', addr.family)
