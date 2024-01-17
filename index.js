// Write your solution in this file!
var customerName = "bob";
function upperCaseCustomerName(){
    if (customerName) {
        customerName = customerName.toUpperCase();
        console.log(customerName);
    } else {
        console.log("Customer name is not defined.");
    }
}
function setBestCustomer() {
    bestCustomer = 'not bob';
    console.log(bestCustomer);
}
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
    console.log(bestCustomer);
}
const leastFavoriteCustomer = "Sylvia";
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "bob";
}
customerName();
upperCaseCustomerName();
setBestCustomer();
overwriteBestCustomer();
changeLeastFavoriteCustomer();