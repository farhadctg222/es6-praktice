// const  number = [11,22,333,66,44,88,99]
// const aray = number.map(function(element,index,arry){
//     const ab = element* element
//     return ab
// })
// function myfun(element){
//     return element * element
// }
// const array = number.map(myfun)

// const array = number.map(element => element*element)
// console.log(array)
// const foreach = number.forEach(function(element,index,aray){
//     console.log(element)
// })

// const aa = number.filter(cc => cc>50)
// const bbb = number.map((x,y) => {
//     return y + x
// })
// console.log(bbb)

// const student =  [
//     {id: 21, name: 'mohammad farhad'},
//     {id: 31, name: 'rakib hasan'},
//     {id: 20, name: 'solaiman khan'},
//     {id: 70, name: 'sharuk khan'}

// ]
// const total = student.map(s => s.name)
// console.log(total)
// const all = []
// for (let index = 0; index < student.length; index++) {
//     const element = student[index];
//     const ss = element.name
//     all.push(ss)

    
// }
// console.log(all)

function closer(){
    let coundt = 0
    return function(){
     coundt++;
     return coundt
    }
}
const clock = closer()
console.log(clock())
console.log(clock())
console.log(clock())
console.log(clock())
const clock1 = closer()
console.log(clock1())

console.log(clock1())

console.log(clock1())
console.log(clock())


