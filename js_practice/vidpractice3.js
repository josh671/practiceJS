//Contains : if statements 
//              >,< 
//          == vs === equal-to vs absolutely equal-to (must be same data types)
//          != vs !== not equal (converts data types) vs not equal (must be same data type)
//          <= vs >= lessthan or equal vs greater than or equal
//             && Logical and-operator
//
//


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


//PRACTICE COMPARING DIFFERENT VALUES
comparEquality = (a,b)=>{ 
    if (a === b ){ 
        return "equal";
    }
    return "not equal"; 
}
//console.log(comparEquality(10, "10")); returns equal when == because converts string into number ; returns not equal when === 
//reason is because === needs to also be the same data type, does not convert to same data type. 

//STRICT NOTEQUAL EVALUATOR !== 
testStrictNotEqual = (val) =>{ 
    if (val !== 1){ 
        return "not Equal"
    }
    return "equal"
}
// != converts to same data type 
//!== does not convert to same data type
//console.log(testStrictNotEqual("1"));  

//COMPARISON WITH THE LOGICAL AND OPERATOR 
//GREATER THAN OPERATOR 
testGreaterThan = (val)=>{ 
    if (val > 100) { 
        return "over 100";
    }
    if (val > 10){ 
        return "over 10";
    }
    return "10 and under";
    
}
//console.log(testGreaterThan(100));  

//COMPARISON WITH THE GREATER THAN OR EQUAL TO OPERATOR
testGreaterThanOrEqual = (val) =>{ 
    if (val >= 20){ 
        return "20 or over"; 
    }
    if (val >= 10){ 
        return "10 or Over"; 
    }
    return "less than 10"; 
}
//console.log(testGreaterThanOrEqual(5)); 

//COMPARISON WITH THE LESS THAN OPERATOR
testLessThan = (val)=> { 
    if (val <= 25){ 
        return "less than 25";
    }
    if (val <= 15){ 
        return "less than or equal to 15"; 
    }
}
 //console.log(testLessThan(10))

 //COMPARISONS WITH LOGICAL AND-OPERATOR && 
 testLogicalAnd = (val) => {
     if (val <= 50 && val >= 25) { 
              return "yes";    // checking if less than or equal to 50 and equal to or greater than 25
         }
     return "no"; 
 }

 //console.log(testLogicalAnd(50)); //returns yes; && is the and statement; less/equal to 50 
 // and greater/equal 25; 
 
 
 //COMPARISONS WITH LOGICAL OR OPERATOR
testLogicalOr = (val) => {
    if (val < 10 || val > 20){              // || is the logical or operator 
        return "outside"                    // returns outside if one or other condition is met 
    // if val less than 10 return outside or if val greater than 20 return outside; 
    // if value is greater than 10 less than 20 return inside; 
    }
    return "inside";
}

//console.log(testLogicalOr(21)) 

