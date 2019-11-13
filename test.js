const person = {
    name:'noguchihideyo',
    age: 21,
    gender: 'male',
    "my-key":"aaaa",
    pet:{
        name:"neko",
        color:"brown"
    }
}

console.log(person.name)
console.log(person["my-key"])
console.log(person.pet.name)

const animals=['cat','dog','rabbit']
console.log(animals[0])

const a ={x:1, y:2}
const b =a
b.x=100//bのxに100を代入
console.log(b)
console.log(a)