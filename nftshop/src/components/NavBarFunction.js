const btn = document.getElementById("menu-btn");
const menu = document.getElementById("sidemenu");
const btnsubmenu = document.getElementById("btn-submenu");


btn.addEventListener('click', e =>{
    menu.classList.toggle("menu-expanded");
    menu.classList.toggle("menu-collapsed");  
});



btnsubmenu.addEventListener('click', e =>{
    submenu.classList.toggle("submenu");
  
});

