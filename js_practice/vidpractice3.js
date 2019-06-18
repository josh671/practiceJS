//Use of conditional logic with if statements
//if statements are used to make decisions in code
// if helps execute code in curly braces based on whats defined in () 
ourTrueorFalse = (isItTrue) => { 
    if(isItTrue < 10){ 
        return true;
    }
    if(isItTrue> 10){ 
        return false;
    }
} 

//console.log(ourTrueorFalse(20)); result is true if less than 10, false if greater. 

trueorFalse = (wasThatTrue) => { 
    if ( wasThatTrue){ 
        return "yes, it was true"
    }
    if (wasThatTrue){ 
        return "no, it was false"
    }
} 
//console.log(trueorFalse (true)) returns true; 

//COMPARISON WITH THE EQUALITY OPERATOR ==; ATTEMPTS TO CONVERT VALUES BEING COMPARED TO COMMIN TYPE
// 3 == "3" RETURNS TRUE.
testEqual = (val) => { 
    if(val== 12){ 
        return "equal"; 
    }
    if(val != 12 ){ 
        return "not equal"
    }
}
//console.log(testEqual(10)); resutl is not equal, because 10 != 12 

//COMPARISON WITH THE STRICT EQUALITY OPERATOR ===, EVALUATES IF VALUE TYPES ARE THE SAME 
testStrict = (val) =>{ 
    if (val === 7){ 
        return "equal"; 
    }
   return "not equal";
}
 //console.log(testStrict("7")) //returns not equal 


 TIME LOG 1.14.45