/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let claves = Object.keys(objeto);
   let padre = [];
   for (let i = 0; i < claves.length; i++) {
      padre.push([claves[i], objeto[claves[i]]])
   }
   return padre;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let cadena = string.split('').sort();
   let objeto = {}
   for (let i = 0; i < cadena.length; i++) {
      if (objeto[cadena[i]] === undefined) {
         objeto[cadena[i]] = 1
      } else {
         objeto[cadena[i]] = objeto[cadena[i]] + 1;
      }
   }
   return objeto;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let mayuscula = '';
   let minuscula = '';
   let nuevoString = '';
   for (let i = 0; i < string.length; i++) {
      if (string[i] === string[i].toUpperCase()) {
         mayuscula += string[i];
      }
      else {
         minuscula += string[i];
      }
   }
   return nuevoString = mayuscula + minuscula;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let nuevaFrase = [];
   let nuevoArreglo = frase.split(' ');
   for (let i = 0; i < nuevoArreglo.length; i++) {
      nuevaFrase.push(nuevoArreglo[i].split('').reverse().join(''));
   }
   return nuevaFrase.join(' ');
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let cadena = numero.toString();
   let n = cadena.length;
   let d = n - 1;
   for (let i = 0; i <= (n / 2) - 1; i++) {
      d = (n - 1) - i;
      if (cadena[i] !== cadena[d]) {
         return 'No es capicua';
      }
   }
   return 'Es capicua';
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let cadenaFinal = [];
   for (let i = 0; i < string.length; i++) {
      if (!(string[i] === 'a' || string[i] === 'b' || string[i] === 'c')) {
         cadenaFinal.push(string[i]);
      }
   }
   return cadenaFinal.join('');
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   //version simple usando funciones de javaScript .sort()
   //let nuevoArreglo = arrayOfStrings.sort((a, b) => a.length-b.length);
   //return nuevoArreglo;

   const arrayDeLongitudes = arrayOfStrings.map((palabra) => palabra.length)
   const maximo = Math.max(...arrayDeLongitudes);
   const arrayFinal = [];
   while (arrayFinal.length < arrayOfStrings.length) {
      const min = Math.min(...arrayDeLongitudes);
      const indicedelMinimo = arrayDeLongitudes.indexOf(min);
      const palabraMinimo = arrayOfStrings[indicedelMinimo];
      for (let i = 0; i < arrayOfStrings.length; i++) {
         if (arrayOfStrings[i] === palabraMinimo) {
            arrayFinal.push(arrayOfStrings[i]);
            arrayDeLongitudes[i] = maximo * 10;
         }
      }
   }
   return arrayFinal;
}


function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let elementosEnComun = array1.filter(elemento => array2.includes(elemento));
   return elementosEnComun;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
