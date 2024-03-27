// Unite Six Running:- Object Type Data <===>
        // 1. Array 
        // 2. Object
        // 3. function 
        // 4. map, set, weak map, weak set


// 1. Array Methods =================>


let constructorArray = new Array('hellow everyOne', 'this is constructor Array');
// console.log(constructorArray);

let createArray = ['element', 'element2', 'element3'];
// console.log(createArray);

// 1. arrayName[index]
const fruits = ['apple', 'banana', 'pinaapple', 'jackfruit'];
// console.log(fruits);

// 2.Array.isArray() 
const arry  = Array.isArray(fruits);
// console.log(arry);

// 3. ArrayName instanceof Array;

console.log(fruits instanceof Array);

if(fruits instanceof Array){
    for(let fruit of fruits){
        console.log(fruit);
    }
}  

else{
    console.log('ohh! fruits is not an array');
}

console.log(fruits[2]);
// fruits[10] = 'jambura';
console.log(fruits);

// fruits[5] = 'peyara';
console.log(fruits);

// 4. length
console.log(fruits.length);

// 5. Push  
