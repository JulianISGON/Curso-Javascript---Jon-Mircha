//Cadenas de Texto aka Strings
let nombre = "Julian";
let apellido = 'Isaza';
let saludo = new String("Hola Mundo");
let lorem = "       Esto es una cadena del curso de Javascript de Jon Mircha      ";
// console.log(nombre, apellido, saludo);
console.log(
    // nombre.length,
    // apellido.length,
    // saludo.length,
    // nombre.toUpperCase(),
    // apellido.toLowerCase(),
    // lorem.includes("amet"),
    // lorem.includes("jon"),
    lorem,
    lorem.trim(), // Metodo que se usa para eliminar espacios al principio y al final del texto
    lorem.split(" "),
    lorem.split(",") // Metodo para pasar de string a vector separado por un caracter que se le asigna propiamente
);