
let userName = prompt("who is there?" );
if (userName == "admin") {
    let pass = prompt("password?" );

if (pass == 'TheMaster') {
    alert( 'Welcome!' );
}
else if (pass === '' || pass === null) {
    alert("Canceled");
}
else {
    alert("Wrong Password, Try Again!");
    let pass = prompt("password?" );
    if (pass == 'TheMaster') {
    alert( 'Welcome!' );
    }
    else if (pass === '' || pass === null) {
    alert("Canceled");

    }
    }
}
 else if (userName === "" || userName === null ) {
    alert("Canceled");
}
else {
    alert("I don't know You!");
}
