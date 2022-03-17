let tent1 = {name:'john', cscore:400, age:50, salary:15244}
let tent2 = {name:'osc',  cscore:500,  age:40, salary:15244}
let tent3 = {name:'joe',  cscore:700,  age:30, salary:15244}

let apt1 = {bedroom : 4 ,sqft :50 , window : 4 ,unit : "1A",tents:[]}
let apt2 = {bedroom : 5 ,sqft :80 , window : 8 ,unit : "2A" ,tents:[]}
let apt3 = {bedroom : 4 ,sqft :70 , window : 7 ,unit : "3A" ,tents:[]}



let building = {
    streetaddress :"41 union ave",
    laundary      : true,
    allowspets    : true,
    apartments    : [apt1,apt2,apt3],
    lease         : function(apt,tent){
        if(apt.tents.length===apt.bedroom){
               return `${apt.unit} is already full`
        }else
            apt.tents.push(tent)
            console.log(tent.name,"has rent out",apt.unit)}    
}