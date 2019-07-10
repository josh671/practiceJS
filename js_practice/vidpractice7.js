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
2.37.14