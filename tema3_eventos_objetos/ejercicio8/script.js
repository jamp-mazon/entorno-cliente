const item=document.getElementById("item");
const zona=document.getElementById("zona");

item.addEventListener("dragstart",function () {
    
})
zona.addEventListener("dragover",function () {
    event.preventDefault();    
})
zona.addEventListener("drop",function () {
    event.preventDefault();
    zona.appendChild(item);
})
