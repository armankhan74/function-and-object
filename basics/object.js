
const mysym = Symbol("key1");
const myObject = {
    name: "John",
    age: 30,
    city: "New York",
    email: "john@gmail.com",
    [mysym]: "key2"
}

console.log(myObject["name"]);
// console.log(myObject[mysym]);
// myObject.email = "john@google.com";
// // Object.freeze(myObject);
// myObject.email = "john@microsoft.com";
// console.log(myObject.email);

myObject.greeting = function(){
    console.log(`Hello, world!, ${this.name}`);
}
console.log(myObject.greeting());

const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "a", 4: "b"}

const obj3 = {...obj1, ...obj2}
console.log(obj3);

// const obj3 = Object.assign({}, obj1, obj2)
const obj4 = {...obj1, ...obj2}
console.log(obj3);



const user = {
    name: "John",
    email: "john@gmail.com",
    isLoggedIn: false
}

const {email} = user;
console.log(email);

const {name: username} = user;
// console.log(username);
//  destructuring with function

const navbar = ({company}) =>{
    return 
    <h1>Welcome to ${company} page</h1>
    
};
console.log(navbar({company: "Google"}));

const users = {
    name: "John",
    email: "john@gmail.com",
    isLoggedIn: false
}
function handleUser(anyobject){
    console.log(`Username is ${anyobject.name} and email is ${anyobject.email}`);
}
 handleUser({
    name:"arman",
    email:"armankhan@gmail.com",
});

const myArray = [1,2,3,4,5];

function findvalue(getvalue){
    return getvalue[2];
}

console.log(findvalue(myArray));




















