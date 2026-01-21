// TODO: Los alumnos deben completar este código

// 1. Obtener elementos del HTML
const pokemonInput = document. getElementById('pokemonInput');
const buscarBtn = document.getElementById('buscarBtn');
const loading = document.getElementById('loading');
const error = document.getElementById('error');
const resultado = document.getElementById('resultado');

// 2. Función asíncrona para buscar Pokémon
async function buscarPokemon() {
    // TODO: Paso 1 - Obtener el valor del input
    const nombrePokemon =pokemonInput.value.trim().toLowerCase(); // COMPLETAR
    
    // TODO: Paso 2 - Validar que no esté vacío
    if (nombrePokemon === '') {
        // Mostrar mensaje de error
        mostrarError("El campo no puede estar vacio");
        return;
    }
    
    // TODO: Paso 3 - Mostrar "Buscando..." y ocultar resultado y error
    // loading.classList.remove('hidden');
    // resultado.classList.add('hidden');
    // error.classList.add('hidden');
    loading.classList.remove("hidden");
    resultado.classList.add("hidden");
    error.classList.add("hidden");
    
    try {
        // TODO: Paso 4 - Crear la URL de la API
        const url =`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;
        
        // TODO: Paso 5 - Hacer la petición con fetch y await
        const respuesta = await fetch(url); // COMPLETAR:  await fetch(url)
        
        // TODO: Paso 6 - Verificar si la respuesta es correcta
        if (!respuesta.ok) {
            throw new Error('Pokémon no encontrado');
        }
        
        // TODO:  Paso 7 - Convertir la respuesta a JSON
        const datos =await respuesta.json(); // COMPLETAR: await respuesta.json()
        
        // TODO: Paso 8 - Llamar a la función para mostrar el Pokémon
        mostrarPokemon(datos);
        
    } catch (err) {
        // TODO: Paso 9 - Mostrar el error
        mostrarError('Pokémon no encontrado. Intenta con otro nombre.');
    } finally {
        // TODO:  Paso 10 - Ocultar el mensaje de "Buscando..."
        // loading.classList.add('hidden');
        loading.classList.add("hidden");
    }
}

// 3. Función para mostrar el Pokémon
function mostrarPokemon(pokemon) {
    // TODO: Ocultar loading y error
    loading.classList.add("hidden");
    error.classList.add("hidden");
    // TODO: Mostrar el resultado
    // resultado.classList.remove('hidden');
    resultado.classList.remove("hidden");
    // TODO: Actualizar la imagen
    // document.getElementById('pokemonImg').src = pokemon.sprites.front_default;
    document.getElementById("pokemonImg").src=pokemon.sprites.front_default;
    // TODO: Actualizar el nombre
    // document.getElementById('pokemonNombre').textContent = pokemon.name;
    document.getElementById("pokemonNombre").textContent=pokemon.name;
    // TODO:  Actualizar el ID
    // document.getElementById('pokemonId').textContent = 'N° ' + pokemon.id;
    document.getElementById("pokemonId").textContent="Nº"+pokemon.id;
}

// 4. Función para mostrar errores
function mostrarError(mensaje) {
    // TODO: Ocultar loading y resultado
    loading.classList.add("hidden");
    resultado.classList.add("hidden");
    // TODO:  Mostrar el error
    // error.classList. remove('hidden');
    // error.textContent = mensaje;
    error.classList.remove("hidden");
    error.textContent=mensaje;
}

// 5. Agregar evento al botón
buscarBtn.addEventListener('click', buscarPokemon);

// 6. Agregar evento para buscar al presionar Enter
pokemonInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        buscarPokemon();
    }
});