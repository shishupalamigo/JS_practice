const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

// console.log(days[0]);


days.forEach(function (day, index) {
 //   console.log(`we work on ${index + 1} -- ${day}`);
})


const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

let monthsName = function(month, index) { // the 1st argument is always the element of the array and second arg is always the index value.
    console.log(`${month} is the month no. ${index + 1} of the year.`);
}
months.forEach(monthsName); // any function can be passeed as argument in forEach loop.

