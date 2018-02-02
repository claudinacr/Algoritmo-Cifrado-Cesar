/**
 * main() funcion donde se crea el menu con las opciones de cifrar o
 * descifrar. De acuerdo a lo que el usuario indique, el programa
 * le pedira al usuario la frase y le devolvera el mensaje
 * ya cifrado o decifrado dependiendo el la opcion seleccionada.
 *
 */
function main() {
  let result = '';
  let message = '';
    do {
    // El usuario ingresara la opcion que desee
    result = prompt(`Introduzca el número de lo que desea hacer:
    1)Cifrar Mensaje - 2)Decifrar Mensaje`);
    // si la respuesta es 1, el usuario ingresa la frase a cifrar
    if (result !== '') {
      if (result === '1') {
        message = prompt('Ingrese el mensaje a Cifrar: ');
        // por defecto n es 33.
        if (isValid(message)) {
          let cipherM = cipher(message, 33);
          alert('El Mensaje Cifrado es: ' + cipherM);
        } else {
          alert('El mensaje no es valido');
        }

        // si la respuesta es 2, el usuario ingresa la frase a decifrar
      } else if (result === '2') {
        message = prompt('Ingrese un mensaje a Decifrar: ');
        if (isValid(message)) {
          let decipherM = decipher(message, 33);
          alert('El Mensaje Decifrado es: ' + decipherM);
        } else {
          alert('El mensaje no es valido');
        }
      } else {
        // Si el usuario ingresa un numero distinto a 1 o 2,
        // se mostrar el siguiente mensaje
        alert('Ingrese una opción válida');
      }
    }
    // El algoritmo se ejecutara mientras estas opciones se cumplan
  } while (result === '' || (result !== '1' && result !== '2'));
}

// El usuario ingresa un mensaje para encriptar y otro para desencriptar

/**
 * @param {string} message
 * @param {number} n
 * @return {string}
 * funcion para cifrar una frase ingresada por teclado
 * con un desplazamiento cesar de n
 */
function cipher(message, n) {
  /* Mediante la funcion isValid, verificamos si la frase
  es valida.Es decir si no esta vacia y si no contiene
  numeros */
  if (isValid(message)) {
    // se inicializa la variable str como un string vacio
    let str = '';
    let acchar;
    let indCipher;
    // Se uso un for para recorrer toda la frase
    for (let i = 0; i < message.length; i++) {
      /* el metodo charCodeAt nos convierte cada
      caracter de la frase en el numero ASCII al
      que corresponde */
      acchar = message.charCodeAt(i);
      /* Si el valor ASCII del caracter (acchar)
      esta entre estos intervalos que corresponden a
      las mayusculas, el caracter es una mayuscula
      y se aplica la formula. */
      if (acchar > 64 && acchar < 91) { // Mayúsculas (A-Z)
        indCipher = ((acchar - 65 + n) % 26) + 65;
        /* Con el metodo String.fromCharCode se convierte
        el numero resultante en la formula en el caracter al
        que corresponde en codigo ASCII */
        str += String.fromCharCode(indCipher);

        /* Si el caracter no corresponde al intervalo de mayusculas, es un
        caracter en minusculas */
      } else if (acchar > 96 && acchar < 123) { // minúsculas (a-z)
        indCipher = ((acchar - 97 + n) % 26) + 97;
        str += String.fromCharCode(indCipher);
      }
    }

    return str;
    /* Si el mensaje no es valido, mostrara el mensaje,
    no es valido */
  } else {
    // el mensaje es invalido
    alert('Mensaje Invalido');
  }
}

/**
 * @param {string} message
 * @param {number} n
 * @return {string}
 * funcion para decifrar una frase ingresada por teclado
 * con un desplazamiento cesar de n
 */
function decipher(message, n) {
  if (isValid(message)) {
    let str = '';
    let acchar;
    let indDecipher;
    for (let i = 0; i < message.length; i++) {
      acchar = message.charCodeAt(i);
      if (acchar > 64 && acchar < 91) { // Mayúsculas (A-Z)
        indDecipher = ((acchar - 65 - n + 52) % 26) + 65;
        str += String.fromCharCode(indDecipher);
      } else if (acchar > 96 && acchar < 123) { // minúsculas (a-z)
        indDecipher = ((acchar - 97 - n + 78) % 26) + 97;
        // (acchar - 97 - n)% 26 + 97
        str += String.fromCharCode(indDecipher);
      }
    }

    return str;
  } else {
    return ('Mensaje Invalido');
  }
}

/**
 * @param {string} str
 * @return {boolean}
 * Función para validar el mensaje
 */
function isValid(str) {
  /* Este if es para determinar si la longitud de str
  es mayor a 0, es decir si no esta vacio */
  let acchar;
  if (str.length > 0) { // Si el String no está vacio
    // for para recorrer la frase
    for (let i = 0; i < str.length; i++) {
      /* En la variable acchar, mediante el metodo
      charCodeAt convertiremos a codigo ASCII cada caracter,
      para luego determinar si es un numero o una letra */

      acchar = str.charCodeAt(i);
      /* Si acchar es diferente a estos intervalos ASCII de mayusculas y minusculas,
      la funcion retornara false, sino una vez finalizado el recorrido de for retornara true */

      if (!(acchar > 64 && acchar < 91) && // Mayúsculas (A-Z)
      !(acchar > 96 && acchar < 123)) { // minúsculas (a-z)
        return false;
      }
    }
    return true;
  } else return false; // Retorna False si el string está vacio
}
/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 *
 * Esta funcion es crea para solventar la funcionalidad que tiene el
 * el operador % en Javascript ya que da resultados negativos para valores
 * negativos
 */
// function mod(n, m) {
//    return ((n % m) + m) % m;
// } 

// ejemplo*/

main();

// console.log(cipher("abcdefghijklmnopqrstuvwxyz".toUpperCase(), 33));
// console.log(decipher("hijklmnopqrstuvwxyzabcdefg".toUpperCase(), 33));
