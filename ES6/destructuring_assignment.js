const arr = [1, 2];
const a = arr[0]
const b = arr[1]

const[c,d] = arr

console.log(c,d)

const oneTofive = [1,2,3,4,5]
// const[a1,b1,c1] = oneTofive

// console.log(a1,b1,c1)

// const[ , , , ,c1] = oneTofive
// console.log(c1)

const[a1,b1,...rest] = oneTofive
console.log(rest)