// 2) Palabras
const palabras = ["casa", "perro", "sol", "murciélago", "js", "programacion", "a", "CSS"];

/**
 * Nivel 2

De palabras, quédate con las que tengan longitud >= 4.

De palabras, quédate con las que empiecen por "p" (sin distinguir mayúsculas/minúsculas).
 */
const mas4=palabras.filter(palabra=>palabra.length>=4);
console.log("Palabras con mas de 4 letras");
console.log(mas4);

const empiezaP=palabras.filter(palabra=>{
    palabra=palabra.toLocaleLowerCase()
    if (palabra[0]==="p") {
        return palabra;
    }
});
console.log("Palabras que empiecen por p");
console.log(empiezaP);