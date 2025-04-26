//  function add  (a, b) {
//     // Function to add two numbers
// //         return a + b;
// //     }
// //     console.log(add(2, 3)); // Output: 5

// function calculateCartPrice(value1,value2,value3, ...num1){
//     // Function to calculate the total price of i
//     return num1;

// }
// console.log(calculateCartPrice(100,243,3253,5324,5344)); // Output: 100

 const user = {
    name: "John",
    email: "armankhan@gmail.com",
    isLoggedIn: false
 }
 function loginUser(user){
    // Function to log in a user
    console.log(`User ${user.name} logged in`);
    user.isLoggedIn = true;
    return user;
 }
    console.log(loginUser(user)); // Output: User John logged in
