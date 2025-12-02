const menu=document.getElementById("menu");
const btn_menu=document.getElementById("btn-menu");
const ulPanel=document.getElementById("panel");

document.addEventListener("click",function () {
    if (ulPanel.style.display=="block") {
        ulPanel.style.display="none";
    }
});
btn_menu.addEventListener("click",function () {
    if (ulPanel.style.display=="none") {
        ulPanel.style.display="block";
    }
    else{
        ulPanel.style.display="none";
    }
})
