



// creacion del carrito y su simil en storage...
let carrito = [];
carrito = (sessionStorage.getItem('carrito')) ? JSON.parse(sessionStorage.getItem('carrito')) : [];
// creacion de los productos a comercializar y sus caracteristicas
// let  televisor = {id:1, nombre:"tv", caracteristicas:"TV 4K 60'", precio:125000, cantidad:1, imagen:"./imagenes/tv.png"};
// let computadora = {id:2, nombre:"cpu", caracteristicas:"PC Gamer", precio:250000, cantidad:1, imagen:"./imagenes/computadora.png"};
// let homeT = {id:3, nombre:"hthea", caracteristicas:"Home Theater", precio:115000, cantidad:1, imagen:"./imagenes/homeT.jpg"};
// let consola  = {id:4, nombre:"consola", caracteristicas:"Play Station 5", precio:320000, cantidad:1, imagen:"./imagenes/play5.webp"};
let listaDeProductos = [
    {id:1, nombre:"tv", caracteristicas:"TV 4K 60'", precio:125000, cantidad:1, imagen:"./imagenes/tv.png"},
    {id:2, nombre:"cpu", caracteristicas:"PC Gamer", precio:250000, cantidad:1, imagen:"./imagenes/computadora.png"},
    {id:3, nombre:"hthea", caracteristicas:"Home Theater", precio:115000, cantidad:1, imagen:"./imagenes/homeT.jpg"},
    {id:4, nombre:"consola", caracteristicas:"Play Station 5", precio:320000, cantidad:1, imagen:"./imagenes/play5.webp"},
];
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
            <a href="#" class="boton${item.id}" id="comprar">Agregar al Carrito</a>
            <a href="#" class="botonRemover${item.id}" id="quitar">Quitar del Carrito</a>
        </div>
    </div>`;
    // cargar cada div al html
    tarjetasProductos.appendChild(tarjeta);
    // crear el evento qeu permite comprar
    let boton = document.getElementsByClassName(`boton${item.id}`);
    boton[0].addEventListener("click", () => {
        agregarAlCarrito(item.id)
        });
    // crear un evento que permite remover del carrito
    let botonRemover = document.getElementsByClassName(`botonRemover${item.id}`);
    botonRemover[0].addEventListener("click", () => {
        quitarDelCarrito(item.id)
        });
    });
};


// ejecuto para crear las tarjetas
cargarProductos();


// funcion para agregar produtos al carrito
const agregarAlCarrito = (id) => {
    if(teLogueaste) {
        const unoMas = carrito.find((item) => item.id === id);
        if (unoMas) {
            unoMas.cantidad = unoMas.cantidad + 1;
        } else {
            const itemEncontrado = listaDeProductos.find((item) => item.id === id);
            carrito.push(itemEncontrado);
            };
        sessionStorage.setItem("carrito", JSON.stringify(carrito));
        Toastify({
            text: `Producto agregado`,
            duration: 2000,
            gravity: "bottom", 
            position: "right", 
            stopOnFocus: true, 
            style: {
            background: "#ffce00",
            color: "#191919",
            },
        }).showToast();
    } else {
        Toastify({
            text: `Debe ingresar al sitio o registrarse para poder comprar`,
            duration: 2000,
            gravity: "top", 
            position: "right", 
            stopOnFocus: true, 
            style: {
            background: "#ffce00",
            color: "#191919",
            },
        }).showToast();
    }
};

// funcion para quitar del carrito
const quitarDelCarrito = (id) => {
    const itemEncontrado = carrito.find((item) => item.id === id);
    if (itemEncontrado) {
        const index = carrito.indexOf(itemEncontrado);
            if (index > -1) {
                carrito.splice(index, 1);
            }
            sessionStorage.setItem("carrito", JSON.stringify(carrito));
            Toastify({
                text: `Producto eliminado`,
                duration: 2000,
                gravity: "bottom", 
                position: "right", 
                stopOnFocus: true, 
                style: {
                background: "#ff4500",
                color: "#191919",
                },
            }).showToast();
    } else {
        Toastify({
            text: `El producto que intentas eliminar no fue agregado al carrito previamente`,
            duration: 2000,
            gravity: "bottom", 
            position: "right", 
            stopOnFocus: true, 
            style: {
            background: "#ffce00",
            color: "#191919",
            },
        }).showToast();
    }
    
};


// traer del html los contenedores donde realizaremos las opciones para finalizar la compra

let sectionCarrito = document.getElementsByClassName("sectionCarrito")[0];

// añadir al carrito la funcion de ver la compra
let imagenCarrito = document.getElementsByClassName("carrito")[0];
imagenCarrito.addEventListener("click", mostrarTotalCarrito);


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
    carrito.forEach((item) => {
    finDeCompra.innerHTML += ` 
        <div class="container text-center">
            <div class="row align-items-start listado">
                <div class="col">
                    Producto: ${item.caracteristicas}
                </div>
                <div class="col">
                    Cantidad: ${item.cantidad}
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
        total += carrito[i].precio*carrito[i].cantidad;
    }
    return total;
}


