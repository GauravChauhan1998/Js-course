const accountId = 144552
let accountEmail = "gaurav@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"

let accountState;

// accountId = 2   //we cannot change or assign values to a constant variable more than 1. 

accountEmail = "Gc@google.com"
accountPassword = "21234"
accountCity = "jaipur"

console.log(accountId);

/*
    Prefer not to use 'var'
    because of problem in block scope anf functionsal scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])