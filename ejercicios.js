// https://developer.mozilla.org/es/docs/Web/JavaScript

// Punto 1 - declaración de variables y constantes
let edad = 25;
const nombre = "Deivy";

// Punto 1 - tipos de datos primitivos en JavaScript
const entero = 12;
const float = 12.5;
const string = "Hola";
const booleano = true;
const nulo = null;
const indefinido = undefined;
const simbolo = Symbol("simbolo");
const bigInt = 12345678901234567890n;

// Punto 1 - imprimir "Hola, JavaScript!" en la consola
console.log("¡Hola, JavaScript!");

// Punto 2 - Operadores y estructuras de control
let suma = entero + float;
let resta = entero - float;
let multiplicacion = entero * float;
let division = entero / float;
let modulo = entero % 5;
let exponente = entero ** 2;

console.log(suma, resta, multiplicacion, division, modulo, exponente);

// Operadores de comparación
console.log(entero > float, entero < float, entero == "12", entero === "12");

// Operadores lógicos
console.log(booleano && false, booleano || false, !booleano);

// Condicionales
if (booleano) {
    console.log("La condición es verdadera");
} else {
    console.log("La condición es falsa");
}

// Estructuras iterativas
for (let i = 0; i < 5; i++) {
    console.log("Iteración:", i);
}

let contador = 0;
while (contador < 3) {
    console.log("Contador:", contador);
    contador++;
}

// Excepciones
try {
    let resultado = 10 / 0;
    if (!isFinite(resultado)) throw new Error("División por cero");
} catch (error) {
    console.log("Error:", error.message);
}

// Punto 3 - Funciones y alcance
function saludar(nombre) {
    return `¡Hola, ${nombre}!`;
}

console.log(saludar("Deivy"));

// Variables locales y globales
let globalVar = "Soy global";

function mostrarVariable() {
    let localVar = "Soy local";
    console.log(globalVar);
    console.log(localVar);
}

mostrarVariable();
// console.log(localVar); // Error: localVar is not defined

// Punto 4 - Estructuras de datos
const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Bogotá"
};
const lista = [1, 2, 3, 4, 5];
lista.push(6);
lista.pop();
console.log(lista);

// Punto 5 - Cadenas de caracteres
let texto = "JavaScript";
console.log(texto.length);
console.log(texto.toUpperCase());

// Punto 6 - Valor y referencia
let obj1 = { clave: "valor" };
let obj2 = obj1;
obj2.clave = "nuevo valor";
console.log(obj1);

// Punto 7 - Recursividad
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5));

// Punto 8 - Pilas y colas
class Pila {
    constructor() {
        this.items = [];
    }
    push(elemento) {
        this.items.push(elemento);
    }
    pop() {
        return this.items.pop();
    }
}

const pila = new Pila();
pila.push(10);
pila.push(20);
console.log(pila.pop());

// Punto 9 y 10 - Clases, herencia y polimorfismo
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
class Estudiante extends Persona {
    constructor(nombre, edad, curso) {
        super(nombre, edad);
        this.curso = curso;
    }
}

const estudiante = new Estudiante("Ana", 22, "Matemáticas");
console.log(estudiante);

// Punto 11 - Excepciones (mejorado)
try {
    throw new Error("Error personalizado");
} catch (error) {
    console.log("Error capturado:", error.message);
}

// Punto 12 - Manejo de ficheros
const fs = require('fs');
fs.writeFileSync('archivo.txt', 'Hola, archivo');

// Punto 13 - JSON y XML
const json = JSON.stringify(persona);
console.log(json);

// Punto 14 - Pruebas unitarias
const assert = require('assert');
assert.strictEqual(suma(2, 3), 5);

// Punto 15 - Fechas
const fecha = new Date();
console.log(fecha);

// Punto 16 - Asincronía
async function obtenerDatos() {
    return "Datos obtenidos";
}

// Punto 17 - Expresiones regulares
const regex = /JavaScript/i;
console.log(regex.test("Aprender JavaScript es genial"));

// Punto 18 - Conjuntos y mapas
const conjunto = new Set([1, 2, 3, 4]);
const mapa = new Map();
mapa.set("clave", "valor");
console.log(conjunto, mapa);

// Punto 19 - Enumeraciones
const estado = {
    INICIO: "Inicio",
    PROCESO: "En proceso",
    FINALIZADO: "Finalizado"
};
console.log(estado);

// Punto 20 - Peticiones HTTP
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data));

// Punto 21 - Callbacks
function operacionAsincrona(callback) {
    setTimeout(() => {
        callback("Operación completada");
    }, 2000);
}

operacionAsincrona(console.log);

