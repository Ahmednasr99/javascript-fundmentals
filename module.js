

let  quiz=()=>{
    
    let myName = prompt("enter ur name : ")
    let month = prompt("birth date : ")
    let food = prompt("favourite food : ")


    console.log('my name is ',myName)
    console.log('i was born in ',month)
    console.log('my fav food ',food)

}

const notifyA = () =>{

}
const notifyB = () =>{

}

const print = () =>{
    console.log("i love to print text");
}


const functionA = () =>{
    console.log("FUNCTION A BEEN CALELD")
    functionB()

}


const functionB = () =>{
    console.log("FUNCTION B BEEN CALELD")

}

const functionC = (f) =>{
    console.log("FUNCTION C BEEN CALELD")
    f()

}

const great = (person) =>{
    console.log("hello", person)
}


const blender = (string) =>{
    return string.split('')
}

const square = (num, message) =>{
   console.log(num*num) 
   console.log("message", message)

}
