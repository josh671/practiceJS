//ELSE STATEMENTS 
    //ELSE statement allows alternate block of code to be ran if first block is not true; 

    testElse = (val) => { 
        if (val < 5){ 
            return "smaller than 5";
        }else { 
            return "larger than 5";
        }
    }
    //console.log(testElse(10))


    // ELSE IF STATEMENTS 
    testElseIf = (val) =>{ 
        if (val > 10){ 
            return "greater than 10"; 
        }else if (val < 5) { 
            return "smaller than 5"; 
        }else { 
            return "between 5 and 10"; 
        }
    } 

  // console.log(testElseIf(4)) 

//LOGICAL ORDER IN IF STATEMENTS
testOrder = (val) =>{ 
    if (val <5){ 
        return "Tiny"; 
    }else if(val<10){ 
        return "small";
    }else if(val <15){ 
        return "medium"; 
    }else if(val<20){ 
        return "large"; 
    }else if(val >=20){ 
        return "huge"; 
        }
    }
//console.log(testOrder(16)); 

//GOLF CODE 
let names = [ "Hole-in-one", "Eagle", "Birdie","Par", "Bogey", "Double Bogey", "Go Home"]; 
golfScore = (par, strokes) =>{ 
    if(strokes == 1){ 
        return names[0];
    }else if (strokes <= par - 2){ 
        return names[1];
    }else if(strokes == par - 1){
        return names[2];
    }else if (strokes == par){ 
        return names[3];
    }else if (strokes == par + 1){ 
        return names[4];
    }else if (strokes == par + 2){ 
        return names[5];
    }else if(strokes>= par + 3){
         return names[6];
    }
}
//console.log (golfScore(5, 8))

//SWITCH STATEMENTS 1.32.16
//Tests value and has many case statements that tests other possible values
caseInSwitch = (val) =>{ 
    let answer = ""; 
    switch(val){ 
        case 1:  //if the case of val is 1 
            answer = "alpha";
        break;
        case 2:  //if the case of val is 2 
            answer = "beta" 
        break; 
        case 3: 
            answer = "charlie"; 
        break; 
        case 4: 
            answer = "delta"; 
        break; 

    }
    return answer;
}

//console.log(caseInSwitch(4)); 

//DEFAULT OPTION IN SWITCH STATEMENTS
//default is like the else statement in case/break statements 
switchOfStuff = (val) => { 
    let answer = ""; 
    switch(val){
        case "a": 
            answer = "apple"; 
        break; 
        case "b": 
            answer ="bird"; 
        break; 
        case "c": 
            answer = "cat"; 
        break; 
        default: 
            answer= "stuff"; // returns stuff everytime a,b,c is not passed in
        break; 
    }
    return answer;
}  

//console.log(switchOfStuff(1)); //returns stuff 
//console.log(switchOfStuff("a"))// returns apple, input must be same data type. 


//MULTIPLE IDENTICAL OPTIONS IN SWITCH STATEMENTS
//HOW TO GET OUTPUT WITH MULTIPLE INPUTS
sequentialSizes = (val) =>{ 
    let answer = ""; 
    switch(val){ 
        case 1: 
        case 2: 
        case 3: 
            answer = "Low"; 
        break; 
        case 4: 
        case 5: 
        case 6: 
            answer = "mid"; 
        break; 
        case 7: 
        case 8: 
        case 9: 
            answer = "high"; 
        break; 
    }
    return answer; 
}

//console.log(sequentialSizes(9)); returns high 

//REPLACING IF ELSE CHAINS WITH SWITCH
chainToSwithch=(val) =>{ 
let answer = ""; 

switch (val){ 
    case "bob": 
        answer = "marley"; 
    break; 
    case 42: 
        answer = "The answer"; 
    break;
    case 1: 
        answer = "there is no 1"; 
    break;
    case 99: 
        answer = "Missed me by this much!"; 
    break;
    case 7: 
        answer = "ate nine"; 
    break;
} 
return answer;
} 
//console.log(chainToSwithch(7)) 