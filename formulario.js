let usuarios = [
    {id:1, email:"gabymaujw@gmail.com", contraseña:"pachy"},
];


function validarEmail() {
    if (document.fvalida.email.value.length === 0) {
        Toastify({
            text: `Tiene que escribir su Email`,
            duration: 2000,
            gravity: "top", 
            position: "center", 
            stopOnFocus: true, 
            style: {
            background: "linear-gradient(0deg, rgba(4,9,244,1) 0%, rgba(48,45,253,1) 100%)",
            },
        }).showToast();
        document.fvalida.email.focus();
        return false;
    }
    return true;
}

function validarContraseña() {
    if (document.fvalida.contraseña.value.length === 0) {
        Toastify({
            text: `Tiene que escribir su Contraseña`,
            duration: 2000,
            gravity: "top", 
            position: "center", 
            stopOnFocus: true, 
            style: {
            background: "linear-gradient(0deg, rgba(4,9,244,1) 0%, rgba(48,45,253,1) 100%)",
            },
        }).showToast();
        document.fvalida.contraseña.focus();
        return false;
    }
    return true;
}

function VerificarUsuario() {
    if (usuarios.find((u) => u.email === document.fvalida.email.value)) {
        verificarContraseña();
    }   else {
        Toastify({
            text: `Su usuario no se encuentra registrado, lo registraremos en este momento`,
            duration: 2000,
            gravity: "top", 
            position: "center", 
            stopOnFocus: true, 
            style: {
            background: "linear-gradient(0deg, rgba(4,9,244,1) 0%, rgba(48,45,253,1) 100%)",
            },
        }).showToast();
            newUsuario();
        }
}

var logueo = document.createElement("div");
var contenedorFormulario = document.getElementsByClassName("contenedorFormulario")[0];


function verificarContraseña() {
    let usuarioContraseña = false;
    usuarios.forEach(usuario => {
        if (usuario.contraseña === document.fvalida.contraseña.value && usuario.email === document.fvalida.email.value)
            { usuarioContraseña = true;
            }
        })
        if (usuarioContraseña) {
            Toastify({
                text: `BIENVENIDO, Disfrute nuestra tienda`,
                duration: 2000,
                gravity: "top", 
                position: "center", 
                stopOnFocus: true, 
                style: {
                background: "linear-gradient(0deg, rgba(4,9,244,1) 0%, rgba(48,45,253,1) 100%)",
                },
            }).showToast();
            logueo.textContent = "";
            logueo.textContent =`Usted esta navegando bajo el usuario: ${document.fvalida.email.value}`;
            contenedorFormulario.appendChild(logueo);
            document.fvalida.email.value="";
            document.fvalida.contraseña.value="";
        } else {
            Toastify({
                text: `Su contraseña es erronea, intente nuevamente`,
                duration: 2000,
                gravity: "top", 
                position: "center", 
                stopOnFocus: true, 
                style: {
                background: "linear-gradient(0deg, rgba(4,9,244,1) 0%, rgba(48,45,253,1) 100%)",
                },
            }).showToast();
        }
}

function newUsuario() {   
    let id = usuarios.length + 1;
    let email = document.fvalida.email.value;
    let contraseña = document.fvalida.contraseña.value;
    let nuevoUsuario = { id: id, email: email, contraseña: contraseña };
    usuarios.push(nuevoUsuario);
    Toastify({
        text: `Registro realizado`,
        duration: 2000,
        gravity: "top", 
        position: "center", 
        stopOnFocus: true, 
        style: {
        background: "linear-gradient(0deg, rgba(4,9,244,1) 0%, rgba(48,45,253,1) 100%)",
        },
    }).showToast();
};

function validarFormulario() {
    if (!validarEmail() || !validarContraseña() || !VerificarUsuario()) {
    event.preventDefault(); // Evita que el formulario se envíe si hay errores de validación
    }
}

let enviar = document.getElementById("enviar");
enviar.addEventListener("click", validarFormulario);
