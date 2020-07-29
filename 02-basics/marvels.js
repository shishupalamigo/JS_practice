//  // datatype - Array

//  const superHeros = ['Iron Man', 'Capt. America', 'Spiderman', 'Thor']

//  // we can store any type  of data in Arreys
//  // In Arreys counting starts from 0


//  console.log(superHeros);  // will print all the data of the superHeros Arrey

//  console.log(superHeros[0]); // will print the 1st object of the Array i.e Iron Man here

//  console.log(superHeros[2]); // output Spiderman

//  console.log(superHeros[1]); // output Capt. America

//  console.log(superHeros.length); // Will print the number of objects in the given Arrey

//  console.log(superHeros[superHeros.length-1]); // output Thor

//  console.log(`We have ${superHeros.length} super heros`); // Will print We have 4 super heros 
//  // `` can be used to do calculations in a string  



const numbers = ['One', 'Two', 'Three', 'Four', 'Five', 'Six']

// numbers[1] = 'SOMETHING' // Inserts an element at the given position (in this case 2nd) of the Arrey

// console.log(numbers);


//start


// numbers.shift();     // shifts the 1st element in arrey
// console.log(numbers.shift());  // will tell the element it is shifting
// console.log(numbers); 

// numbers.unshift('SOMETHING');  //inserts an element at the start of the array
// console.log(numbers);



//end
// numbers.pop();    // Removes an elements from the End of the Arrey

// console.log("The element to be deleted is: " + numbers.pop());
// // Will remove the tell the item being removed and also remove the the number from thr Arrey  

// console.log(numbers);

// numbers.push('Seven');   // Inserts the element at the end of the Arrey

// console.log(numbers);



//middle

numbers.splice(2, 1, 'SOMETHING'); // Removes the element/elements (in this case 1) from the  position specified(2 here) and inserts the given value(SOMETHING)
console.log(numbers);
