// let iAmGlobal = 'someValue' // Global scope

// if (true) {
//     let iAmLocal = 'someMoreValue' // Variable with a local scope
//     // iAmGlobal = 'Superman' // Changing the value of variable
//     console.log(iAmGlobal)
//     console.log(iAmLocal)
// }
// console.log(iAmGlobal) // will output changed value
//console.log(iAmLocal) //will throw an error

// if iAmLocal is decleared Using "var" the above will not throw an error

// var should not be used in a local scope variable 

/* changing the value of a Globally decleared variable  even inside a code block
changes the value globally  */

// Use of let is recommended for declearig variables in modern JavaScript


// Kings Problem
  
 let king = 'Ram' // King of All the kings 

if (true) {
     let king = 'John' // Local king & King of another Smaller king
    console.log(king) // In Absence of John Ram will take over

    if (true) {
       let king = 'Sam' // Local king with smallest teritory
        console.log(king) // In Absence of king = Sam king John will take over
    }
    
}

if (true) {
 console.log("I am the second part : " + king) //  Global King 
}  

// In absence of a lower king Upper King Takes charge 
//  But vice-versa throws an error
/* If a value is decleared without using either Let or var
   it assumes Global Scope */  