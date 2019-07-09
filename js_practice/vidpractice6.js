//RECORD COLLECTION 

//////updating objects within an object 
let musicCollection = { //create music collection with number id, 
    '1111': {           // contains album, artist, tracks array
        "album": 'slippery when wet', 
        'artist': "bon jovi", 
        'tracks': [ "let it rock", 'you give love a bad name']
    }, 
    '2222': { 
        "album": 'somebody to love', 
        'artist': "queen", 
        'tracks': [ "we will rock you", "don't stop me now"]
    }, 
    '3333': {"album": 'white album ', 
        'artist': "beattles", 
        'tracks': [ "hey jude", 'I want to hold your hand']
    },
    '4444':{ 
        "album": 'santeria', 
        
    }, 
}
let collectionCopy = JSON.parse(JSON.stringify(musicCollection));//keeps compy of collection 
//creating a function to store data in object. 
let addRecord = (id, prop, value) => { 
    if (value === ""){ //if value is blank delete property. 
        delete musicCollection[id][prop];//if collection id(4444) and prop(album) is blank, delete it 
    }else if(prop ==="tracks"){ //if tracks exist it will equal iteslf or empty array,
        musicCollection[id][prop] = musicCollection[id][prop]||[]; 
        musicCollection[id][prop].push(value); 
    }else { 
        musicCollection[id][prop] = value;
    }
    return musicCollection; 
} 
//updates data to already created object in musicCollection
//console.log(addRecord(4444, "artist", "aba"));
//console.log(addRecord(4444, "tracks", "mama mia, love dont cost")); 


//INTERATE WITH WHILE LOOPS 
    //LOOPS ALLOW CODE TO BE RUN MULTIPLE TIMES 
let myArray = [ ]; 
let i = 0; 
while(i<5){ //while i is less than 5
    myArray.push(i); //push i to array 
    i++; //after push add 1 to i and if still less than 5, push into array
}
//console.log(myArray); result: [ 0, 1, 2, 3, 4 ] 

//ITERATE WITH FOR LOOPS
let myArray1 = [ ]; 
for (let num = 1; num<6; num++){ //num set to 1, if num less than 6 push to array1,
    myArray1.push(num);          // add 1 if num is less than 6 
} 
//console.log(myArray1) result: [ 1, 2, 3, 4, 5 ] 

//iterate even numbers with a for loop 
let array2 = []; 
for (let i = 0; i < 10; i+= 2){ 
    array2.push(i); 
}
//console.log(array2); //result [ 0, 2, 4, 6, 8 ]

//Iterate odd numbers with a for loop 
let array3 = [ ]; 
for (let i =0; i < 12; i+=3){ 
    array3.push(i); 
}//console.log(array3); Result: [ 0, 3, 6, 9 ] 

//counting backwards with a for loop 
let array4 =[ ]
for (let i = 10; i>0; i -=2){ //starting at 10. 10 is greater than 0 
    array4.push(i);             // i is minus 2 until it is less than 0;
} 
//console.log(array4); [ 10, 8, 6, 4, 2 ]

//counting backwards with odd numbers with a 4 loop 
let array5 =[]; 
for (let i =9; i>0; i-=2){ 
    array5.push(i);
}
//console.log(array5); //result[ 9, 7, 5, 3, 1 ]

//ITERATE THROUGH AN ARRAY WITH A FOR LOOP 
let array6 = [9, 10, 11, 12]; 
let ourTotal = 0; 
for (let i=0; i < array6.length; i++){ //i = 0 ; i less than 4(because 4 numbers in array;)
    ourTotal+= array6[i];           //adds all numbers in array together, pluss 1 
}
//console.log(ourTotal) result = 42
//console.log(array6) result = [ 9, 10, 11, 12 ] 

let array7 = [2, 3, 4, 5, 6, ];
let ourTotal7 = 0; 
for (let i = 0 ; i < array7.length; i++){ 
    ourTotal7 += array7[i]; 
} 
//console.log(ourTotal7); result: 20; 

//NESTING FOR LOOPS; multy-dimensional arrays are arrays with arrays within

multiplyAll = (arr) =>  { 

    let product = 1; 
 for ( i= 0 ; i < arr.length; i++){ 
   for (let j = 0; j<arr[i].length; j++){ 
       product *= arr[i][j];
   }
 }
 return product
}
let product = multiplyAll([[1,2], [3,4], [5,6,7]]);
//console.log(product);// result = 5040 =(5*6*7) * (3*4) * 2; 

//ITERATE WITH DO/WHILE LOOPS
let array8 = [ ]; 
let i8 = 10; 
do { 
    array8.push(i8); 
    i8++;
}while(i8<5) 

//console.log(i8, array8); //result 11 [ 10 ] 

//PROFILE LOOK UP 
let contacts = [ 
    {'firstName': 'Akira', 
     'lastName': 'Laine', 
     'number': '054312345', 
      'likes': ['pizza', 'Coding', 'Brownie Points']
    },
    {'firstName': 'Harry', 
     'lastName': 'Potter', 
     'number': '09456825', 
      'likes': ['Hogwarts', 'Magic', 'Hagrid']
    },
    {'firstName': 'Sherlock', 
     'lastName': 'Holmes', 
     'number': '07894565', 
      'likes': ['Intriguing Cases', 'violin', ]
    },
    {'firstName': 'Kristian', 
     'lastName': 'Vos', 
     'number': '014523698', 
      'likes': ['Gaming', 'Shitting', 'Points']
    },
];

lookUpProfileName = (name, prop)=>{ //pass in first name (sherlock) than property(number,likes), returns value matching key
    for (let i = 0; i < contacts.length; i++){ //let i equal 0, i less than contacts.length, add increments of 1
        if(contacts[i].firstName === name){ //checks if name exists; 
            return contacts[i][prop] || 'no such porperty'//if name exists, returns property associated
        } 
    }
    return "no such contact"
}
//console.log(lookUpProfileName('Akira', 'likes')) 

lookUpNumber = (number, name) =>{ 
    for (let i = 0; i < contacts.length; i++){ 
       if (contacts[i].number === number){ 
           return contacts[i][name] || 'does not exist';
       }
    }
    return 'no such name';
}
//console.log(lookUpNumber('014523698', 'firstName')) result [ 'pizza', 'Coding', 'Brownie Points' ] Kristian 


