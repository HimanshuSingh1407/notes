//Nike product (brand, logo, seller)-----from flipkart


// const Product = {
//     brand : "Nike",
//     logo : "nikeurl",
//     seller : "flipkart",
// };

// let p1 = Object.create(Product);
// //p1.name = "shoes"
// console.log(p1)


//<<<<<<<<<<<<<<<<<<<<<<-------------------------------->>>>>>>>>>>>>>>>>>>>>


//constructor function
//create a constructor function to create the blueprint

function Product (type){
    this.type = type;
    this.brand = "nike";
    (this.logo = "URL"), (this.seller = "Flipkart")
}

Product.prototype.discount = function (){
    console.log("50% discount");
};

Product.prototype.discount = function (type){
    this.type = type;
}

Product.prototype.price = 1000;

let p1 = new Product("shoe");

let p2 = new Product("Sneaker");
p1.changetype("t-shirt");
console.log(p1)
console.log(p2)