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
myAdder(5, 9)
console.log(myAdder(5, 9)); 

// functions can be called using a veriety of techniques 