//1) .entries() retorna un nuevo objeto Array Iterator que contiene los pares clave/valor para cada índice de la matriz.
let array1 = ['a', 'e', 'i', 'o', 'u'];

let iterator1 = array1.entries();

//console.log(iterator1.next().value);
// expected output: Array [0, "a"]

//console.log(iterator1.next().value);
// expected output: Array [1, "e"]

//2) .every Determina si todos los elementos en el array satisfacen una condición.
const isBelowThreshold = (currentValue) => currentValue < 40;

const array2 = [1, 30, 39, 29, 10, 13];

//console.log(array2.every(isBelowThreshold));
// expected output: true

//El siguiente ejemplo prueba si todos los elementos de un arreglo son mayores que 10.

function esSuficientementeGrande(elemento, indice, arrreglo) {
    return elemento >= 10;
}
[12, 5, 8, 130, 44].every(esSuficientementeGrande);   // false
[12, 54, 18, 130, 44].every(esSuficientementeGrande); // true

//3) .fill()  cambia todos los elementos en un arreglo por un valor estático, desde el índice start (por defecto 0) hasta el índice end (por defecto array.length). Devuelve el arreglo modificado.

const array3 = [1, 1, 1, 1, 1, 1, 1, 1]

//console.log(array3.fill(0, 0, 2))

//4) .filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

//console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

//5) .find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
const array4 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

//console.log(found);
// expected output: 12

//6) .flat() crea una nueva matriz con todos los elementos de sub-array concatenados recursivamente hasta la profundidad especificada.

let arr1 = [1, 2, [3, 4]];
//console.log(arr1.flat());
// [1, 2, 3, 4]

let arr2 = [1, 2, [3, 4, [5, 6]]];
//console.log(arr2.flat());
// [1, 2, 3, 4, [5, 6]]

let arr3 = [1, 2, [3, 4, [5, 6]]];
//console.log(arr3.flat(2));
// [1, 2, 3, 4, 5, 6]

//7) .flatMap() primero mapea cada elemento usando una función de mapeo, luego aplana el resultado en una nueva matriz. Es idéntico a un map seguido de un flatten (en-US)de profundidad 1, pero flatMap es a menudo útil y la fusión de ambos en un método es ligeramente más eficiente.
let arr = [1, 2, 3, 4];

arr.map(x => [x * 2]);
// [[2], [4], [6], [8]]

arr.flatMap(x => [x * 2]);
// [2, 4, 6, 8]

// solo un nivel es aplanado
arr.flatMap(x => [[x * 2]]);
// [[2], [4], [6], [8]]

//8) .forEach() ejecuta la función indicada una vez por cada elemento del array.

const array = ['a', 'b', 'c', 1, 2];

//array.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"

//9) Array.from() crea una nueva instancia de Array a partir de un objeto iterable.

//console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

//console.log(Array.from([1, 2, 3, 5], x => x + x));
// expected output: Array [2, 4, 6, 10]

//10) join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena
const elements = ['Fire', 'Air', 'Water'];

//console.log(elements.join());
// expected output: "Fire,Air,Water"

//console.log(elements.join(''));
// expected output: "FireAirWater"

//console.log(elements.join('-'));
// expected output: "Fire-Air-Water"

//11) map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function (x) {
    return x * 2;
});
// doubles is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]

var numbers = [1, 4, 9];
var roots = numbers.map(function (num) {
    return Math.sqrt(num);
});
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]


//12) reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
const array5 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array5.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
);

//console.log(sumWithInitial);
// expected output: 10

//13)  slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará

var nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
var masculinos = nombres.slice(1, 3);

// masculinos contiene ['Pedro','Miguel']

//14) some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.

const array6 = [1, 2, 3, 4, 5, 6, 7];

// checks whether an element is even
const even = (element) => element % 2 === 0;

//console.log(array6.some(even));
// expected output: true

//Ejemplo 2 .some
const users = [
    {name: 'Fabian', age: 23},
    {name: 'Julian', age: 10},
    {name: 'Sandra', age: 49},
    {name: 'Guillermo', age: 72},
]

const anyAdult = users.some(user => user.age > 18)
//console.log(anyAdult)

//15) sort() ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado. La ordenación no es necesariamente estable. El modo de ordenación por defecto responde a la posición del valor del string de acuerdo a su valor Unicode.

var frutas = ['guindas', 'manzanas', 'bananas'];
frutas.sort(); // ['bananas', 'guindas', 'manzanas']

var puntos = [1, 10, 2, 21];
puntos.sort(); // [1, 10, 2, 21]
// Tenga en cuenta que 10 viene antes que 2
// porque '10' viene antes que '2' según la posición del valor Unicode.

var cosas = ['word', 'Word', '1 Word', '2 Words'];
cosas.sort(); // ['1 Word', '2 Words', 'Word', 'word']
// En Unicode, los números vienen antes que las letras mayúsculas
// y estas vienen antes que las letras minúsculas.


//16) splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
//.splice(Donde comienza a modificar, elemento que desea eliminar, 'Elemento a añadir')
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
//console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
//console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

//17) values() devuelve un nuevo objeto Array Iterator que contiene los valores para cada índice del array.
// lo ideal seria hacerlo con un bucle for of
var a = ['w', 'y', 'k', 'o', 'p'];
var iterator = a.values();

//console.log(iterator.next().value); // w 
//console.log(iterator.next().value); // y 
//console.log(iterator.next().value); // k 
//console.log(iterator.next().value); // o 
//console.log(iterator.next().value); // p

//Iteración usando un bucle for...of
var arr6 = ['w', 'y', 'k', 'o', 'p'];
var iterador = arr6.values();

for (let letra of iterador) {
  console.log(letra);
}