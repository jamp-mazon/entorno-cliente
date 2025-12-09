/*
 * PROYECTO POKÉDEX - ARCHIVO DEL ALUMNADO
 *
 * OBJETIVO GENERAL:
 * - Mostrar una galería de Pokémon usando HTML + CSS + JavaScript.
 *
 * PISTAS GENERALES:
 * 1. Crea una estructura de datos (por ejemplo, un array) con varios Pokémon.
 *    Cada Pokémon puede ser un objeto con propiedades como:
 *    - nombre
 *    - descripcion
 *    - nivel
 *    - tipo
 *    - rutaImagen (usa las imágenes de la carpeta img).
*/


/*
 * 2. Recorre ese array con un bucle (for, for...of, etc.).
 *
 * 3. Por cada Pokémon:
 *    - Crea un elemento contenedor (por ejemplo, un div).
 *    - Añade la clase "pokemon-card" para aplicar estilos desde el CSS.
 *    - Crea y añade los elementos necesarios (img, h2, p, etc.).
 *
 * 4. Inserta cada tarjeta dentro del contenedor con id "pokedex"
 *    (lo tienes definido en el index.html).
 *
 * IMPORTANTE:
 * - Usa solo lo que hemos visto en clase (nada de frameworks ni cosas avanzadas).
 * - Si te atascas, repasa los ejemplos hechos en clase antes de mirar internet.
 */
