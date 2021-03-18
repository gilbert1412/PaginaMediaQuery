
let menu=document.getElementById("menu-bar");
let li_menu=document.getElementsByClassName("nav-enlaces")[0];
let contador=true;
menu.addEventListener("click",function(){
   
   if(contador){
    alert("si entro");
    li_menu.classList.add('nav-enlaces-visible');
    contador=false;
   }else{
    li_menu.classList.add('nav-enlaces-no-visible');
    contador=true;
   }
});