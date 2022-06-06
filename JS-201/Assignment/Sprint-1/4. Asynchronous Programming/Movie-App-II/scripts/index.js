//Movie App 1st Part

let index = 0;    //slideIndex
showSlides();

function showSlides(){
  let i;

  let slides = document.querySelectorAll(".img");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  index++;

  if (index > slides.length) {index = 1}

  slides[index-1].style.display = "block";

  setTimeout(showSlides, 3000); 
}


//Movie App 2nd Part


 function Movies(mn, rd, p, r){

  this.movieName = mn;
  this.releaseDate = rd;
  this.poster = p;
  this.IMDbRating = r; 
 }



 let m1 = new Movies("puspa", "20-05-22", "https://i.ytimg.com/vi/-QQWSzx3nG8/maxresdefault.jpg", "8.2")
 let m2 = new Movies("puspa", "20-05-22", "https://i.ytimg.com/vi/-QQWSzx3nG8/maxresdefault.jpg", "7.5")
 let m3 = new Movies("puspa", "20-05-22", "https://i.ytimg.com/vi/-QQWSzx3nG8/maxresdefault.jpg", "4.5")
 let m4 = new Movies("puspa", "20-05-22", "https://i.ytimg.com/vi/-QQWSzx3nG8/maxresdefault.jpg", "6.8")
 let m5 = new Movies("puspa", "20-05-22", "https://i.ytimg.com/vi/-QQWSzx3nG8/maxresdefault.jpg", "9.3")
 let m6 = new Movies("puspa", "20-05-22", "https://i.ytimg.com/vi/-QQWSzx3nG8/maxresdefault.jpg", "7.4")
 let m7 = new Movies("puspa", "20-05-22", "https://i.ytimg.com/vi/-QQWSzx3nG8/maxresdefault.jpg", "8.9")
 let m8 = new Movies("puspa", "20-05-22", "https://i.ytimg.com/vi/-QQWSzx3nG8/maxresdefault.jpg", "4.1")
 let m9 = new Movies("puspa", "20-05-22", "https://i.ytimg.com/vi/-QQWSzx3nG8/maxresdefault.jpg", "7.7")


 var allMovies = [];

 allMovies.push(m1);
 allMovies.push(m2);
 allMovies.push(m3);
 allMovies.push(m4);
 allMovies.push(m5);
 allMovies.push(m6);
 allMovies.push(m7);
 allMovies.push(m8);
 allMovies.push(m9);

//console.log(allMovies)

 localStorage.setItem("movies", JSON.stringify(allMovies));

 //show();

function show(){
  //event.preventDefault();
  
  document.querySelector("#movies").innerHTML = "";
  
var allMovies = JSON.parse(localStorage.getItem("movies"))

allMovies.forEach(function(ele){

  var div = document.createElement("div")

  var image = document.createElement("img");
  image.src = ele.poster;

  var h3 = document.createElement("h3");
  h3.innerText = ele.movieName;

  var h6 = document.createElement("h6");
  h6.innerText = ele.releaseDate;

  var h4 = document.createElement("h4");
  h4.innerText = ele.IMDbRating;

  div.append(image, h3, h6, h4);
  document.querySelector("#movies").append(div);
  
});
};


 //Movie App 3rd Part

//  let sortV = document.getElementById("sort").value;

//   document.getElementById("btn").addEventListener("click", sortValue);

//     function sortValue(allMovies)
//     {
//         if(sortV=="Low to High")
//         {
//             allMovies.sort(function(a,b){

//                 return a.Number(IMDbRating)-b.Number(IMDbRating);// a.rating-b.rating 
//             })
//         }  
//         if(sortV="High to Low")
//         {
//             allMovies.sort(function(a,b){

//                 return b.Number(IMDbRating)-a.Number(IMDbRating);// a.rating-b.rating
//             })
//         }                     
//     //console.log(arr);
//     }


var data = JSON.parse(localStorage.getItem("movies"))
show(data)

// document.getElementById("btn").addEventListener("onhange", sortValue);

function sortValue(){
  
  var selectInrerest = document.querySelector("#sort").value;  

   if(selectInrerest=="Low to High"){
    data.sort(function (a,b){
       return a.Number(IMDbRating) -  b.Number(IMDbRating);
     });
     show(data)
   }
   if(selectInrerest=="High to Low"){
 data.sort(function (a,b){
   return b.Number(IMDbRating) -  a.Number(IMDbRating);
 });
 show(data)
}
 }



