var product = [
    {
        name : "French Fries ",
        image : "https://media.istockphoto.com/photos/potatoes-fries-in-a-red-carton-box-isolated-fast-food-picture-id496094410?k=20&m=496094410&s=612x612&w=0&h=BH41-IaJ-pnGS2BsKRSBL1DtoD-lpc_xtnJQz2jEkOY=",
        orderId : 123456789,
    },
    {
    name: "Veggie Burger",
    image : "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2021%2F07%2F13%2FUltimate-Veggie-Burgers-FT-Recipe-0821.jpg&q=60",
    orderId : 321654789,
    },
    {
    name: "Chiken-Burger",
    image : "https://www.chicken.ca/wp-content/uploads/2020/09/Moist-Chicken-Burgers.jpg",
    orderId : 456159753,
    },
    {
    name : "Maharaja Burger", 
    image : "https://5.imimg.com/data5/JP/SF/MY-33353830/mcdonald-veg-maharaja-mac-burger-500x500.png",
    orderId : 789512345,
    },
    {
    name : "cold-drink",
    image : "https://b.zmtcdn.com/data/dish_images/8187d3223ac2cc42cc24f723c92877511634805403.png",
    orderId : 1255478545,
    }

]

showproduct();
function showproduct(){
    product.forEach(function (ele, index){

        var div = document.createElement("div");

        // var image = document.createElement("img");
        // image.src = ele.image;

        var span = document.createElement("span")
        span.innerText = ele.name;

        // var h3 = document.createElement("h3");
        // h3.innerText = ele.orderId;

        let checkbox = document.createElement("input")
        checkbox.setAttribute("type","checkbox");
        checkbox.setAttribute("id","checkbox")
        checkbox.addEventListener('change', function() {
             saveitom(ele,index);
        });

        div.append(checkbox, span);

        document.querySelector("#container").append(div);
    });
    
}
    

document.querySelector("#order").addEventListener("click", order)

var arr = [];
function saveitom(ele,index){
    event.preventDefault();
     arr.push(ele);
     var order = ele;
     localStorage.setItem("ordredData",JSON.stringify(arr));
    
     }
    
    function order(){
    //promise
    
    function status(){
        return true //false
    }

//     var count=0;
// if(count==0){
//     var arr='';
//     count++;
// }
// if(count>0){
//     window.location.reload();
// }
    
    let my_promise = new Promise(function(resolve, reject){
    
    let s = status();

        
    let time = Math.random()*10000;   //0.1 to 0.9 * 10000
    console.log(time)
    
    if(s===true)
    {
    setTimeout(function(){

        resolve(order) 
       // showproduct(ele)
    
    }, time);
        
    }
    else
    {
        reject("Sorry we can't deliver this item")
    }
    });
    
    my_promise.then(function(res){
        //console.log(`Your ${res} is ready`)

        showproduct(arr)
        function showproduct(arr){
            arr.forEach(function (ele, index){
        
                var div = document.createElement("div");
        
                var image = document.createElement("img");
                image.src = ele.image;
                
                var h2 = document.createElement("h2")
                h2.innerText = "Order ID :-"

                var p = document.createElement("p");
                p.innerText = ele.orderId;
        
                div.append(image);
        
                document.querySelector("#append").append(div); 
                document.querySelector("#id").append(h2, p);
            });
            
       }
    })
    
    }








//Promises

// function status(){
//     return true //false
// }


// function order(){
// //promise

// let order1 = document.querySelector("#burger").value;
// // let order2 = document.querySelector("#pizza").value;
// // let order3 = document.querySelector("#chicken-burger").value;
// // let order4 = document.querySelector("#cold-drink").value;

// // let order = [order1, order2, order3, order4]


// let my_promise = new Promise(function(resolve, reject){

// let s = status();

// let time = Math.random()*10000;   //0.1 to 0.9 * 10000
// console.log(time)

// if(s===true)
// {
// setTimeout(function(){
//     resolve(order1) 
//     showproduct()

// }, time);
    
// }
// else
// {
//     reject("Sorry we can't deliver this item")
// }
// })

// my_promise.then(function(res){
//     console.log(`Your ${res} is ready`)
// })

// }



