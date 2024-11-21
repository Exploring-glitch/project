/* function canVote (age) {
    let s = age>18;
    return s;
}
console.log(canVote(20))

//another process using if else

function canVote (age) {
    if (age>18){
        return true;
    }
    else{
        return false;
    }
}
console.log(canVote(22)) */

//objects 
/* let user1= {
    name:"Sreeja",age:17,gender:"Female"
}
console.log(user1.name); //use this
console.log(user1["name"]); //or this
 */

/* //STRING CONCATINATION
let user = {
    name: "Yash", age:19, gender:"Male"
}
if(user.gender === "Male"){
    console.log("Hi Mr." + user.name + ".Your age is " + user.age)
}
else{
    console.log("Hi Miss " + user.name + ".Your age is " + user.age)
} */



// ARRAY OF OBJECTS
const users = [{
    name: "Sreeja", age: 17, gender: "Female"
}, {
    name: "Yash", age: 19, gender: "Male"
}, {
    name: "Aditi", age: 22, gender: "Female"
}]

function canVote(arr) {
    newarray=[]; //new empty array
    for(let i=0; i<arr.length; i++){
        if(arr[i].gender === "Male" && arr[i].age>18){
            newarray.push(arr[i]);
            return newarray;
        }
    }
}

console.log(canVote(users)); //function calling