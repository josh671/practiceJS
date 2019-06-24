//writing reusable code with functions
//functions allows for reusable code

function ourReusableFunction(){ 
    console.log("heyya, World"); 
}

//  ourReusableFunction();         //shows heyya world in console because function is being run.

function newFunction () { 
console.log("hi world")
}; 

//  newFunction();                //shows hi world in console.


//passing values to functions with arguments
//Paramaters are variables that act as placeholders for values that are going 
// to be inputed by the user, to the function. 

ourFunction1 = (a,b) => { 
    console.log(a-b)

}; 
//ourFunction1(5,3); //result is 2; 

ourFunction2 = (a,b) => { 
    console.log(a + b ); 
} 
//ourFunction2(5, 5); //result is 10;  

//GLOBAL SCOPE AND FUNCTIONS 
//scope: refers to visibility of variables
//Global scope: variables found outside of a function block; can be seen everywhere in code; 

let myGlobal = 9; 

function1 = () => { 
  oopsGlobal = 5; 

}; 

function2 = () => { 
    var output = ""; 
    if (typeof myGlobal != "undefined"){ 
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefinded") { 
        output += "oopsGlobal: " + oopsGlobal;
    }
console.log(output); 

} 

//function1(); 
//function2(); 

//Local Scope and Functions 
//local scope means they are only visible within the function; 

function myLocalScope() {
    var newVar = 5; //newVar is only visible within the function;
    console.log(newVar);
};  
//myLocalScope(); //result is 5;

//console.log(newVar); //RESULT IS UNDEFINDED, because newVar is in local scope of myLocalScope(); 
                        // computer only nows what it is in the myLocalScope(); 

//Local vs global scope in functions
//possible to have local and global variable with same name. 
//local variable takes precident within the function 


let outerWear = "t-shirt"; 
outfit = () => { 
    var outerWear = "sweater";
    return outerWear;
} 

//console.log(outfit()); result: is "sweater", because outerWear is stated locally within function
//console.log(outerWear); result is "t-shirt", because it is stated globally out of the function 

//Return a value from a function with return.
function3 = (num) => { 
    return num -7; 
} 

//console.log(function3(10)); //result is 3; num is passed in () as a paramater
                            // console.log(function(10)); returns 10-7; 


//Understanding undefined value retruned from a function
//if RETURN VALUE is not specified. return value is undefined
let sum4 = 0; 
addthree = () =>{ 
    sum += 3; 
} 
addfive=()=>{ 
    sum += 5; 
} 
//console.log(addfive()); returns nothing because functions have not declared a RETURN


//Assignment with a return value 
let changed4 = 0; 

function4 = (num4) => { 
return (num4 + 5)/ 3; 
} 
changed4 = function4(10); 
//console.log(changed); returns 3 because changed was turned into (num4 + 5)/ 3; 

let changed4_1 = 10; 

function4_1 = (num4_1) =>{ 
    return (num4_1 *= 4)/8;
} 
changed4_1 = function4_1(20); 
//console.log(changed4_1); result: 4*20/8 = 10; 

//stand in line 
//que is abstract data structure where items are kept in order
//new items added to back of q, old start at beginning
//JSON.stringify : way to turn array into string that can be printed onto a screen 

nextInLine = (arr, item) => { 
    arr.push(item);
    return arr.shift() ;
}; 

let nextInLineArray = [1, 2, 3, 4, 5, ]; 

//console.log("before " + JSON.stringify(nextInLineArray));   result: before [1,2,3,4,5], before it gets shifted out
//console.log(nextInLine(nextInLineArray, 6)); result : 1, because that is what shift is removing.
//console.log("after " + JSON.stringify(nextInLineArray)); result: after [2,3,4,5,6], after 1 is shifted out. 

//Boolean values are only true(on) or false(off); 
welocomeToBooleans = () => { 
    return false;
}; 
//console.log(welocomeToBooleans(7)); returns: false; 

