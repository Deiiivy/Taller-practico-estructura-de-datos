// https://developer.mozilla.org/es/docs/Web/JavaScript

// punto 1 - declaración de variables y constantes
let edad = 25;
const nombre = "Deivy";

// punto 1 - tipos de datos primitivos en javascript
const entero = 12;
const float = 12.5;
const string = "Hola";
const booleano = true;
const nulo = null;
const indefinido = undefined;
const simbolo = Symbol("simbolo");
const bigInt = 12345678901234567890n;

// punto 1 - mprimir "Hola, JavaScript!" en la consola
console.log("¡Hola, JavaScript!");

// punto 2 - operadores y estructuras de control
let suma = entero + float;
let resta = entero - float;
let multiplicacion = entero * float;
let division = entero / float;

if (booleano) {
    console.log("La condición es verdadera");
} else {
    console.log("La condición es falsa");
}

// punto 3 - funciones y alcance
function saludar(nombre) {
    return `¡Hola, ${nombre}!`;
}

// punto 4 - estructuras de datos
const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Bogotá"
};
const lista = [1, 2, 3, 4, 5];

// punto 5 - cadenas de caracteres
let texto = "JavaScript";
console.log(texto.length);
console.log(texto.toUpperCase());

// punto 6 - valor y referencia
let obj1 = { clave: "valor" };
let obj2 = obj1;
obj2.clave = "nuevo valor";

// punto 7 - recursividad
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

// punto 8 - pilas y colas
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

// punto 9 y 10 - clases, herencia y polimorfismo
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

// punto 11 - excepciones
try {
    let resultado = 10 / 0;
} catch (error) {
    console.log("Ocurrió un error");
}

// punto 12 - manejo de ficheros
const fs = require('fs');
fs.writeFileSync('archivo.txt', 'Hola, archivo');

// punto 13 - json y xml
const json = JSON.stringify(persona);
const xml = "<persona><nombre>Juan</nombre></persona>";

// punto 14 - pruebas unitarias
function suma(a, b) {
    return a + b;
}
const assert = require('assert');
assert.strictEqual(suma(2, 3), 5);

// punto 15 - fechas
const fecha = new Date();

// punto 16 - asincronía
async function obtenerDatos() {
    return "Datos obtenidos";
}

// punto 17 - expresiones regulares
const regex = /JavaScript/i;
console.log(regex.test("Aprender JavaScript es genial"));

// punto 18 - conjuntos y mapas
const conjunto = new Set([1, 2, 3, 4]);
const mapa = new Map();
mapa.set("clave", "valor");

// punto 19 - enumeraciones
const estado = {
    INICIO: "Inicio",
    PROCESO: "En proceso",
    FINALIZADO: "Finalizado"
};

// punto 20 - peticiones http
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data));

// punto 21 - callbacks
function operacionAsincrona(callback) {
    setTimeout(() => {
        callback("Operación completada");
    }, 2000);
}

