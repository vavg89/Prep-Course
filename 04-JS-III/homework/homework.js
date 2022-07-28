// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length -1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var newarray=[];
  for (var a=0;a < array.length ; a++){
newarray.push(array[a]+1);
  }
  return newarray;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var a=[];
  var b='';
  var d='';
  for (var c=0;c < palabras.length ; c++){
  b=b+' '+(palabras[c]);
  d=b
  }
  var d=b.replace(' ', '');
  return d;

}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (var a=0;a < array.length ; a++){
   if (elemento===array[a]){
    return true;
   }
    }
    return false
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
var a=0;
var b=0;
  for (var c=0;c < numeros.length ; c++){
  b = (numeros[c]);
  a= a + b;
  }
  return a;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var a=0;
var b=0;
var p=0;
  for (var c=0;c < resultadosTest.length; c++){
  b = (resultadosTest[c]);
  a= a + b;
p=a/(c+1);
  }
  return p;
}



function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var a = numeros[0];
  for(var b = 1; b < numeros.length; b++) {
    if(numeros[b] > a) { 
      a = numeros[b];
    }
  }
  return a;
  
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length<1)return 0;
  var a=1;
  for(b=0;b<arguments.length;b++){
    a=a*arguments[b];
  }
  return a
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
var c=0;
var a=18
for (b=0;b<arreglo.length;b++){
  if (arreglo[b]>a){
 c=c+1
  }
 }
return c
}



function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
     if (numeroDeDia===1||numeroDeDia===7){
      return 'Es fin de semana';
    }
  
    return 'Es dia Laboral'

}

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
var a=String(n);
  if (a.charAt(0)==='9'){
    return true;
  }
  else return false;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí 
  var a=arreglo[0];
for (b=1;b<arreglo.length;b++){
if (arreglo[b]===a){
  return true
}return false
}
}
function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código
var a=[]
for (b=0;b<array.length;b++){
  if (array[b]==="Enero"||array[b]==="Marzo"||array[b]==="Noviembre"){
    a.push(array[b]);
  }
}
  if(a.length === 3 ){
    return a
  }
  else return 'No se encontraron los meses pedidos';
}
function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var a=[]
for (var b=0;b<array.length;b++){
  if (array[b]>100){
    a.push(array[b]);
  }
}
return a;

}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
var a=[]
var c=numero

for (var b=0;b<10;b++){
  c=c+2
  if (c===b)break ;
  else {
    a.push(c);
  }
}
if (c === b){
  return ("Se interrumpió la ejecución")
}
else return a;

}
  


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var a=[]
var c=numero

for (var b=0;b<10;b++){
  if (b===5)continue ;
   else {
    c=c+2
    a.push(c);
  }
}
  return a;
}




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
