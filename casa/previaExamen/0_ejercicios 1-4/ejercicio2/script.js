class Biblioteca{
    constructor(lista_peliculas){
        this.lista_peliculas=lista_peliculas;
    }
}
class Pelicula{
    constructor(titulo,director,anio,vistas){
        this.titulo=titulo;
        this.director=director;
        this.anio=anio;
        this.vistas=vistas;
    }

}
const inpPeli=document.getElementById("inpPeli");
const preview=document.getElementById("preview");
const ulPelis=document.getElementById("listaPelis");
const lista_peliculas=[];
inpPeli.addEventListener("keydown",function (event) {
    if (event.key!=="Enter") {
        return;
    }
    else{

        let textoPelicula=inpPeli.value.trim().split("-");
        const pelicula=new Pelicula(textoPelicula[0],textoPelicula[1],textoPelicula[2],0);
        lista_peliculas.push(pelicula);
        
        let li=document.createElement("li");
        li.textContent=pelicula.titulo+" "+pelicula.director+" "+pelicula.anio+" "+pelicula.vistas;
        
        let btn_vista=document.createElement("button");
        btn_vista.textContent="vistas";
        li.appendChild(btn_vista);

        
        btn_vista.addEventListener("click",function () {
            let contador=Number(pelicula.vistas);
            contador++;
            pelicula.vistas=contador;
            li.textContent=pelicula.titulo+" "+pelicula.director+" "+pelicula.anio+" "+pelicula.vistas;
            li.appendChild(btn_vista);
        });

        ulPelis.appendChild(li);
        inpPeli.value="";
        preview.textContent="";            
    }
});

inpPeli.addEventListener("keyup",function () {
    preview.textContent=inpPeli.value;
})