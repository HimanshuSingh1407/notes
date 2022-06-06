const api_key = "AIzaSyBaUTwdjh3P704ugpYqiQIQpsqqSTeFgiY";

let searchData = async ()=>{
    try{
        let search = document.getElementById('search').value;

        let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${search}&key=${api_key}`;

        let res = await fetch(url);

        let data = await res.json();


        appendData(data.items);

        console.log(data)

    } catch (error){
        console.log(error);
    }
 }

 //searchData()

let appendData = (data) => {

    let result_container = document.getElementById('results')
    result_container.innerHTML = null;

    data.forEach(({id:{videoId}, snippet:{title, thumbnails}}) => {

        let div = document.createElement('div');

        let img = document.createElement('img');
        img.src = thumbnails.default.url;

        let h3 = document.createElement('h3');
        h3.innerText = title;

        let video = {
            videoId,
        }

        // div.onclick = (x) => {
        //     playVideo()
        //    // window.location.href ="playVideo.html"
        // };
        
        div.append(img, h3)
        div.addEventListener('click', function(){
            playVideo(video);
            window.location.href ="playVideo.html"
        })

        result_container.append(div)
    })
} 

let playVideo = (video) =>{

    console.log(video)
    localStorage.setItem('playvideo', JSON.stringify(video))
}



