/*function usuario(info) {
    this.nombre = info.nombre
    this.direccion = info.direccion
    this.gmail = info.gmail
    this.edad = info.edad
    this.pais = info.pais
}
const usuario1 = new usuario(
    {
        nombre:"Jose Alberto Fernandez",
        direccion:"Main Street",
        edad:34,
        pais:"Argentina",
        gmail:"holaquetal@gmail.com"
    }
)
const usuario2 = new usuario(
    {
        nombre:"Jose Alberto Fernandez",
        direccion:"Main Street",
        edad:34,
        pais:"Argentina",
        gmail:"holaquetal@gmail.com"
    }
)

otra forma

esto va a ser la forma de crear objetos productos
class Producto{
    constructor(nombre, precio) {
        this.nombre= nombre
        this.precio = precio
        this.vendido = false
    }
    esta función la podemos llamar cuando queramos para establecer al producto como vendido
    vender() {
        this.vendido = true
    }
}

esto va a ser la forma de crear objetos personas

class Personas{
    constructor(nombre, edad) {
        this.nombre= nombre
        this.edad = precio
}
*/
let dato
let muestra
const list = []
const list2 = []
const input = document.getElementById("extractor")
const muestralist = document.getElementById("muestralist")
const muestradiv = document.querySelector("#muestradiv");
let selecbut = document.querySelector("#copy")
let selecbut2 = document.querySelector("#edit")
let savebut = document.querySelector("#save")
let number = 1;
let number2 = 0;
let selecnum = " "
let selecnum2 = ""

function mostrando() {
    muestra.innerHTML = dato;
}

function mostrandolist() {
    muestralist.innerHTML = list.join(" ")
}
function data() {
    dato = document.getElementById("extractor").value;
    muestra = document.getElementById("muestra");
    mostrando()
};
function seleccionado(id) {
    element = document.getElementById(id);
    element.removeAttribute("class")
    element.setAttribute("class", "selected")
}
function mayus() {
    dato = dato.toUpperCase()
    mostrando()
}
function minus() {
    dato = dato.toLowerCase()
    mostrando()
}
function almacenar() {
    list.push(number + "." + dato)
    input.value = " "
    dato = " "
    muestradiv.removeAttribute("class")
    selecbut.removeAttribute("class")
    selecbut.setAttribute("class", "option")
    selecbut2.removeAttribute("class")
    selecbut2.setAttribute("class", "option")
    mostrando()
    mostrandolist()
    number = number + 1
}
function copiar() {
    seleccion = prompt("Inserta el puesto de tu dato (del 1 al " + list.length + ")")
    if(seleccion = parseInt(seleccion)) {
    selecnum = seleccion - 1;
    dato = list[selecnum];
    dato = dato.substring(2)
    mostrando()
    }
    else{
        alert("el valor ingresado no es un número")
    }
}
function editar() {
    seleccion2 = prompt("Inserta el puesto de tu dato (del 1 al " + list.length + ")")
    if(seleccion2 = parseInt(seleccion2)) {
    selecnum2 = seleccion2 - 1;
    dato = list[selecnum2];
    dato = dato.substring(2)
    savebut.removeAttribute("class")
    savebut.setAttribute("class", "option2")
    mostrando()
    }
    else{
        alert("el valor ingresado no es un número")
    }
}
function guardar() {
    for(let item of list) {
    list.push(item)
    if(number2 == selecnum2) {
        list.push(dato)
    }
    list.shift()
    if(number2 == selecnum2) {
        list.shift()
        break
     }
     number2 = number2 + 1
    }
    mostrandolist()
}
