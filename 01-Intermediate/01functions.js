// functions 

let sayHello = function (name) { // Declearing A function
    console.log(`Greeting Message for ${name}`);
    console.log(`Hey ${name}`);
}
//sayHello('John'); //Calling the function after putting some value in it


let fullNameMaker = function (firstName, lastName) {
    console.log('Welcome here ');
    console.log(`Happy to have you, ${firstName} ${lastName} `);
}

//fullNameMaker('John', 'Doe')

let myAdder = function(num1, num2) {
    let added = num1 + num2
    return added
}
// myAdder(5, 9)
// console.log(myAdder(5, 9)); 

// functions can be called using a veriety of techniques 

let myMultiplier = function(num1, num2) {
//    let product = num1 * num2;
//    return product;            
      return num1 * num2;      // above two lines can be written directly as this line.     
}

let guestUser = function(name = "guest", courseCount = 0) {  // Default Parameters 
    return "Hello " + name + ", and your course count is: " + courseCount;
}
// Default parameters appear only when a function is called without any arguments/parameters.
console.log(guestUser("John", 1));

