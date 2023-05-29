// Para loguearse.. Primero se define cada usuario como un objeto y una funcion para crear un array con cada usuario nuevo
// Luego se comprueban las contraseñas que introducen los usuarios para darle acceso o para notificarle si debe introducir la contraseña correcta.-

const listaDeUsuarios = [];
let nombreUsuario = document.getElementsByClassName("nombreUsuario")[0];
let usuarioStorage = "";
var mensajeBienvenida = document.getElementsByClassName("mensajeBienvenida")[0];
// if(usuarioStorage){
//     nombreUsuario.textContent = usuarioStorage;
//     let bienvenida = document.createElement("div");
//     bienvenida.textContent = `Bienvenido a nuestra tienda ${usuarioStorage}`;
//     mensajeBienvenida.appendChild(bienvenida);
// }else{
//     let bienvenida = document.createElement("div");
//     bienvenida.textContent = `Su sesion no ha sido iniciada, puede iniciar sesion para acceder a la pagina`;
//     mensajeBienvenida.appendChild(bienvenida);
// }
let ingresar = document.getElementsByClassName("ingresar")[0];
ingresar.addEventListener("click", verificarContraseña);
var mensajeRestauracion = document.getElementsByClassName("restauracion")[0];
mensajeRestauracion.textContent="";
let restaurarContraseña = document.createElement("button");
let registrarme = document.createElement("button");
restaurarContraseña.textContent = "Olvide mi Contraseña";
registrarme.textContent = "Registrarme";
mensajeRestauracion.appendChild(restaurarContraseña);
mensajeRestauracion.appendChild(registrarme);
restaurarContraseña.addEventListener("click", restauracion);
registrarme.addEventListener("click", newUsuario);
    


function VerificarUsuario() {
    if (listaDeUsuarios.find((u) => u.nombre === nombreUsuario)) {
        verificarContraseña();
    }   else {
            newUsuario();
        }
}

function newUsuario() {   
    let id = listaDeUsuarios.length + 1;
    let contraseña = document.getElementsByClassName("contraseña")[0].value;
    let nuevoUsuario = { id: id, nombre: nuevoUsuario.textContent, contraseña: contraseña };
    listaDeUsuarios.push(nuevoUsuario);
    bienvenida.textContent = `Su registro ha sido exitoso`;
    mensajeBienvenida.appendChild(bienvenida);
};
function verificarContraseña() {
    if (listaDeUsuarios.find((u=> u.contraseña === contraseña))) {
        bienvenida.textContent = `Bienvenido a nuestra tienda ${usuarioStorage}`;
        mensajeBienvenida.appendChild(bienvenida);
    }
}
function restauracion() {
    let restaurar = document.createElement("form");
    restaurar = `<form>
    <div class="mb-3">
        <label for="ingreseSuNombre" class="form-label">Usuario</label>
        <input type="text" class="form-control usuario" id="ingreseSuNombre">
    </div>
    <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Nueva contraseña</label>
        <input type="password" class="form-control newContraseña" id="exampleInputPassword1">
    </div>
</form>`
    mensajeRestauracion.appendChild(restaurar);

    let usuarioEncontrado = listaDeUsuarios.find((u) => u.nombre === usuario);
    let newContraseña = document.getElementsByClassName("newContraseña")[0];
    console.log(newContraseña);
    usuarioEncontrado.contraseña = newContraseña;
}

let carrito = [];
carrito = (sessionStorage.getItem('carrito')) ? JSON.parse(sessionStorage.getItem('carrito')) : [];
let descuento = 15;
let recargo = 10;
let  televisor = {id:1, nombre:"tv", caracteristicas:"TV 4K 60'", precio:125000, imagen:"./imagenes/tv.png"};
let computadora = {id:2, nombre:"cpu", caracteristicas:"PC Gamer", precio:250000, imagen:"./imagenes/computadora.png"};
let homeT = {id:3, nombre:"hthea", caracteristicas:"Home Theater", precio:115000, imagen:"./imagenes/homeT.jpg"};
let consola  = {id:4, nombre:"consola", caracteristicas:"Play Station 5", precio:320000, imagen:"./imagenes/play5.webp"};
let listaDeProductos = [televisor,computadora, homeT, consola];

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
// funcion para agregar produtos al carrito
const agregarAlCarrito = (id) => {
    const itemEncontrado = listaDeProductos.find((item) => item.id === id);
    carrito.push(itemEncontrado);
    sessionStorage.setItem("carrito", JSON.stringify(carrito));
};

