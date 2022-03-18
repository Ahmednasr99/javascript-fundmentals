const laptop = {
    price: 1000,
    brand: 'HP',
    memory: '2GBs',
    color: 'green',
}
const car = {
    engine: 'V8',
    doors: 2,
    model: 'BMW',
    price: 200,
    make: 'M4',
}
const company = {
    name: 'Vittles',
    CEO: 'Michael Law',
    isTheBest: true,
    publicyTraded: false
}
const room = {
    windows: 0,
    dimensions: '200x200',
    closet : false,
    pets : false , 
    isLegal : false,
}

const item = {
    name : "ali",
    attacpower : 130
}

const allay = {
    num : 140,
    name : "ahmed",
    power :{name : "ahsg",age : 45},
}

const character = {
    haircolor : 'blue',
    height : '6m',
    race :"elf",
    strength : Infinity,
    item:item,
    allay :allay ,

    
}


console.log(laptop)
console.log(car)
console.log(company)
console.log(room)
console.log(character)
console.log(character.allay.power.name)