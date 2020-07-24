// if (false) {
//     console.log('I am inside if Block')
//     console.log('I am still inside if Block')
// } else if(false) {
//     console.log('I am inside IF IN CAPS Block')

// } else {
//     console.log('NOTICE THIS PART')
// }



// USER CONDITIONS FOR AN EDUCATION WEBSITE

//  var whoIsHere = ''   / INPUT 

//  if (whoIsHere === 'user') {
//      console.log('Greeting message for user')
//      console.log('Allow access to view all Courses')
//  } else if (whoIsHere === 'Teacher') {
//     console.log('Greeting message for Teacher')
//     console.log('Allow access to his Courses')
//  } else {
//     console.log('MESSAGE: please verify your email')
//     console.log('Send user an email for verification')
//  }


// Grade problem Using basic understanding of If Else 

// students Grades : 0 - 10

// 10 - Amazing 
// 5 - Good 
// 3 - Poor
// 0 - Fail 

var studentsGrades = 10;        // Change the number(0-10) to see different outputs

if (studentsGrades === 10 ) {
    console.log('Amazing! Keep it up!');
} else if (studentsGrades >= 5) {
    console.log('Good! Keep Improving');
} else if (studentsGrades >= 4) {
    console.log('Poor! You need to work harder!');
} else if (studentsGrades >= 1) {
    console.log('Very Poor! You can do better!');
} else {
    console.log('Fail! That was Unexpected!');
}
