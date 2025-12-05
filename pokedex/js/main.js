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

class Pokemon{
    constructor(nombre,descripcion,nivel,tipo,url){
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.nivel=nivel;
        this.tipo=tipo;
        this.url=url;
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
    new Pokemon("Bulbasaur","Planta/veneno que empieza con lianas",12,"planta","img/bulbasaur.png"),
    new Pokemon("Charmander","Lagartija de fuego muy enérgica",14,"fuego","img/charmander.png"),
    new Pokemon("Chikorita","Hoja dulce con aroma calmante",11,"planta","img/chikorita.png"),
    new Pokemon("Eevee","Normal adaptable a muchas evoluciones",10,"normal","img/eevee.png"),
    new Pokemon("Flareon","Evolución de Eevee cargada de fuego",18,"fuego","img/flareon.png"),
    new Pokemon("Jolteon","Evolución eléctrica de Eevee",18,"electrico","img/jolteon.png"),
    new Pokemon("Mareep","Oveja lanuda que acumula estática",13,"electrico","img/mareep.png"),
    new Pokemon("Pikachu","Ratón eléctrico carismático",15,"electrico","img/pikachu.png"),
    new Pokemon("Squirtle","Tortuga de agua tranquila",12,"agua","img/squirtle.png"),
    new Pokemon("Vaporeon","Evolución acuática de Eevee",18,"agua","img/vaporeon.png"),
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
        const image_poke=document.createElement("img");
        image_poke.src=pokemon.url;
        const nombre=document.createElement("h2");
        nombre.textContent=pokemon.nombre;
        const pDescripcion=document.createElement("p");
        pDescripcion.textContent=pokemon.descripcion;
        const pNivel=document.createElement("p");
        pNivel.textContent=pokemon.nivel;
        const pTipo=document.createElement("p");
        pTipo.textContent=pokemon.tipo;

        div_poke.appendChild(nombre);
        div_poke.appendChild(image_poke);
        div_poke.appendChild(pDescripcion);
        div_poke.appendChild(pNivel);
        div_poke.appendChild(pTipo);

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
    crear_tarjetas(lista_pokemon);
});
