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
    console.log(ourRandomRange2(5,15)); 




