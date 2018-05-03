let urlParams = new URLSearchParams(window.location.search);

let id = urlParams.get("id");
console.log("Getting Article:" + id);

let backtohome = document.querySelector("#logo");

backtohome.addEventListener("click",homepage);

function homepage(){
    console.log("Refresh");
    window.location="../index.html";
}

fetch("http://linlines.dk/wordpress/wp-json/wp/v2/event/" +id + "?_embed")
.then(e=>e.json())
.then(showSingleArticle)

function showSingleArticle(AnArticle){
console.log(AnArticle);

let year = AnArticle.acf.date.substring(0, 4);
let month = AnArticle.acf.date.substring(4, 6);
let day = AnArticle.acf.date.substring(6, 8);

    document.querySelector("#SingleEvent h1").textContent=AnArticle.title.rendered;
    document.querySelector("#SingleEvent h2 span").textContent = AnArticle.acf.price;
    document.querySelector(".description").innerHTML = AnArticle.content.rendered;
    document.querySelector("#SingleEvent h2.venue span").textContent = AnArticle.acf.venue;
    document.querySelector("#SingleEvent h2.genre span").textContent = AnArticle.acf.genre;
    document.querySelector("#SingleEvent h2.date span").innerHTML = day + "." + month + "." + year;
    document.querySelector("#SingleEvent h2.time span").textContent = AnArticle.acf.time;

    if(AnArticle._embedded["wp:featuredmedia"]){
        document.querySelector("#eventimg").setAttribute("src", AnArticle._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url);
    }   else{
        document.querySelector("#eventimg").remove();
    }

}
