//Esta seccion son ejercicios propios basandome en los ejemplos que hay en la documentacion de Mozilla Developer Network

//1) .at() Devuelve una posicion del string
let phrase = "Javxscript"

// console.log(phrase.at(0))
// console.log(phrase.at(1))
// console.log(phrase.at(2))
// console.log(phrase.at(3))
// console.log(phrase.at(4))
// console.log(phrase.at(5))
// console.log(phrase.at(6))
// console.log(phrase.at(7))
// console.log(phrase.at(8))
// console.log(phrase.at(9))

//2) .chartAt() Devuelve igualmene una posicion
let sentence = "Hola mundo"
//console.log(sentence.charAt(0)) //H

//El charCodeAt()método devuelve un número entero entre 0y 65535que representa la unidad de código UTF-16 en el índice dado.
let words = "Julian Isaza"
//console.log(words.charCodeAt(0)) //74

//3) .concat() El concat()método concatena los argumentos de cadena a la cadena de llamada y devuelve una nueva cadena.
let str1 = "Jeronimo"
let str2 = "Isaza"

//console.log(str1.concat(' ', str2))

//4) .endsWith().  determina si una cadena termina con los caracteres de una cadena especificada, regresando trueo falsesegún corresponda.
let oracion = "Esto es una prueba del metodo correspondiente"
//console.log(oracion.endsWith('correspondiente'))

//5) .includes() método realiza una búsqueda que distingue entre mayúsculas y minúsculas para determinar si una cadena se puede encontrar dentro de otra cadena, regresando trueo falsesegún corresponda.
let coincidencia = "Soy una frase en Javascript y con el respectivo metodo encontraran una coincidencia en mi"
//console.log(coincidencia.includes("frase"))

//6) .indexOf()  dado un argumento: una subcadena para buscar, busca en toda la cadena de llamada y devuelve el índice de la primera aparición de la subcadena especificada. Dado un segundo argumento: un número, el método devuelve la primera aparición de la subcadena especificada en un índice mayor o igual que el número especificado.

// H o l a - M u n d o --> String o Cadena
// 0 1 2 3 4 5 6 7 8 9 --> Indice

// Nota: cuando aparece el valor -1 es porque no encuentra la respectiva coincidencia

let saludo = "Hola-Mundo"
//console.log(saludo.indexOf("Mundo")) // 5
//console.log(saludo.indexOf("mundo")) //-1 
//console.log(saludo.indexOf("o")) // 1 
//Cuando pasamos el segundo parametro nos indica donde esta la segunda coincidencia
//console.log(saludo.indexOf("o", 2)) // 9 

//7) .lastIndexOf()
let paragraph = "Hola mi nombre es Julian Isaza y tengo 22 anios"
//console.log(paragraph.lastIndexOf("Julian"))

//8) .match() recupera el resultado de hacer coincidir una cadena con una expresión regular .
const paragraph2 = 'The quick Brown Fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g; //Encuentra todas las mayusculas
const found = paragraph2.match(regex);

//console.log(found);
// expected output: Array [ 'T', 'B', 'F', 'I' ]

//9) .replace() método devuelve una nueva cadena con una, algunas o todas las coincidencias de un patternreemplazadas por un replacement. patternpuede ser una cadena o un , RegExpy replacementpuede ser una cadena o una función llamada para cada coincidencia. Si patternes una cadena, solo se reemplazará la primera aparición. La cadena original se deja sin cambios.

let cadenaReplace = 'Javascript es genial'

cadenaReplace = cadenaReplace.replace('Java', 'ECMA')
//console.log(cadenaReplace)

//10) .slice() método extrae una sección de una cadena y la devuelve como una nueva cadena, sin modificar la cadena original.
let nameSlice = 'Mi nombre es Julian Isaza, soy desarrollador y me gusta la musica'
//console.log(nameSlice.slice(0,10))
//console.log(nameSlice.slice(13,25))

//11) .split() método toma un patrón y lo divide Stringen una lista ordenada de subcadenas buscando el patrón, coloca estas subcadenas en una matriz y devuelve la matriz.

let cadenaSplit = 'Javascript es un lenguaje de programacion'
let palabras = cadenaSplit.split(' ')
//console.log(palabras)

//12) .trim() método elimina los espacios en blanco de ambos extremos de una cadena y devuelve una nueva cadena, sin modificar la cadena original. Los espacios en blanco en este contexto son todos los caracteres de espacio en blanco (espacio, tabulador, espacio sin interrupción, etc.) y todos los caracteres de terminación de línea (LF, CR, etc.).

let phraseTrim = '  Hola Mundo!   '
//console.log(phraseTrim)
newTrim = phraseTrim.trim()
//console.log(newTrim)

//13) .valueOf método devuelve el valor primitivo de un Stringobjeto.

const x = 'Hello world'
console.log(x.valueOf()); // Displays 'Hello world'