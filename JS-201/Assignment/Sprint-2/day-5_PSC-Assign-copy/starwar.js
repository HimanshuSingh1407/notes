
async function getData(){

   let input_search = document.getElementById("input-search").value;

   let url  =  `https://swapi.dev/api/people/?search=${input_search}`;

   let res = await fetch(url);

   let data = await res.json();

   append(data.results)
   console.log(data)
}

function append(data){
    let container = document.getElementById('results');
    container.innerHTML = null;
    
    data.forEach(function (ele){

        let p = document.createElement('p')
        p.innerText = ele.name;

        container.append(p);
    })
}