let tent1 = {name:'john', cscore:400, age:50, salary:15244}
let tent2 = {name:'osc',  cscore:500,  age:40, salary:15244}
let tent3 = {name:'joe',  cscore:700,  age:30, salary:15244}

let apt1 = {bedroom : 4 ,sqft :50 , window : 4 ,unit : "1A",lease : function(tent){
    if(this.tents.length===this.bedroom){
        return `${this.unit} is already full`
    }else
    this.tents.push(tent)
    console.log(tent.name,"has rent out",this.unit)

} ,tents:[]}
let apt2 = {bedroom : 5 ,sqft :80 , window : 8 ,unit : "2A" ,lease : function(tent){
    if(this.tents.length===this.bedroom){
        return `${this.unit} is already full`
    }else
    this.tents.push(tent)
    console.log(tent.name,"has rent out",this.unit)

} ,tents:[]}
let apt3 = {bedroom : 4 ,sqft :70 , window : 7 ,unit : "3A" ,lease : function(tent){
    if(this.tents.length===this.bedroom){
        return `${this.unit} is already full`
    }else
    this.tents.push(tent)
    console.log(tent.name,"has rent out",this.unit)

} ,tents:[]}



let building = {
    streetaddress :"41 union ave",
    laundary : true,
    allowspets : true,
    apartments: [apt1,apt2,apt3],
    
    
}