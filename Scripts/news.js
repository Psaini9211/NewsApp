





async function getData() {
    var res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=09444bb12c6f4b44b90516c1298a25c1`);
    
    var data = await res.json()
  
   return data.articles
}
const title_clicked = localStorage.getItem('title_next');

var main_div = document.getElementById("news_page");
function append() {
    var news = getData();
   
    news.then(ele => {
          
        console.log(ele)
        ele.forEach(element => {
            if (element.title == title_clicked) {
                var title_div = document.createElement("h1")
                title_div.innerText = element.title
                
                
                var author = document.createElement("div")
                author.innerHTML = element.author + " " + "/" + " " + element.publishedAt


                var image = document.createElement("img")
                image.src = element.urlToImage
                 

                var description = document.createElement("p")
                description.innerText = element.content


                main_div.append(title_div, author, image, description)
            }
        });
            
    } )
   
 
    
}
append();