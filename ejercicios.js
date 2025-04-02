// Taller de JavaScript Completo - Versión Consolidada

/**************************************
 * 1. Sintaxis, variables y tipos de datos
 *************************************/
// URL oficial: https://developer.mozilla.org/es/docs/Web/JavaScript

// Comentarios
/* Esto es un comentario 
   multilínea */

// Variables y constantes
let variable = "puede cambiar";
const constante = "no cambia";

// Tipos de datos
const cadena = "texto";
const numero = 42;
const booleano = true;
const nulo = null;
const indefinido = undefined;
const simbolo = Symbol('descripcion');
const objeto = { clave: "valor" };
const array = [1, 2, 3];

// Hola mundo
console.log("¡Hola, JavaScript!");

/**************************************
 * 2. Operadores y estructuras de control
 *************************************/
// Operadores aritméticos
console.log(10 + 5);  // 15
console.log(10 - 5);  // 5
console.log(10 * 5);  // 50
console.log(10 / 5);  // 2
console.log(10 % 3);  // 1 (módulo)
console.log(2 ** 3);  // 8 (exponenciación)

// Operadores de comparación
console.log(5 == "5");   // true (igualdad)
console.log(5 === "5");  // false (igualdad estricta)
console.log(5 != "5");   // false
console.log(5 !== "5");  // true
console.log(5 > 3);      // true
console.log(5 < 3);      // false

// Operadores lógicos
console.log(true && false); // AND: false
console.log(true || false); // OR: true
console.log(!true);        // NOT: false

// Estructuras condicionales
if (true) {
    console.log("Se ejecuta");
} else {
    console.log("No se ejecuta");
}

// Operador ternario
const resultado = (5 > 3) ? "mayor" : "menor";
console.log(resultado);

// Switch
const dia = "lunes";
switch (dia) {
    case "lunes":
        console.log("Inicio de semana");
        break;
    case "viernes":
        console.log("Fin de semana");
        break;
    default:
        console.log("Día normal");
}

// Bucles
for (let i = 0; i < 3; i++) {
    console.log("For:", i);
}

let j = 0;
while (j < 3) {
    console.log("While:", j);
    j++;
}

/**************************************
 * 3. Funciones y alcance
 *************************************/
// Función básica
function saludar(nombre) {
    return `Hola, ${nombre}`;
}
console.log(saludar("Juan"));

// Función flecha
const sumar = (a, b) => a + b;
console.log(sumar(2, 3));

// Alcance de variables
let global = "soy global";

function mostrarAlcance() {
    let local = "soy local";
    console.log(global); // Accede a global
    console.log(local);  // Accede a local
}
mostrarAlcance();

/**************************************
 * 4. Estructuras de datos
 *************************************/
// Arrays
const frutas = ["manzana", "banana"];
frutas.push("naranja"); // Añadir
frutas.pop();           // Quitar último
console.log(frutas[0]); // Acceder

// Objetos
const persona = {
    nombre: "Ana",
    edad: 25,
    saludar: function() {
        return `Hola, soy ${this.nombre}`;
    }
};
console.log(persona.saludar());

// Set (valores únicos)
const miSet = new Set([1, 2, 2, 3]);
console.log(miSet); // Set(3) {1, 2, 3}

// Map (diccionario)
const miMap = new Map();
miMap.set("clave", "valor");
console.log(miMap.get("clave")); // "valor"

/**************************************
 * 5. Manipulación de cadenas
 *************************************/
const texto = "JavaScript";

console.log(texto.length);        // 10
console.log(texto.toUpperCase()); // JAVASCRIPT
console.log(texto.substring(0, 4)); // Java
console.log(texto.includes("Script")); // true
console.log(texto.split("a"));    // ["J", "v", "Script"]

/**************************************
 * 6. Valor vs Referencia
 *************************************/
// Tipos primitivos (valor)
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 (no cambia)

// Objetos (referencia)
let obj1 = { valor: 10 };
let obj2 = obj1;
obj2.valor = 20;
console.log(obj1.valor); // 20 (cambia)

