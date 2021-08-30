function handleMenu()
{
const menuMobile = document.querySelector(".menu-mobile");
const menu = document.querySelector(".header-menu");
if (!menuMobile || !menu ) return;
menuMobile.addEventListener("click", function () {
    menu.classList.add("is-active");
});

document.addEventListener("click", function(e){
    if(!menu.contains(e.target) && !e.target.matches(".menu-mobile")) {
        menu.classList.remove("is-active");
    }
});

}

handleMenu();   