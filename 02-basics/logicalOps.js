// && - AND operator - Both sides needs to be true
// || - OR operator -  One side needs to be  true


let isVerified = false
let isLoggedIn = false
let hasPaymentToken = false
let isGuest = true


if (isVerified && isLoggedIn && hasPaymentToken) {
    console.log ('Greeting message to user')
    console.log ('Grant access to paid courses')
} else if (isVerified || isGuest) {
    console.log('Allow free preview')
} else {
    console.log('Message: please contact admin')
}