/**************************************
 * 7. Recursividad
 *************************************/
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120

/**************************************
 * 8. Pilas y Colas
 *************************************/
// Pila (LIFO)
const pila = [];
pila.push(1); // Añadir
pila.push(2);
console.log(pila.pop()); // Quitar (2)

// Cola (FIFO)
const cola = [1, 2];
cola.push(3); // Añadir
console.log(cola.shift()); // Quitar (1)

/**************************************
 * 9. Clases
 *************************************/
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    
    hacerSonido() {
        return "Sonido genérico";
    }
}

class Perro extends Animal {
    hacerSonido() {
        return "¡Guau!";
    }
}

const miPerro = new Perro("Max");
console.log(miPerro.hacerSonido());

/**************************************
 * 10. Módulos (CommonJS)
 *************************************/
// Exportar (simulado)
function sumar(a, b) { return a + b; }
module.exports = { sumar };

// Importar (simulado)
const { sumar: importarSumar } = require('./taller.js');
console.log(importarSumar(2, 2));

/**************************************
 * 11. Manejo de errores
 *************************************/
try {
    throw new Error("Algo salió mal");
} catch (error) {
    console.error("Error capturado:", error.message);
} finally {
    console.log("Siempre se ejecuta");
}

/**************************************
 * 12. Asincronía
 *************************************/
// Callback
function obtenerDatos(callback) {
    setTimeout(() => callback(null, "Datos"), 100);
}
obtenerDatos((err, datos) => console.log(datos));

// Promesa
function promesaDatos() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Datos con promesa"), 100);
    });
}
promesaDatos().then(console.log);

// Async/Await
async function obtenerAsync() {
    const datos = await promesaDatos();
    console.log(datos);
}
obtenerAsync();

/**************************************
 * 13. JSON
 *************************************/
const jsonStr = '{"nombre":"Carlos","edad":30}';
const objJson = JSON.parse(jsonStr);
console.log(objJson.nombre); // Carlos
console.log(JSON.stringify(objJson)); // Convierte a JSON

/**************************************
 * 14. Expresiones regulares
 *************************************/
const regex = /(\w+)\s(\w+)/;
const nombreCompleto = "Juan Pérez";
const resultadoRegex = nombreCompleto.replace(regex, '$2, $1');
console.log(resultadoRegex); // Pérez, Juan

/**************************************
 * 15. Métodos de arrays
 *************************************/
const numeros = [1, 2, 3, 4];

console.log(numeros.map(n => n * 2));    // [2, 4, 6, 8]
console.log(numeros.filter(n => n > 2)); // [3, 4]
console.log(numeros.reduce((a, b) => a + b)); // 10

/**************************************
 * 16. Desestructuración
 *************************************/
const [primero, segundo] = [1, 2];
console.log(primero); // 1

const { nombre: nombrePersona } = { nombre: "Ana", edad: 25 };
console.log(nombrePersona); // Ana

/**************************************
 * 17. Operador spread/rest
 *************************************/
// Spread
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2); // [1, 2, 3, 4]

// Rest
function sumar(...nums) {
    return nums.reduce((a, b) => a + b);
}
console.log(sumar(1, 2, 3)); // 6

/**************************************
 * 18. Programación funcional
 *************************************/
// Funciones puras
function pura(a, b) {
    return a + b;
}

// Inmutabilidad
const original = [1, 2, 3];
const copia = [...original, 4];

/**************************************
 * 19. Proxy
 *************************************/
const objetivo = {};
const manejador = {
    get: function(obj, prop) {
        return prop in obj ? obj[prop] : `Propiedad ${prop} no existe`;
    }
};
const proxy = new Proxy(objetivo, manejador);
console.log(proxy.nombre); // "Propiedad nombre no existe"

/**************************************
 * 20. Generadores
 *************************************/
function* generadorId() {
    let id = 1;
    while (true) {
        yield id++;
    }
}
const gen = generadorId();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2

console.log("¡Fin!");