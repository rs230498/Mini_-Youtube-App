// let ser12 = document.getElementById("ser").value
    // ser12.trim()
    // console.log("ser= ",ser12)
    // if(ser12=="")
    // {
    //     search1() 
    // }
    // else{
    //     search()
    // }
    search1()
async function search1()
    {
        
        let url = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cid&chart=mostPopular&maxResults=20&regionCode=IN&key=AIzaSyDttfZIpae_ZY_74HGHpQ20RNsYqoyxdK8";
       let res = await fetch(url)
        let data = await res.json();
        append1(data.items);
        console.log(data.items);
    }

    let append1 = (data) => {
        let container = document.getElementById("vid");
        
        data.forEach(({ id, snippet: { title, thumbnails } }) => {
            
            let div = document.createElement("div");
            div.addEventListener("click",function(){
                video2(id,title)
            })
            let iframe = document.createElement("img");
            iframe.src = thumbnails.high.url;
            let h3 = document.createElement("h4");
            h3.innerText = title;

            div.append(iframe, h3);
            container.append(div)

        });
    };

    function video2(videoId,title)
    {
        var ar = [videoId,title]
        localStorage.setItem("movietp",JSON.stringify(ar))
        window.open("video.html","_self")
    }

    async function search()
    {
        let ser1 = document.getElementById("ser").value;
        let url = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q="+ser1+"&key=AIzaSyDttfZIpae_ZY_74HGHpQ20RNsYqoyxdK8";
       let res = await fetch(url)
        let data = await res.json();
        document.querySelector("#serr").innerHTML = "Search resuls for :"+"'"+ser1+"'"
        append(data.items);
        console.log(data.items);
    }

    let append = (data) => {
        let container = document.getElementById("vid");
        container.innerHTML = ""

        // console.log(data);
        //data.forEach((el) => { el.id.videoId/ el.snippet.title
        data.forEach(({ id: { videoId }, snippet: { title, thumbnails } }) => {

            let div = document.createElement("div");
            div.addEventListener("click",function(){
                video1(videoId,title)
            })
            let iframe = document.createElement("img");
            iframe.src = thumbnails.high.url;
            //iframe.allow = "fullscreen";
            let h3 = document.createElement("h4");
            h3.innerText = title;

            div.append(iframe, h3);
            container.append(div)

        });
    };

    function video1(videoId,title)
    {
        var ar = [videoId,title]
        localStorage.setItem("movietp",JSON.stringify(ar))
        window.open("video.html","_self")
    }

