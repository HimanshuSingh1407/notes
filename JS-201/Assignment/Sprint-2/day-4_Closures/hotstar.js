// 1st Part of Assignment

let movies_div = document.getElementById('movies');

let movies_details = document.getElementById('details');

let id;

 async function searchMovies(query){

        let url = `https://www.omdbapi.com/?s=${query}&apikey=e1df3aa2`;
       
        try{
            let res = await fetch(url);

            let data = await res.json();

            return data.Search;

            //console.log(data)

        } catch (error) {
            console.log('error:', error)
        }

    }

async function main(){
    let query = document.getElementById('query').value;
    //console.log('query;', query)

    let response = searchMovies(query);

    let data = await response;

    //console.log(data)
    appendMovies(data)

}

function appendMovies(movies){

movies_div.innerHTML = null;

if(movies== undefined)
{
    return false;
}

movies.forEach(function(el){

    let p = document.createElement('p');
    p.innerText = el.Title;
    p.addEventListener('click', function(){
        moviesDetails(el)
    })


    movies_div.append(p);
})

}

function debounceFunction(func, delay){

if(id){
    clearTimeout(id);
}

id = setTimeout(function(){

func();
}, delay);

}

//2nd part of Assignment

function moviesDetails(el){

    movies_details.innerHTML = null;

    console.log(el)

    let div = document.createElement('div');

    let image = document.createElement('img');
    image.src = el.Poster;

    let h1 = document.createElement('h3')
    h1.innerText = 'Movie Name :' + " " + el.Title;

    let h2 = document.createElement('h3')
    h2.innerText = "Year of release :" + " "+  el.Year;

    let h3 = document.createElement('h3')
    h3.innerText = "imdb rating :" + " "+ "8.5";
    h3.style.paddingBottom = "20px";

    div.append(image, h1, h2, h3)
    movies_details.append(div)
}


//3rd part of Assignment






