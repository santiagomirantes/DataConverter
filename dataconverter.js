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
let dato, muestra, element, element3, selectedcolor, colorcheck, object, key ,value, objelement, objelement2, objnode, objnode2, kvdiv;
let list = [];
let list2 = [];
let elementlist = [];
let dataobject = {};
const input = document.querySelector("#extractor");
let bigger = document.querySelector("#bigger")
let smaller = document.querySelector("#smaller")
const muestralist = document.querySelector("#muestralist");
const muestradiv = document.querySelector("#muestradiv");
let mayusbut = document.querySelector("#mayus")
let minusbut = document.querySelector("#minus")
let showcolorbut = document.querySelector("#showcolor")
let color = document.querySelector("#color")
let colorverif = document.querySelector("#verifcolor")
let convertidor = document.querySelector("#convertobject");
let objname = document.querySelector("#objname");
let objcontent = document.querySelector(".objcontent")
let objcontent2 = document.querySelector(".objcontent2")
let objproperties = document.querySelector("#properties")
let addkvbut = document.querySelector("#addkv")
let almacbut = document.querySelector("#almac")
let selecbut = document.querySelector("#copy");
let selecbut2 = document.querySelector("#edit");
let savebut = document.querySelector("#save");
let almaclocal = document.querySelector("#almaclocal");
let delalmaclocal = document.querySelector("#delalmaclocal")
let muestralistlocal = document.querySelector("#muestralistlocal")
let muestrasize = 16;
let number = 1;
let number2 = -1;
let number3 = 1;
let elementnum = 0
let selecnum = " ";
let selecnum2 = "";

bigger.addEventListener("click", bigplus)
smaller.addEventListener("click", smallplus)
mayusbut.addEventListener("click", mayus)
minusbut.addEventListener("click", minus)
showcolorbut.addEventListener("click", seleccolor)
colorverif.addEventListener("click", verificandocol)
convertidor.addEventListener("click", convertiraobj)
addkvbut.addEventListener("click", addkeyvalue)
almacbut.addEventListener("click", almacenar)
selecbut.addEventListener("click", copiar)
savebut.addEventListener("click", guardar)
selecbut2.addEventListener("click", editar)
almaclocal.addEventListener("click", almacenarlocal)
delalmaclocal.addEventListener("click", eliminarlocal)

function mostrando() {
    muestra.innerHTML = dato;
    muestra.style.color = ""
}

function mostrandolist() {
    element = document.createElement("p")
    elementnode = document.createTextNode(list[number - 1])
    element.appendChild(elementnode)
    if(colorcheck === true) {
        element.style.color = selectedcolor;
        colorcheck = false
    }
    muestralist.appendChild(element)
}
function mostrandolist2() {
    muestralist.innerHTML = "" 
    list2.forEach(item2 => list2function())
}
function list2function() {
    element2 = document.createElement("p")
    elementnode2 = document.createTextNode(list2[number2])
    element2.appendChild(elementnode2)
    if(colorcheck === true) {
        element2.style.color = selectedcolor;
        colorcheck = false
    }
    muestralist.appendChild(element2)
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
    selecbut.removeAttribute("class")
    selecbut.setAttribute("class", "none")
    selecbut2.removeAttribute("class")
    selecbut2.setAttribute("class", "none")
    almacbut.removeAttribute("class")
    almacbut.setAttribute("class", "none")
    }
    else{
        alert("el valor ingresado no es un número")
    }
}
function guardar() {
    for(let item of list) {
    number2 = number2 + 1
    if(number2 == selecnum2) {
        dato = seleccion2 + "." + dato;
        list2.push(dato)
        continue
    }
    list2.push(item)  
    }
    mostrandolist2()
    number2 = -1
    list = list2
    list2 = []
    selecbut.removeAttribute("class")
    selecbut.setAttribute("class", "option")
    selecbut2.removeAttribute("class")
    selecbut2.setAttribute("class", "option")
    almacbut.removeAttribute("class")
    almacbut.setAttribute("class", "option")
    savebut.removeAttribute("class")
    savebut.setAttribute("class", "none")
}
function seleccolor() {
    color.className = "color"
    colorverif.className="option2"
}
function verificandocol() {
    selectedcolor = color.value;
    muestra.style.color = selectedcolor
    colorcheck = true
}

function bigplus() {
    if(muestrasize <= 26) {
    muestrasize = muestrasize + 2;
    muestra.style.fontSize = muestrasize + "px";
    }
}

function smallplus() {
    if(muestrasize >= 16) {
    muestrasize = muestrasize - 2;
    muestra.style.fontSize = muestrasize + "px";
    }
}
function convertiraobj() {
    objname.innerHTML = dato
    dato = new Object()
    objname.removeAttribute("class")
    objcontent.removeAttribute("class")
    objcontent2.removeAttribute("class")
    addkvbut.removeAttribute("class")
    addkvbut.setAttribute("class", "option2")
}
function addkeyvalue() {
   key = prompt("Ingrese su propiedad");
   value = prompt("Ingrese el valor de su propiedad");
   kvdiv = document.createElement("div")
   objelement = document.createElement("p")
   objnode = document.createTextNode(key + ":")
   objelement.appendChild(objnode)
   kvdiv.appendChild(objelement)
   objelement.setAttribute("class", "inline key")
   objelement2 = document.createElement("p")
   objnode2 = document.createTextNode(value);
   objelement2.appendChild(objnode2)
   kvdiv.appendChild(objelement2)
   objelement2.setAttribute("class", "inline value")
   objproperties.appendChild(kvdiv)

   dato[key] = value;

}
function localmuestra() {
    element3 = document.createElement("p")
    node3 = document.createTextNode(JSON.parse(localStorage[localización]))
    element3.appendChild(node3)
    muestralistlocal.appendChild(element3)
}
function almacenarlocal() {
    localización = "dato" + number3;
    localStorage.setItem(localización , JSON.stringify(dato))
    localmuestra()
}
function eliminarlocal() {
    localStorage.clear()
}
