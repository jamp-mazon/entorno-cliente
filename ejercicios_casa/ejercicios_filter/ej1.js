// 1) Números Nivel 1

//Saca de nums solo los pares.

//Saca de nums solo los mayores que 5.

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -2, 0, 15];

const pares=nums.filter(num=>num %2===0);

const mas5=nums.filter(num=>num>5);

console.log("Pares");
console.log(pares);

console.log("Mayores 5");
console.log(mas5);
