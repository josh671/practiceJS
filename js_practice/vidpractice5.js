//RETURNING BOOLEAN VALUES FROM FUNCTIONS
//without USING IF STATEMENTS 
isLess = (a, b) =>{ 
 return a < b       //returns true if a is less than b
} 
//console.log(isLess(10, 15)) 

//RETURNING EARLY PATTERN FROM FUNCTIONS
// RETURNS UNDEFINED BECAUSE A OR B < 0 
abTest = (a, b) => { 
    if (a < 0 || b < 0){ 
        return undefined; 
    }
    return Math.round(Math.pow(Math.sqrt(a)+ Math.sqrt (b),2)); 
} 

//console.log(abTest(-2,2 )) returns undefined 
/////////////////////////////////////////////////////////////////////
//COUNTING CARDS
//LOW CARD- COUNT GOES UP , HIGH CARD - COUNT GOES DOWN 
// MID CARD - COUNT STAYS; 
//POSITIVE COUNT - PLAYER BETS HIGH, 
//LOW COUNT- PLAYER BETS LOW; 
let count = 0; 

cc = (card) =>{  
    switch (card) { 
        case 2: 
        case 3: 
        case 4: 
        case 5: 
        case 6: 
            count++; //takes the count value and adds 1 to it using ++ sign;
        break 
        case 10: 
        case "a": 
        case "j": 
        case "q": 
        case "k": 
            count--; // subtracts 1 from count using -- sign; 
        break;
    }
    let holdbet = "hold"; 
    if (count > 0 ){ 
         holdbet = "bet";
    }
    return count + "" + holdbet; 
} 

cc(2); cc(3); cc(7); cc('k'); cc('a'); 
//console.log(cc(10)) tells you to hold because 0 -1 
1.47.23