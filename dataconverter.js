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

AOS.init()
let dato, dataresponse, number4, muestra, element, element3, selectedcolor, colorcheck, object, key ,value, objelement, objelement2, objnode, objnode2, kvdiv;
let list = [];
let list2 = [];
let elementlist = [];
let nvalues = []
let nkeys = [];
let dataobject = {};
const extractitle = document.querySelector(".extractor-title")
const input = document.querySelector("#extractor");
let submit = document.querySelector("#submit")
let bigger = document.querySelector("#bigger")
let smaller = document.querySelector("#smaller")
const muestralist = document.querySelector("#muestralist");
const muestradiv = document.querySelector("#muestradiv");
let mayusbut = document.querySelector("#mayus")
let minusbut = document.querySelector("#minus")
let sumarbut = document.querySelector("#sumar")
let restarbut = document.querySelector("#restar")
let showcolorbut = document.querySelector("#showcolor")
let color = document.querySelector("#color")
let colorverif = document.querySelector("#verifcolor")
let convertidor = document.querySelector("#convertobject");
let objcontent = document.querySelector(".objcontent");
let objcontent2 = document.querySelector(".objcontent2");
let objproperties = document.querySelector("#properties");
let addkvbut = document.querySelector("#addkv");
let showexbut = document.querySelector("#showexample");
let addkvfield = document.querySelector("#kvfield");
let addkbut = document.querySelector("#addk");
let addvbut = document.querySelector("#addv");
let finaladdkvbut = document.querySelector("#finaladdkv");
let operationbut = document.querySelector("#operationbut");
let operation = document.querySelector("#operation");
let operator = document.querySelector("#operatorselec");
let affectnumber = document.querySelector("#affectnumber");
let operationsubmit = document.querySelector("#operationsubmit");
let almacbut = document.querySelector("#almac");
let selecbut = document.querySelector("#copy");
let selecinput = document.querySelector("#selecinput");
let selecsubmit = document.querySelector("#selecsubmit");
let selecdiv = document.querySelector("#selecdiv");
let selecbut2 = document.querySelector("#edit");
let selecinput2 = document.querySelector("#selecinput2")
let selecsubmit2 = document.querySelector("#selecsubmit2")
let selecdiv2 = document.querySelector("#selecdiv2")
let savebut = document.querySelector("#save");
let almaclocal = document.querySelector("#almaclocal");
let delalmaclocal = document.querySelector("#delalmaclocal")
let muestralistlocal = document.querySelector("#muestralistlocal")
let muestrasize = 5;
let number = 1;
let number2 = -1;
let number3 = 1;
let elementnum = 0
let selecnum = " ";
let selecnum2 = "";

/*animations*/

setTimeout(pulse,1000)

function pulse() {
    extractitle.setAttribute("class", "animate__animated animate__pulse extractor-title")
    setTimeout(pulse2, 1000)
}
function pulse2() {
    input.setAttribute("class", "animate__animated animate__pulse extractor")
}
function muestraShake() {
    muestra.setAttribute("class", "animate__animated animate__headShake")
}
submit.addEventListener("click", data)
bigger.addEventListener("click", bigplus)
smaller.addEventListener("click", smallplus)
mayusbut.addEventListener("click", mayus)
minusbut.addEventListener("click", minus)
sumarbut.addEventListener("click", sumar)
restarbut.addEventListener("click", restar)
showcolorbut.addEventListener("click", seleccolor)
colorverif.addEventListener("click", verificandocol)
convertidor.addEventListener("click", convertiraobj)
addkvbut.addEventListener("click", addkeyvalueshow)
showexbut.addEventListener("click", showexample)
finaladdkvbut.addEventListener("click", addkeyvalue)
operationbut.addEventListener("click", operationShow)
operationsubmit.addEventListener("click", operationing)
almacbut.addEventListener("click", almacenar)
selecbut.addEventListener("click", copiarshow)
selecsubmit.addEventListener("click", copiar)
savebut.addEventListener("click", guardar)
selecbut2.addEventListener("click", editarshow)
selecsubmit2.addEventListener("click", editar)
almaclocal.addEventListener("click", almacenarlocal)
delalmaclocal.addEventListener("click", eliminarlocal)

