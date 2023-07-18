// // ES5
// var x = function(x, y) {
//     return x * y;
//  }
 
 // ES6
//  const x = (x, y) => x * y;
//  console.log(x(11,22))
// // console.log()

// function my(x,y){
//     {
//         return x* y
//     }
// }
// console.log(my(22,33))
// console.log(my(100,12))
// console.log(my(45,14))
// const y = function(a,b){
//     return a + b
// }
// const result = y(11,11)
// console.log(result)

// const xy = (c,d) => c+ d 
// console.log(xy(11,22)) 
const frn = [11,2,1,3,4,5,6,7,8]
const fahad = [22,33,44,55,66,77,88,1000]
const all = [...frn,...fahad]
const a = 20
const b = 3000
const c = 200
const d = 100
const max = Math.max(...all)
console.log(max)
class fulname{
    constructor(){
        
        this.school = 'satkania high school'
        this.join =  Date(2012)
    }
}

class totall extends fulname {
    
    constructor(name,age) {
        super()
        this.name = name
        this.age = age
    
    }
    
  }
  const fulname1 = new totall('farhad',2019)
  const fulname2 = new totall('rakib',2019)
  const fulname3 = new totall('osman',2023)

//   const alll = fulname.year()
  console.log(fulname1)
  console.log(fulname2)
  console.log(fulname3)
  

// console.log(alll)
// console.log(fulname1)
// console.log(fulname2)
// console.log(fulname3)
// const bbb = [11,22,33,66,55,44,78]
// const aaa = bbb.forEach(function(aaaa,bbbbbb,aray){
//     console.log(aaaa * 3)
// })
// console.log('hello worl')