const btnMenu = document.querySelector("#imgMenu");
const  menu = document.querySelector(".menu");

btnMenu.addEventListener('click', ()=>{
    menu.classList.toggle('active');
})

