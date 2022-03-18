let user = {
    name : "Ahmed",
    age : 30 ,
    address : "union st "
}

function greet(){
    console.log("Hello World")
}


let greet2 = () =>{console.log("Hello World")}

let fruits = ['banana','apple','watermelon','peach','dates']



let building2 = {
    addrees : "broadway st",
    zipCode : '11751',
    floors : 50,
    noOfFlat :150,
    cableSize : '1*240+120',
    electricalLoad : '20000kw',



}



//array.find()

//its a fun that return the first elemnet that meet the condition that u looking for 

// example

const array1 = [5,8,12,130,44]
const found = array1.find(ele=>ele>10)
console.log(found)
// found = 12


//array.filter()
// its a fun that return a new fun that pass the test that u set up 
 const array2 =[5,8,12,130,44]
 const res = array2.filter(x=>x>8)
 console.log(res)
 // res = [12, 130, 44]



//array.map()
// it retrun a new array and this new array has a modification u want to run on every element on the array

const array3 = [5,8,12,130,44]
const res3 = array3.map(y=>y*3)
console.log(res3)
// res3 = [15, 24, 36, 390, 132]


//array.slice()
//its a fun that return a shallow copy of the array and u can choose which part u wanna copy by choosing the first and the end of the indexs of the part that u wanna copy
const array4 = [5,8,12,130,44]
const res4 = array4.slice(2)  // [12,130,44]
const res44 = array4.slice(2,4) // [12,130]



//array.push()
// it return the array modified by adding a new elemnet to the end of the array 

const array5 = [5,8,12,130,44]
const res5 = array5.push(487)
//array5 = [5,8,12,130,44,487]



////array.include()

// its a method to determine if ur array include a certin element or no 
// it return true or false
const array6 = [5,8,12,130,44]
console.log( array6.includes(5)) //ture
console.log(array6.includes(100)) //false


