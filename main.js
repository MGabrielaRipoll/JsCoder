// creacion del carrito y su simil en storage...
let carrito = [];
carrito = (sessionStorage.getItem('carrito')) ? JSON.parse(sessionStorage.getItem('carrito')) : [];
// creacion de los productos a comercializar y sus caracteristicas
let  televisor = {id:1, nombre:"tv", caracteristicas:"TV 4K 60'", precio:125000, imagen:"./imagenes/tv.png"};
let computadora = {id:2, nombre:"cpu", caracteristicas:"PC Gamer", precio:250000, imagen:"./imagenes/computadora.png"};
let homeT = {id:3, nombre:"hthea", caracteristicas:"Home Theater", precio:115000, imagen:"./imagenes/homeT.jpg"};
let consola  = {id:4, nombre:"consola", caracteristicas:"Play Station 5", precio:320000, imagen:"./imagenes/play5.webp"};
let listaDeProductos = [televisor,computadora, homeT, consola];
// traer el contenedor del index donde iran las tarjetas
let tarjetasProductos = document.getElementById("tarjetasProductos");
// crear cada tarjeta
const cargarProductos =() => {
    listaDeProductos.forEach((item) => {
    const tarjeta = document.createElement("div");
    tarjeta.innerHTML = `
    <div class="card">
        <div class="imgBox">
            <img src="${item.imagen}" alt="Televisor" class="mouse">
        </div>
        <div class="contentBox">
            <h3>${item.caracteristicas}</h3>
            <h2>${item.precio}</h2>
            <a href="#" class="boton${item.id}" id="comprar">Comprar</a>
        </div>
    </div>`;
    // cargar cada div al html
    tarjetasProductos.appendChild(tarjeta);
    // crear el evento qeu permite comprar
    let boton = document.getElementsByClassName(`boton${item.id}`);
    boton[0].addEventListener("click", () => {
        agregarAlCarrito(item.id)
        });
    });
};

// ejecuto para crear las tarjetas
cargarProductos();

// funcion para agregar produtos al carrito
const agregarAlCarrito = (id) => {
    const itemEncontrado = listaDeProductos.find((item) => item.id === id);
    carrito.push(itemEncontrado);
    sessionStorage.setItem("carrito", JSON.stringify(carrito));
};

// traer del html los contenedores donde realizaremos las opciones para finalizar la compra

let finalizarCompra = document.getElementsByClassName("finalizarCompra")[0];
let sectionCarrito = document.getElementsByClassName("sectionCarrito")[0];

// crear un boton para indicar que ha finalizado la compra
let botonFinDeCompra = document.createElement("button");
botonFinDeCompra.className = "button";
botonFinDeCompra.textContent = "Finalizar Compra";
finalizarCompra.appendChild(botonFinDeCompra);
botonFinDeCompra.addEventListener("click", mostrarTotalCarrito);

// funcion para gestionar la forma de pago. asignando eventos a los botones efectivo y tarjeta
const medioDePago = (a) => {
    let total = calcularTotalCarrito();
    let comoVaaPagar = document.createElement("div");
    comoVaaPagar.textContent = `Gracias por su compra. Elija su medio de pago.`;
    comoVaaPagar.className ="pago";
    let efectivo = document.createElement("button");
    efectivo.textContent ="Efectivo";
    efectivo.className = "button1";
    let tarjeta = document.createElement("button");
    tarjeta.textContent ="Tarjeta";
    tarjeta.className = "button2";
    efectivo.addEventListener("click", () => {comoVaaPagar.innerHTML=`Su monto a abonar es ${total}`});
    tarjeta.addEventListener("click", () => {comoVaaPagar.innerHTML=`Su monto a abonar es de ${total} y puede abonarlo en 3, 6 o 12 cuotas`});
    let mensajeDePago = document.getElementsByClassName("formaDePago")[0];
    mensajeDePago.textContent="";
    mensajeDePago.appendChild(comoVaaPagar);
    mensajeDePago.appendChild(efectivo);
    mensajeDePago.appendChild(tarjeta);    
};


// crear una funcion para mostrar lo que contiene el carrito y el total que suman las compras
function mostrarTotalCarrito() {
    const total = calcularTotalCarrito();
    let finDeCompra = document.createElement("div");
    finDeCompra.textContent="";
    sectionCarrito.textContent="";
    carrito.forEach(item => {
    finDeCompra.innerHTML += ` 
        <div class="container text-center">
            <div class="row align-items-start listado">
                <div class="col">
                    Producto: ${item.caracteristicas}
                </div>
                <div class="col">
                    Precio: ${item.precio}
                </div>
                <div class="col">
                    El total de su compra es ${total}
                </div>
            </div>
        </div>`;})
    // agregar botones para que el usuario opte por que medio de pago utilizar

    let formaDePago = document.createElement("button");
    formaDePago.textContent = "Forma de Pago";
    formaDePago.className = "button";
    formaDePago.addEventListener("click", medioDePago);

    sectionCarrito.appendChild(finDeCompra);
    sectionCarrito.appendChild(formaDePago);
    }

// funcion para calcular el total de compras

function calcularTotalCarrito() {
    var total = 0;
    for (let i = 0; i < carrito.length; i++) {
        total += carrito[i].precio;
    }
    return total;
}



