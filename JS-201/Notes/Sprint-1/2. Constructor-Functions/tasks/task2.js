
// function submitProduct(e){
//     event.preventDefault();
//     //console.log("triggered")
//     let form = document.querySelector("#products");
//     let name = form.name.value;
//     let brand = form.brand.value;
//     let price = form.price.value;
    
//     console.log(name,brand, price)
// }




//constructor Method


let arr = []

function Product(name, brand, price){
    this.name = name;
    this.brand = brand;
    this.price = price
}

function submitProduct(e){
    event.preventDefault();
    //console.log("triggered")
    let form = document.querySelector("#products");
    let name = form.name.value;
    let brand = form.brand.value;
    let price = form.price.value;
    
    let p = new Product(name, brand, price)
    arr.push(p)
    //console.log(p)
    console.log(arr)
}