// PISTA: espera a que el documento esté cargado antes de tocar el DOM
document.addEventListener("DOMContentLoaded", function () {
    // PISTA: selecciona el contenedor donde irán las tarjetas
    const pokedexContainer = document.getElementById("pokedex");
    const nav_botones_tipo= document.getElementById("nav_botones_tipo");
    

class Pokemon{
    constructor(nombre,descripcion,nivel,tipo,url){
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.nivel=nivel;
        this.tipo=tipo;
        this.url=url;
        this.favorito=false;
    }
}

    /*
     * PASO 1: CREA TU ARRAY DE POKÉMON
     *
     * PISTA:
     * - Crea un array llamado, por ejemplo, "pokemons".
     * - Cada elemento será un objeto con la información del Pokémon.
     * - Ejemplo de estructura (no lo copies tal cual, créalo tú):
     *   {
     *      nombre: "Pikachu",
     *      numero: 25,
     *      tipo: "Eléctrico",
     *      imagen: "img/pikachu.png"
     *   }
     */

    // const pokemons = [  ];
    // PISTA: define aquí dentro tus Pokémon
const lista_pokemon = [
    new Pokemon("Bulbasaur", "Planta/veneno que empieza con lianas", 12, "planta", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"),
    new Pokemon("Charmander", "Lagartija de fuego muy enérgica", 14, "fuego", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"),
    new Pokemon("Chikorita", "Hoja dulce con aroma calmante", 11, "planta", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/152.png"),
    new Pokemon("Eevee", "Normal adaptable a muchas evoluciones", 10, "normal", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png"),
    new Pokemon("Flareon", "Evolución de Eevee cargada de fuego", 18, "fuego", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png"),
    new Pokemon("Jolteon", "Evolución eléctrica de Eevee", 18, "electrico", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png"),
    new Pokemon("Mareep", "Oveja lanuda que acumula estática", 13, "electrico", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/179.png"),
    new Pokemon("Pikachu", "Ratón eléctrico carismático", 15, "electrico", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"),
    new Pokemon("Squirtle", "Tortuga de agua tranquila", 12, "agua", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"),
    new Pokemon("Vaporeon", "Evolución acuática de Eevee", 18, "agua", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png")
];
    /*
     * PASO 2: RECORRER EL ARRAY Y CREAR LAS TARJETAS
     *
     * PISTA:
     * - Usa un bucle para recorrer el array de pokemons.
     * - Dentro del bucle:
     *   - Crea un div para la tarjeta.
     *   - Añade la clase "pokemon-card".
     *   - Crea elementos para la imagen, el nombre y otros datos.
     *   - Rellena el contenido de cada elemento con la información del Pokémon.
     *   - Añade la imagen usando la ruta de la carpeta img.
     *   - Añade la tarjeta al contenedor pokedexContainer.
     */
function crear_tarjetas(lista_pokemon) {
    pokedexContainer.innerHTML="";
    for (const pokemon of lista_pokemon) {
        
        const div_poke=document.createElement("div");
        div_poke.classList.add("pokemon-card");
        if (pokemon.favorito) {
            div_poke.classList.add("favorito");   
        }
        div_poke.setAttribute("data-tipo",pokemon.tipo);
        if (pokemon.tipo === "planta") {
            div_poke.classList.add("pokemon-card-planta");
        }
        else if (pokemon.tipo === "fuego") {
        div_poke.classList.add("pokemon-card-fuego");

        }
        else if (pokemon.tipo === "agua") {
        div_poke.classList.add("pokemon-card-agua");

        }
        else if (pokemon.tipo === "electrico") {
        div_poke.classList.add("pokemon-card-electrico");

        }
        else if (pokemon.tipo === "normal") {
        div_poke.classList.add("pokemon-card-normal");

        }                
        const image_poke=document.createElement("img");
        image_poke.src=pokemon.url;
        const nombre=document.createElement("h2");
        nombre.textContent=pokemon.nombre;
        const pDescripcion=document.createElement("p");
        pDescripcion.textContent=pokemon.descripcion;
        const pNivel=document.createElement("p");
        pNivel.textContent="LVL:"+pokemon.nivel;
        if (pokemon.nivel < 15) {
          pNivel.classList.add("pokemon-card-diez");
        } else if (pokemon.nivel > 14) {
          pNivel.classList.add("pokemon-card-quince");
        }
        const pTipo = document.createElement("p");
        if (pokemon.tipo === "planta") {
          pTipo.textContent = "Planta";
          pTipo.classList.add("pokemon-tipo-planta");
        }
        else if (pokemon.tipo === "fuego") {
          pTipo.textContent = "Fuego";
          pTipo.classList.add("pokemon-tipo-fuego");
        }
        else if (pokemon.tipo === "agua") {
          pTipo.textContent = "Agua";
          pTipo.classList.add("pokemon-tipo-agua");
        }
        else if (pokemon.tipo === "electrico") {
          pTipo.textContent = "Eléctrico";
          pTipo.classList.add("pokemon-tipo-electrico");
        }
        else if (pokemon.tipo === "normal") {
          pTipo.textContent = "Normal";
          pTipo.classList.add("pokemon-tipo-normal");
        }
        const btn_favorito=document.createElement("button");
        btn_favorito.textContent="Favorito";
        btn_favorito.setAttribute("data-nombre",pokemon.nombre);        
        btn_favorito.classList.add("btn_favorito");
        const div_boton=document.createElement("div");
        div_boton.classList.add("div-boton");
        div_poke.appendChild(image_poke);
        div_poke.appendChild(nombre);
        div_poke.appendChild(pDescripcion);
        div_poke.appendChild(pNivel);
        div_poke.appendChild(pTipo);
        div_boton.appendChild(btn_favorito);
        div_poke.appendChild(div_boton);

        pokedexContainer.appendChild(div_poke);

    }
}
    // PISTA: escribe aquí tu bucle cuando tengas el array creado
    // for ( ... ) {
    //     // Dentro del bucle creas la tarjeta
    // }

    /*
     * EXTRA (OPCIONAL):
     * - Puedes añadir filtros por tipo de Pokémon.
     * - Puedes mostrar el número de Pokémon totales.
     * - Puedes ordenar el array por número o nombre antes de pintarlo.
     * Estos extras solo si te sobra tiempo y ya tienes lo básico funcionando.
     */
    // pokedexContainer.addEventListener("mousemove",function (event) {
    //     if (event.target.className!=="pokemon-card") {
    //         return;
    //     }
    //     else{
    //         console.log("Entro dentro del else")
    //             const tipo_div=event.target.getAttribute("data-tipo");
    //             console.log(tipo_div);
    //             if (tipo_div.includes("planta")) {
    //                 event.target.classList.add("pokemon-card-planta");
    //             }
    //     }

    // })
    const lista_poke_fav=[];
    pokedexContainer.addEventListener("click",function (event) {
        for (const pokemon of lista_pokemon) {
            if (event.target.tagName!=="BUTTON") {
                return;
            }
            else{
                const nombre_poke=event.target.getAttribute("data-nombre");
                if (pokemon.nombre.includes(nombre_poke)) {
                    lista_poke_fav.push(pokemon);
                    pokemon.favorito=true;

                }
            }
        }
    });
    console.log(lista_poke_fav);
    const bton_favorito=document.getElementById("favoritos");
    bton_favorito.addEventListener("click",function () {
            crear_tarjetas(lista_poke_fav);
    })

    const buscardor_poke=document.getElementById("buscardor_poke");
    buscardor_poke.addEventListener("input",function (event) {
        const lista_poke_filtro=[];
        for (const pokemon of lista_pokemon) {
            if (pokemon.nombre.toLowerCase().includes(event.target.value.toLowerCase())) {
                lista_poke_filtro.push(pokemon);
            }
        }
        crear_tarjetas(lista_poke_filtro);
    })
    nav_botones_tipo.addEventListener("click",function (event) {
        const lista_filtrada_poke=[];
        if (event.target.tagName!=="BUTTON") {
            return;
        }
        else{
            const nombre_boton=event.target.getAttribute("data-id");

            switch (nombre_boton) {
                case "todos": 
                    for (const pokemon of lista_pokemon) {
                        lista_filtrada_poke.push(pokemon);
                    }
                    break;
                case "fuego": 
                    for (const pokemon of lista_pokemon) {
                        if (pokemon.tipo==="fuego") {
                            lista_filtrada_poke.push(pokemon);
                        }
                    }
                    break;                    
                case "agua": 
                    for (const pokemon of lista_pokemon) {
                        if (pokemon.tipo==="agua") {
                            lista_filtrada_poke.push(pokemon);
                        }
                    }
                    break; 
                case "planta": 
                    for (const pokemon of lista_pokemon) {
                        if (pokemon.tipo==="planta") {
                            lista_filtrada_poke.push(pokemon);
                        }
                    }
                    break; 
                case "electrico": 
                    for (const pokemon of lista_pokemon) {
                        if (pokemon.tipo==="electrico") {
                            lista_filtrada_poke.push(pokemon);
                        }
                    }
                    break;
                case "normal": 
                    for (const pokemon of lista_pokemon) {
                        if (pokemon.tipo==="normal") {
                            lista_filtrada_poke.push(pokemon);
                        }
                    }
                    break;                                                                              
                default:
                    break;
            }
            crear_tarjetas(lista_filtrada_poke);
        }
    })
    crear_tarjetas(lista_pokemon);
});
