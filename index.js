const multiple = (n1,n2) =>{
    console.log("multpli ," ,n1 ,"by",n2)
    return n1*n2
}

const double = (n) =>{
    return n*2
}
let array1 = ['a','b','c','d']
let array2 = [1,2,3,4,5,6,7]

const deteminlength = (arr) =>{
    if (arr.length>5){
        return "this array is long "
    }
    else{
        return "this array is short"
    }

}

const askForSstring = () =>{
    let str = prompt("enter my name")
    return str
}

console.log(askForSstring().split(''))