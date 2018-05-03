//*window.addEventListener('load',()=>{*//
    //*let menuOpen = false;*//
    let catMenu = document.querySelector("#cat")
    let menu = document.querySelector(".menu");
    catMenu.addEventListener('click', toggleMenu);

    function toggleMenu(){
        console.log("open menu");
        //*menuOpen = !menuOpen;*//
        menu.classList.toggle("hidden");
    }


fetch("http://linlines.dk/wordpress/wp-json/wp/v2/categories")
.then(e=>e.json())
.then(DisplayCat)

function DisplayCat(data){
let parentElement = document.querySelector(".menu ul");
data.forEach(item => {
    console.log(item);
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.textContent = item.name;
    a.href="index.html?category="+item.id;


    li.appendChild(a);
    parentElement.appendChild(li);



})
}
