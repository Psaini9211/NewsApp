

async function getData() {
    var res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=09444bb12c6f4b44b90516c1298a25c1`);
    
    var data = await res.json()
  
    console.log(data)
   return data.articles
}


var main_div = document.getElementById("letest");
function append() {
    var news = getData();
   
    news.then(ele => {
         console.log(ele)
        ele.forEach(element => {
            //content div
            var content_div = document.createElement("div");
            content_div.classList.add("content_div")
            
           


            var title_div = document.createElement("div");
            title_div.classList.add("title_div")
            //title
            var news_div = document.createElement("div");
            news_div.classList.add("news_div")
            news_div.innerHTML = element.title;

         
            function newsPage() {
                
                 localStorage.setItem(`title_next`, `${element.title}`)
                window.location.href = "../html/news.html"
            }
            content_div.addEventListener("click", newsPage)

            //author
            var author = document.createElement("p");
            author.innerHTML = element.author


            //time
            var time = document.createElement("p");
            time.innerHTML = element.publishedAt

            //image div
            var image_div = document.createElement("div");
            var image = document.createElement("img")
            image.src = element.urlToImage

            //append
            title_div.append(news_div, author, time)
            image_div.append(image)
            content_div.append(title_div, image_div)
            main_div.append(content_div)
     });
    } )
   
 
    
}
append();