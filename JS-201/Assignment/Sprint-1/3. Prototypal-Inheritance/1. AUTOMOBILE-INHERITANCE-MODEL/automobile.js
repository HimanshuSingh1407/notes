let fourWheeler = {
    tyre : 4,
    steering : 1,
    break : 4,
    headlight : 2,
    engin : 1,
    gearbox : 1,
}

let vehical1 = Object.create(fourWheeler, { model: { value: "2518 52 LPT" } }) 
vehical1.model = "2518 52 LPT";
console.log(vehical1)
let vehical2 = Object.create(fourWheeler, { model: { value: "4750 52 Signa" } }) 
vehical2.model = "4750 52 Signa";
console.log(vehical2)



//Constructor function

function FourWheeler(model) {
    this.model = model;
    this.tyre = 4;
    this.steering = 1;                                                                                                                                        
    this.break = 4;
    this.headlight = 2;
    this.engin = 1;
    this.gearbox = 1;
}

let v1 = new FourWheeler("2518 52 LPT");

let v2 = new FourWheeler("4750 52 Signa");



//console.log(v1)
//console.log(v2)

FourWheeler.prototype.price = 1000000