const firstname = 'Tarapong'
const lastname = 'kongkapun'
const date = new Date()

const great = 'Hello ' + firstname + ' ' + lastname + ', How are you ' + date 
const great2 = `Hello ${firstname + ' ' + lastname}, How are you ${date}`

console.log(great)
console.log(great2)
