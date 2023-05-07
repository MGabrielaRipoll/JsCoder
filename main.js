// Para loguearse.. Primero se define cada usuario como un objeto y una funcion para crear un array con cada usuario nuevo
// Luego se comprueban las contraseñas que introducen los usuarios para darle acceso o para notificarle si debe introducir la contraseña correcta.-

const listaDeUsuarios = [];

function newUsuario() {
    alert("Usted no se encuentra registrado, puede registrarse de forma muy sencilla a continuacion")
    let id = listaDeUsuarios.length + 1;
    let nombre = prompt("Ingrese su nombre de usuario:");
    let contraseña = prompt("Ingrese su contraseña:");
    let nuevoUsuario = { id: id, nombre: nombre, contraseña: contraseña };
    listaDeUsuarios.push(nuevoUsuario);
};
function VerificarContraseña() {
    let contraseña = prompt("Ingrese su contraseña");
    if (listaDeUsuarios.find((u=> u.contraseña === contraseña))) {
        alert("Bienvenido a nuestra pagina online, disfrute sus compras");
    } else {
        let opcion = parseInt(prompt("su contraseña es erronea,\n por favor presion 1 para ingresarla nuevamente \n o presione 2 si olvido su contraseña"));
        if (opcion === 1) {
            VerificarContraseña();
        } else {
            alert("A continucion vamos a recuperar su contraseña");
            let usuario = prompt("Ingrese su usuario");
            let newContraseña = prompt("ingrese su nueva contraseña");
            let usuarioEncontrado = listaDeUsuarios.find((u) => u.nombre === usuario);
            usuarioEncontrado.contraseña = newContraseña;
            alert("Su contraseña ha sido registrada con exito, \n por favor ingrese sus datos nuevamente para poder acceder a sus compras");
            VerificarUsuario();
        };
    };
};

function VerificarUsuario() {
    let usuario = prompt("Ingrese su nombre de Usuario");
    if (listaDeUsuarios.find((u) => u.nombre === usuario)) {
        VerificarContraseña();
    }   else {
            newUsuario();
        }
}

VerificarUsuario();

// definir funciones para calcular descuento, recargo y cuotas. 
// realizar un cases donde elegir el producto a comprar o un if por el metodo de pago-
let descuento = 15;
let recargo = 10;
let tv = 125000;
let cpu = 250000;
let hthea = 115000;
let consola = 320000;

const Descuento = (a,b) => {
    let efectivo = (a - (a*b)/100);
    return efectivo;
};
const Recargo = (a,b) => {
    let tarjeta = (a + (a*b)/100);
    return tarjeta;
};
const Cuotas = (a,b) => {
    let cuotas = a/b;
    return cuotas;
};
const MedioDePago = (a) => {
    let formaDePago = parseInt(prompt("Gracias por su compra. Elija su medio de pago. \n Escriba 1 si es efectivo y escriba 2 si es con tarjeta"));
    let efectivo ;
    let tarjeta;
    let cuotas;
    while (formaDePago === 1 || formaDePago ===2){
        if (formaDePago === 1) {
            efectivo = Descuento (a,descuento);
            alert(`Su pago sera de ${efectivo}`);
        } else {
            tarjeta = Recargo (a,recargo);
            alert(`Su pago sera de ${tarjeta}`);
            cantidadCuotas = parseInt(prompt("Si lo desea puede abonar en 1, 3 o 6 cuotas.  Puede escribir su opcion"));
            while (cantidadCuotas !== 1 && cantidadCuotas !== 3 && cantidadCuotas !==6) {
                alert(`Solo puede acceder a 1, 3, 6 cuotas`);
                cantidadCuotas = parseInt(prompt("Por favor ingrese nuevamente el nummero de cuotas,\n solo tiene acceso a 1, 3 o 6 cuotas."));
            }        
            cuotas = Cuotas(tarjeta,cantidadCuotas);
            alert(`Su pago en cuotas sera de ${cuotas}`);
        };
    }
    alert(`Solo puede elegir dos medios de pago,\n ingrese 1 para pago en efectivo \n y 2 para pago con tarjeta`);
};

let producto = parseInt(prompt("Si desea el Televisor escriba 1; \n Si desea una computadora escriba 2; \n Si desea un Home Theatre escriba 3 \n y si desea una consola de video juegos escriba 4; \n si no desea comprar nada escriba 0"));

while (producto !== 0) {
    switch (producto) {
        case 1:
            MedioDePago(tv);
            break;
        case 2:
            MedioDePago(cpu);
            break;
        case 3:
            MedioDePago(hthea);
            break;
        case 4:
            MedioDePago(consola);
            break;
    };
    producto = parseInt(prompt("Si desea el Televisor escriba 1; \n Si desea una computadora escriba 2; \n Si desea un Home Theatre escriba 3 \n y si desea una consola de video juegos escriba 4; \n si no desea comprar nada escriba 0"));
};
alert(`Gracias por visitar nuestra pagina`)

VerificarUsuario();
