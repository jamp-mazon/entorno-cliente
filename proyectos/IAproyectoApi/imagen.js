const HF_TOKEN = "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";

// Importamos el módulo 'fs' para trabajar con el sistema de archivos (leer/escribir archivos)
const fs = require("fs");

// Función asincrónica para hacer la petición a la API de HuggingFace
async function query(data) {
	// Hacemos la petición POST con fetch, enviando los datos en formato JSON y el token de autorización
	const response = await fetch(
		"https://router.huggingface.co/nscale/v1/images/generations",
		{
			headers: {
				Authorization: `Bearer ${HF_TOKEN}`, // Token de autorización para la API
				"Content-Type": "application/json", // Indicamos que enviamos JSON
			},
			method: "POST", // Método HTTP POST
			body: JSON.stringify(data), // Convertimos el objeto 'data' a cadena JSON para enviarlo
		}
	);
	// Esperamos la respuesta y la convertimos a JSON para poder manipularla fácilmente
	const result = await response.json();
	return result; // Devolvemos la respuesta JSON al llamar a esta función
}

// Llamamos a la función 'query' con los parámetros necesarios para generar la imagen
query({
	response_format: "b64_json", // Indicamos que queremos la imagen en base64 (string codificado)
	prompt: "\"Astronaut riding a horse\"", // El texto que describe la imagen a generar
	model: "stabilityai/stable-diffusion-xl-base-1.0", // El modelo que usaremos para generar la imagen
}).then((response) => {
	// Mostramos por consola toda la respuesta JSON para verificar que todo está correcto
	console.log("Respuesta JSON:", response);

	// Extraemos el string base64 que contiene la imagen generada (primer elemento del array 'data')
	const b64 = response.data[0].b64_json;

	// Convertimos la cadena base64 en un buffer de datos binarios para poder guardarla como archivo
	const buffer = Buffer.from(b64, "base64");

	// Guardamos el buffer como archivo PNG en el disco con nombre 'salida.png'
	fs.writeFileSync("salida.png", buffer);

	// Indicamos por consola que la imagen se ha guardado correctamente
	console.log("Imagen guardada como salida.png");
});