function mostrando() {
    muestra.innerHTML = dato;
    muestra.style.color = ""
    muestra.className = ""
    setTimeout(muestraShake, 10)
    objproperties.innerHTML = ""
    objcontent.setAttribute("class", "none")
    objcontent2.setAttribute("class", "none") 
    addkvbut.setAttribute("class", "none")
    addkvfield.setAttribute("class", "none")
    operation.setAttribute("class", "none")
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
function sumar() {
    if(dato == parseInt(dato)) {
     dato++
     mostrando()
    }
    else{
        swal(
            "Error",
            "El valor ingresado no es un número",
            "warning"
        )
    }
   input.value = ""
}
function restar() {
    if(dato == parseInt(dato)) {
        dato =  dato - 1;
        mostrando()
       }
       else{
        swal(
            "Error",
            "El valor ingresado no es un número",
            "warning"
        )
       }
       input.value = ""
    }
function operationShow() {
    operation.removeAttribute("class")
}
function operationing() {
        if(typeof(parseInt(affectnumber.value)) == "number" && typeof(parseInt(dato)) == "number") {
        selected = operator.selectedIndex;
        dato = parseInt(dato)
        affectnumber.value = parseInt(affectnumber.value)
        switch(selected) {
            case 0:
                result = dato + parseInt(affectnumber.value)
                dato = result
                mostrando()
            case 1:
                result = dato - affectnumber.value
                dato = result
                mostrando()
            case 2:
                    result = dato * affectnumber.value
                    dato = result
                    mostrando()
            case 3:
                        result = dato / affectnumber.value
                        dato = result
                        mostrando()
        }
        }
        else{
            swal(
                "Error",
                "Solo se pueden realizar operaciones con números",
                "warning"
            )
        }
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
function copiarshow() {
    selecdiv.removeAttribute("class")
    }
function copiar() {
    seleccion = parseInt(selecinput.value);
    if(typeof(seleccion) == "number") {
        selecdiv.setAttribute("class", "none")
        selecnum = seleccion - 1;
        dato = list[selecnum];
        dato = dato.substring(2)
        mostrando()
}
else{
    alert("el valor ingresado no es un número")
}
}
function editarshow() {
      selecdiv2.removeAttribute("class")
}
function editar() {
    seleccion2 = parseInt(selecinput2.value)
    if(typeof(seleccion2) == "number") {
    selecdiv2.setAttribute("class", "none")
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
    if(muestrasize <= 8) {
    muestrasize = muestrasize + 1;
    muestra.style.fontSize = muestrasize + "rem";
    }
}

function smallplus() {
    if(muestrasize >= 5) {
    muestrasize = muestrasize - 1;
    muestra.style.fontSize = muestrasize + "rem";
    }
}
function convertiraobj() {
    dato = new Object()
    objcontent.removeAttribute("class")
    objcontent2.removeAttribute("class")
    addkvbut.removeAttribute("class")
    addkvbut.setAttribute("class", "option2")
    showexbut.removeAttribute("class")
    showexbut.setAttribute("class", "option")
}
function addkeyvalueshow() {
    addkvfield.removeAttribute("class")
}
async function showexample() {
    let response = await fetch("example.json")
    dataresponse = await response.json()
    number4 = -1;
    for(item in dataresponse[0]) {
        nkeys.push(item)
    }
    let values = Object.values(dataresponse[0])
    values.forEach(item => {
        nvalues.push(item)
    })
    for(item in dataresponse[0]) {
    addexample()
    }
}
function addexample() {
    number4++
    key = nkeys[number4];
    value = nvalues[number4]
    kvdiv = document.createElement("div")
    objelement = document.createElement("p")
    objnode = document.createTextNode(key + ":")
    objelement.appendChild(objnode)
    kvdiv.appendChild(objelement)
    objelement.setAttribute("class", "inline key animate__animated animate__tada")
    objelement2 = document.createElement("p")
    objnode2 = document.createTextNode(value);
    objelement2.appendChild(objnode2)
    kvdiv.appendChild(objelement2)
    objelement2.setAttribute("class", "inline value animate__animated animate__tada")
    objproperties.appendChild(kvdiv)

    dato[key] = value;
}
function addkeyvalue() {
   key = addkbut.value;
   value = addvbut.value;
   kvdiv = document.createElement("div")
   objelement = document.createElement("p")
   objnode = document.createTextNode(key + ":")
   objelement.appendChild(objnode)
   kvdiv.appendChild(objelement)
   objelement.setAttribute("class", "inline key animate__animated animate__tada")
   objelement2 = document.createElement("p")
   objnode2 = document.createTextNode(value);
   objelement2.appendChild(objnode2)
   kvdiv.appendChild(objelement2)
   objelement2.setAttribute("class", "inline value animate__animated animate__tada")
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
    muestralistlocal.innerHTML = ""
}



  