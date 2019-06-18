// Array examples; 
//arrays start with brackets
//elements spit with comma, can be any data type;

let ourArray1 = [ "john", 23]; 
let myArray1 =["quincey", 1]; 

//arrays can hold other arrays within them; 

let array1 = [ ["the universe", 43], ["everything", 25]]; 
let array2 = [["bulls", 23], ["kings", 22]]; 
//console.log(array2); result: [ [ 'bulls', 23 ], [ 'kings', 22 ] ] 


//access data with index
let array3 = [50, 60, 70];
let ourdata3 = array3[1]; //console.log(ourdata3) ; result: 60
let ourdata3_1= array3[2]; //console.log(ourdata3_1) result: 70; 
let ourdata3_2 = array3[0]; 

//Modifying array data with indexes
let array4 = [ 30, 40, 50, 70]; 
array4[1]+= 65; //console.log(array4) // answer is [30, 105, 50, 70]; because it adds 40 to 65; 

array4[1] = 55; //console.log(array4) // result: [ 30, 55, 50, 70 ] because it changes 40 to 50; 

//Access multidimensional arrays {arrays in an array} with index 
let array5 = [
            [1, 2 ,3], 
            [4, 5, 6], 
            [7, 8, 9], 
            [ [10, 11, 12],         //array with another array within, and 2 numbers
            13,                    //start of 2 numbers
            14, ]
]

    ourdata5 = array5[0][0]; // how to access a item thats in an array, that is in 
                            // another array full of arrays
                            // first [0] has 0, refers to first array in array5
                            // second [0] refers to first item in array with index 0; 
    //console.log(ourdata5) result: 1; first [] gives first array, second [] is index of array; 

    //ourdata6 = array5[3][0][2]; returns: 12; 

// Manipulating arrays with push(); 
let array6 = [ "Stimpson", "J", "cat", "dog", "carter"]; 
//array6.push(["happy", "joy"]); //push adds to the end of the array; 
//console.log(array6); Result: [ 'Stimpson', 'J', 'cat', 'dog', 'carter', [ 'happy', 'joy' ] ] 


let ourdata6_1 = [ [1,2,3], ["human", "data"]]; 
let key = "smitty"; 
let star = "johnson";  
array6.push(ourdata6_1, key, star); // adds to the end of the arrays

let newObject = array6[5][1]; 

//console.log(array6); result includes array plus star and key in array
//console.log(newObject); [ 'human', 'data' ]

//console.log(array6) 

// Manipulating arrays with pop()
let array7 = ["simpsons", "j", "cat"]; 
let removedFromOurArray = array7.pop(); 

//console.log(removedFromOurArray) result: cat, because pop removes last item in array
//console.log(array7) result: [ 'simpsons', 'j' ], because cat was removed from array 
let array8 = [["john", 23], ["cat", 2]]; 
let removedFromOurArray1_1 = array8.pop(); 
//console.log(removedFromOurArray1_1) [ 'cat', 2 ]
//console.log(array8); because "cat", 2 was poped out [ [ 'john', 23 ] ]

//manipulating arrays with shift 
//removes the first element in the array instead of the final element or pop()
let array9 = [ "stimpson", "j", ["cat"]]; 
let shiftItem = array9.shift(); 
//console.log(shiftItem); //"stimpson" was shifted out of array 
//console.log(array9); // [ 'j', [ 'cat' ] ] is the result of new array; 

//manipulating arrays with unshift(); 
// adds element to the beginning of the array; 

let shifItem2 = array9.unshift("johnson"); 
console.log(array9); //result: [ 'johnson', 'j', [ 'cat' 
//shift() removes first item in array, unshift() puts item at beginning of array.

//nested arrays or arrays within an array. 
let shoppingList = [["cereal", 3], ["milk", 2], ["bananas", 3] ["juice", 2]
                    ["eggs", 12]]; 

                    