// ejecuto para crear las tarjetas
cargarProductos();



let finalizarCompra = document.getElementsByClassName("finalizarCompra")[0];
let sectionCarrito = document.getElementsByClassName("sectionCarrito")[0];
let botonFinDeCompra = document.createElement("button");
botonFinDeCompra.className = "button";
botonFinDeCompra.textContent = "Finalizar Compra";
finalizarCompra.appendChild(botonFinDeCompra);
botonFinDeCompra.addEventListener("click", mostrarTotalCarrito);





function mostrarTotalCarrito() {
    const total = calcularTotalCarrito();
    let finDeCompra = document.createElement("div");
    carrito.forEach(item => {
    finDeCompra.innerHTML = ` 
        <div class="container text-center">
            <div class="row align-items-start">
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
        </div>`;
    finDeCompra.className ="listadoDeProductos"
    let formaDePago = document.createElement("button");
    formaDePago.textContent = "Forma de Pago";
    formaDePago.className = "button";
    formaDePago.addEventListener("click", medioDePago);


    // finDeCompra.innerHTML = "El total de su compra es: " + total;
    sectionCarrito.appendChild(finDeCompra);
    sectionCarrito.appendChild(formaDePago);
    })
}

function calcularTotalCarrito() {
    var total = 0;
    for (let i = 0; i < carrito.length; i++) {
        total += carrito[i].precio;
    }
    return total;
}


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
    mensajeDePago.appendChild(comoVaaPagar);
    mensajeDePago.appendChild(efectivo);
    mensajeDePago.appendChild(tarjeta);    
};


//     while (formaDePago === 1 || formaDePago ===2){
//         if (formaDePago === 1) {
//             efectivo = Descuento (a,descuento);
//             alert(`Su pago sera de ${efectivo}`);
//         } else {
//             tarjeta = Recargo (a,recargo);
//             alert(`Su pago sera de ${tarjeta}`);
//             cantidadCuotas = parseInt(prompt("Si lo desea puede abonar en 1, 3 o 6 cuotas.  Puede escribir su opcion"));
//             while (cantidadCuotas !== 1 && cantidadCuotas !== 3 && cantidadCuotas !==6) {
//                 alert(`Solo puede acceder a 1, 3, 6 cuotas`);
//                 cantidadCuotas = parseInt(prompt("Por favor ingrese nuevamente el nummero de cuotas,\n solo tiene acceso a 1, 3 o 6 cuotas."));
//             }        
//             cuotas = Cuotas(tarjeta,cantidadCuotas);
//             alert(`Su pago en cuotas sera de ${cuotas}`);
//         };
//     }
//     alert(`Solo puede elegir dos medios de pago,\n ingrese 1 para pago en efectivo \n y 2 para pago con tarjeta`);
// };

// carrito.forEach(item => {
//     let producto = listaDeProductos[carrito[item]-1];
//     precio += producto.precio;
// });


// let precio = 0;




// let producto = parseInt(prompt("Si desea el Televisor escriba 1; \n Si desea una computadora escriba 2; \n Si desea un Home Theatre escriba 3 \n y si desea una consola de video juegos escriba 4; \n si no desea comprar nada escriba 0"));


// while (producto !== 0) {
//     switch (producto) {
//         case 1:
//             MedioDePago(listaDeProductos[0].precio);
//             break;
//         case 2:
//             MedioDePago(listaDeProductos[1].precio);
//             break;
//         case 3:
//             MedioDePago(listaDeProductos[2].precio);
//             break;
//         case 4:
//             MedioDePago(listaDeProductos[3].precio);
//             break;
//     };
//     producto = parseInt(prompt("Si desea el Televisor escriba 1; \n Si desea una computadora escriba 2; \n Si desea un Home Theatre escriba 3 \n y si desea una consola de video juegos escriba 4; \n si no desea comprar nada escriba 0"));
// };
// alert(`Gracias por visitar nuestra pagina`);


