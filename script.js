// alert("Hola este es mi Javascript");
let nombre = "Jonathan";

console.log(nombre);

// condicional:
let contenidoTitulo = "Jonas";

let titulo = document.querySelector(".sub_titulo_1");
titulo.innerHTML = contenidoTitulo;

let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if (textoTitulo == "Sobre mi") {
    titulo.innerHTML = "Sobre Jonathan"
} else {
    console.log("la condición no se cumple!");
}
