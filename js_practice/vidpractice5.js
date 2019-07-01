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

cc(2); cc(4); cc(7); cc('k'); cc('a'); 
//console.log(cc(4))// tells you to bet because 3-2 = 1; 

//BUILDING JAVASCRIPT OBJECTS
//OBJECTS - use properties to access data; contained within curley braces

let ourDog = { 
    "name": "camper", 
    "legs": 4, 
    "tailes": 1,
    "friends" : ["everything"], 
}; 
 
let myDog = { 
    "name": "roket", 
    "legs": 3, 
    "tails": 2, 
    "friends": [], 

} 

//ACCESSING OBJECT PROPERTIES WITH DOT (.) NOTATION; 
let testObj = { 
    "hat": "ballcap", 
    "shirt": "jersey", 
    "shoes": "cleats",
};

//finding out values of testObj using . notation; 
let hatValue = testObj.hat; 
//console.log(hatValue)// returns the value of hat within the object "testObj" 
let shirtValue = testObj.shirt; 
//console.log(shirtValue);// returns jersey
let shoesValue = testObj.shoes; 
//console.log(shoesValue); // returns value of shoes in object "testObject" 


//ACCESSING OBJECT PROPERTIES WITH BRACKET NOTATION 
let testObj2 = { 
    "an entree": "hamburger", //bracket notation required when key has space 
    "my side": "veggies",
    "the drink": "water", 
}; //finish creating object 

let entreeValue = testObj2["an entree"]; //use brackets when key has space
//console.log(entreeValue)// returns hamburger  
let sideValue = testObj2["my side"]; 
//console.log(sideValue); // returns veggies
let drinkValue = testObj2["the drink"]; 
//console.log(drinkValue); // returns water;  

//ACCESSING OBJECT PROPERTIES WITH VARIABLES 

let testobj3 = { 
    12: "new york", 
    15: "montana", 
    18: "los angelas", 
}; 

let newCity1 = 12; 
let city = testobj3[newCity1]; 
//console.log(city); returns new york because newCity1 has been set to 12 
let newCity2 = 15; 
let city2 = testobj3[newCity2]; 
//console.log(city2) returns montana; 
let newCity3 = 18; 
let city3 = testobj3[newCity3] 
//console.log(city3); returns los angelas because newCity3 has been set to 18; 

//UPDATING OBJECT PROPERTIES
//can use dot notation to update object properties
let ourDog1 = {         //created dog object 
    "name": "cooper", 
    "legs": 4, 
    "tails": 1, 
    "friends": ["everything"] 
} ; 
ourDog1.bark = "bow-wow"; //adds bow-wow property with "bark" key:pair to ourDog1 object
//console.log(ourDog1); 


////ADDING NEW PROPERTIES TO OBJECT USING DOT OR BRAKET NOTATION
let newDog = { 
    "name": "happy coder", 
    "tails": 1, 
    "legs": 4, 
    "friends": ["freeCodeCamp Campers"]
}; 

newDog.barklevel = "bow-wow-level-3";
newDog.name = "maxine";//changed name of newDog object
//console.log(newDog); 

//dot notation
newDog.type = "pitbull"; //adds type of dog to object using dot notation

//braket notation
newDog['bark'] = "wooof!"; 
//console.log(newDog); adds new property to "newDog" using braket notation 
//DELETING properties from an object using "delete key word" 
delete newDog.tails; 
//console.log(newDog); removes tails from dog Object; 


//USING OBJECTS FOR LOOKUPS
phoneticLookup = (val)=>{ 
    let result = ""; 
    let lookUp = { 
        "alpha": "Adams", 
        "bravo": "Boston", 
        "charlie": "Chicago", 
        "delta": "Denver", 
        "echo": "Easy", 
        "foxtrot" : "frank",
    }; 
    result = lookUp[val]; 
    return result
}
console.log(phoneticLookup("bravo"));
1.56.52
