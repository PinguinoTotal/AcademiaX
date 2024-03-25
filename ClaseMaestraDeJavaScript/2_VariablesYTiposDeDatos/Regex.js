//expreciones regulares
let texto1 = "Me encanta la música de Charlly García.";
let texto2 = "me encanta la música de Led Zeppelin.";
let texto3 = "encanta la música de Calle 13.";
let texto4 = "la música de Meshuggah.";
let texto5 = "música de Daft Punk.";
let texto6 = "Me gusta Diplo.";
let texto7 = "No me gusta Diplo";

//let regex = /Me/i;

/*esto sirve para buscar palabras en diferentes oraciones
primero se da una variable con el texto que se va a buscar
luego se hace el test a esa variable compranadola 
contra los demas textos que estamos probando, regex si
detecta si algoes mayuscula o minuscula, pero si le ponemos 
la "i" ya no le va a importar 
*/ 
console.log(regex.test(texto1));
console.log(regex.test(texto2));
console.log(regex.test(texto3));
console.log(regex.test(texto4));
console.log(regex.test(texto5));
console.log(regex.test(texto6));
console.log(regex.test(texto7));

//mini reto
let regex = /\b\d{5}\b/;