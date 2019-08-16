//RANDOM NUMBER GENERATORS

//GENERATING RANDOM FRACTIONS 
randomFraction = () =>{ 
    return Math.random();          //use Math.random function to return random decimal number
     
} 
//console.log(randomFraction()); RESULT: random number greater than 0, less than 1; 

//GENERATE RANDOM WHOLE NUMBERS
let randomNumberBetween0and19 = Math.floor(Math.random()*20); 
        //Math.floor rounds down to nearest whole number. 
        //Math.random()*20 gives random decimal between 0 and 1, multiply by 20, and rounded down to nearest whole number
    randomWholeNum = () => { 
        return Math.floor(Math.random()*10); 

    }; 
    //console.log(randomWholeNum()); returns number between 1-9;  

    //GENERATE RANDOM WHOLE NUMBERS WIHTIN A RANGE(MIN AND MAX); 
    ourRandomRange = (ourMin, ourMax) =>{ 
        return Math.floor(Math.random()*(ourMax-ourMin +1))+ourMin;
    }
//console.log(ourRandomRange(1,9)); //returns random whole number between 1 and 9; 
    ourRandomRange2 = (ourMin, ourMax) =>{ 
        return Math.floor(Math.random()*(ourMax - ourMin + 1))+ourMin; 
    }
    //console.log(ourRandomRange2(5,15)); 

    //USE THE PARSE INT FUNCTION
convertToInteger =(str)=>{ //converts string into integer, returns NaN if cant convert
    return parseInt(str);
}

//console.log('56');  

//USE THE PARSEINT FUNCTION WITH A RADIX
//radix specifies base of number in a string
converttoInteger = (str) =>{ 
    return parseInt(str, 2);
}
//console.log(converttoInteger('10056'))

//USE THE CONDITIONAL (TERNARY) OPERATOR
checkEqual = (a,b) =>{ 
    return a === b ? true : false; // returns true if a ===b, false if a doesnt equal b 
}

//console.log(checkEqual(1,2)); returns false 

//USE MULTIPLE CONDITIONAL (TERNARY) OPERATORS 
//can be nested within eachother
checkSign = (num) =>{ 
    return num > 0 ? "positive" : num < 0 ? 'negative' : "zero"; 
}
//console.log(checkSign(0)); returns 0 ; 

//DIFFERENCE BETWEEN THE 'VAR' AND 'LET' KEYWODS
//let = keeps you from declairing a variable twice even if second use is in function

//COMPARING SCOPES OF VAR AND LET 
//VAR IS DECLARED GLOBALLY OR LOCALLY 
//LET IS LIMITED TO BLOCK SCOPE {} OR FUNCTION ITS DECLARED IN 

//DECLARE A READ-ONLY VARIABLE THE CONST KEY WORD
//CONST CAN NOT BE REASSIGNED, HELPS PREVENT MISTAKES 

//MUTATING AN ARRAY DECLARED WITH CONST
const S = [ 5,6,7,2]; 
editInPlace = () => { 
    'use strict'; 
   // S=[5,6,3]; 
   S[0]=1; 
   S[1]=5; 
   S[2]=7; 
}
editInPlace(); 
//console.log(S); 

//PREVENT OBJECT MUTATION
freezeObj = () => { 
    'use strict'
    const MATH_CONSTANTS = { 
        PI:3.14
    };

    Object.freeze(MATH_CONSTANTS); //freezes constants so that object never changes

    try { 
        MATH_CONSTANTS.PI = 99; 
    }catch (ex) { 
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
} 

//const PI = freezeObj(); 
//console.log(PI);  

//WRITING AN ARROW FUNCTION WITH PARAMETERS
const myConcat = (arr1, arr2) =>
  arr1.concat(arr2);
//console.log(myConcat([1,2],[3,4,5])) result: [ 1, 2, 3, 4, 5 ]

//WRITE HIGHER ORDER ARROW FUNCTIONS
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]; 

const squareList = (arr) => { 
    const squaredIntegers = arr.filter(num => Number.isInteger(num)&& num > 0).map(x => x *x);
    return squaredIntegers;
}; 

const squaredIntegers = squareList(realNumberArray); 
//console.log(squaredIntegers); result [ 16, 1764, 36 ]

//WRITE HIGHER ORDER ARROW FUNCTIONS 
const increment = (function(){ 
    return function increment(number, value =1){ 
        return number + value;
    };
})(); 
//console.log(increment(5,2)); result = 7 becuase increment + value
//console.log(increment(5)); result = 6 becuase value = 1 if not stated

//USE THE REST OPERATOR WITH FUNCTION PARAMETERS; rest operator is '...' 
const sum = (function(){ 
    return function sum (...arg){ //returns sum of arg, 
        return arg.reduce((a,b)=> a + b, 0); 
    };
})(); 
//console.log(sum(1,2,3,));//result is 6 because of sum of x + y + z  

//USE THE SPREAD OPERATOR TO EVALUATE ARRAYS IN-PLACE
//SPREAD OPERATOR EXPANDS/SPREADS OUT ARRAY INTO INDIVIDUAL PARTS
//SPREAD ARRAY INTO INDIVIDUAL MONTHS
const arr3 = ['Jan', 'Feb', 'Mar', 'Apr', 'May']; 
let arr4; 
(function (){ 
    arr4 =[...arr3]; //setting array 4 = to array 3
    arr3[0] = 'potato'; // changing first index item of array 3 to potato
})(); 
//console.log(arr4); result: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May' ]
//console.log(arr3); result: [ 'potato', 'Feb', 'Mar', 'Apr', 'May' ] 


