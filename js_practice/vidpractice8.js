//destructing and assgining

//USE DESTRUCTURING ASSIGNMENT TO ASSIGN VARIABLES FROM OBJECTS
var voxel = { x: 3.6, y: 7.4, z: 6.54}; //created object called voxel
    //old way of assinging variable 
    //var x = voxel.x
    //var y = voxel.y 
    //var z = voxel.z
//DESTRUCTURING SYNTAX TO ASSIGN VARIABLE 
const { x: a, y: b, z: c} = voxel; //get feild x of object and copy to value a, get feild of y copy value b...

//USING DESTRUCTURING TO OBTAIN THE AVERAGE TEMPERATURE FOR TOMORROW FORM AVERAGE TEM INPUTS 
const AVG_TEMPERATURE = { 
    today: 77.5, 
    tomorrow: 79, 
} 

let getTemOfTmrw =  (avgTemperatures) => { 
    'use strict'

    const { tomorrow: tempOfTomorrow} = avgTemperatures; //USING DESTRUCTION TO GET TEMPERATURE OF TOMORROW OUT OF AVG_TEMPERATURES
    return tempOfTomorrow;          //avgTemperatures holds the spot for AVG_Temperatures to be passed in
} 
//console.log(getTemOfTmrw(AVG_TEMPERATURE)); result : 79, got temperature of tomorrow BECAUSE of key value pair, 

//DESTRUCTING ASSIGMENT WITH NESTED OBJECTS
const LOCAL_FORCAST = { 
    today: {min: 78, max: 89}, 
    tomorrow: {min: 78.4, max: 104.54}
}; 
getMaxOfTomorrow = (forcast)=> { 
    'use strict'; 
    const{ tomorrow: {max: maxOfTomorrow}} = forcast; 
    return maxOfTomorrow;
} 
//console.log(getMaxOfTomorrow(LOCAL_FORCAST)); returns max of tomorrow 104.54 

//USE DESTRUCTING ASSIGNMENT TO ASSIGN VARIABLES FROM ARRAYS
const [ z, x, , y] = [1, 2, 3, 4, 5, 6]; // sets variables so that z=1, x=2, y= 4; double commas ,, skips three because they skip an item in the array
//console.log(z,x,y) reslult: 1 2 4
//using variables to switch places within arrays 
let v = 8, g=6; 
(()=>{ 
    'use strict'; 
    [v ,g] = [g,v]
})(); 
//console.log(v);
//console.log(g); 

//USE DESTRUCTURING ASSIGNMENT WITH THE REST OPERATOR 
3.03.58
