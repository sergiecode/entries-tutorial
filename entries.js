

const array = ['a','b','c']
const iterador = array.entries();

console.log(iterador.next().value);
//Salida esperada: Array [0,'a']

console.log(iterador.next().value);
//Salida esperada: Array [1,'b']


