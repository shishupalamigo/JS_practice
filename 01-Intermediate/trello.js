const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

// console.log(days[0]);


// days.forEach(function (day, index) {
//  //   console.log(`we work on ${index + 1} -- ${day}`);
// })


// const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// let monthsName = function(month, index) { // the 1st argument is always the element of the array and second arg is always the index value.
//     console.log(`${month} is the month no. ${index + 1} of the year.`);
// }
// months.forEach(monthsName); // any function can be passeed as argument in forEach loop.

// for (let index = 0; index < days.length; index++) {
//     console.log(days[index]);
// }
// 

const myTodo = []

myTodo.push('Buy Bread');
myTodo.push('Record video');
myTodo.push('Go to gym');

// myTodo.forEach(function(todo, i) {
//    console.log(`Your task no. ${i + 1} is: ${todo}`);
// })

for (let i = myTodo.length - 1; i >= 0  ; i--) {
    console.log(`Your task no. ${i + 1} is: ${myTodo[i]}`);
}