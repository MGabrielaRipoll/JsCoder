let usuarios = [
    {id:1, email:"gabymaujw@gmail.com", contraseña:"pachy"},
];
var email = document.getElementById('email').value;
var contraseña = document.getElementById('contraseña').value;

function validarEmail() {
    if (document.fvalida.email.value.length === 0) {
        Toastify({
            text: `Tiene que escribir su Email`,
            duration: 2000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "bottom", 
            position: "center", 
            stopOnFocus: true, 
            style: {
            background: "linear-gradient(0deg, rgba(4,9,244,1) 0%, rgba(48,45,253,1) 100%)",
            },
            onClick: function(){} 
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
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "bottom", 
            position: "center", 
            stopOnFocus: true, 
            style: {
            background: "linear-gradient(0deg, rgba(4,9,244,1) 0%, rgba(48,45,253,1) 100%)",
            },
            onClick: function(){} 
        }).showToast();
        document.fvalida.contraseña.focus();
        return false;
    }
    return true;
}

function VerificarUsuario() {
    if (usuarios.find((u) => u.email === email)) {
        verificarContraseña();
    }   else {
        Toastify({
            text: `Su usuario no se encuentra registrado, lo registraremos en este momento`,
            duration: 2000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "bottom", 
            position: "center", 
            stopOnFocus: true, 
            style: {
            background: "linear-gradient(0deg, rgba(4,9,244,1) 0%, rgba(48,45,253,1) 100%)",
            },
            onClick: function(){} 
        }).showToast();
            newUsuario();
        }
}

function verificarContraseña() {
    if (usuarios.find((u=> u.contraseña === contraseña))) {
        Toastify({
            text: `BIENVENIDO, Disfrute nuestra tienda`,
            duration: 2000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "bottom", 
            position: "center", 
            stopOnFocus: true, 
            style: {
            background: "linear-gradient(0deg, rgba(4,9,244,1) 0%, rgba(48,45,253,1) 100%)",
            },
            onClick: function(){} 
        }).showToast();
    } else {
        Toastify({
            text: `Su contraseña es erronea, intente nuevamente`,
            duration: 2000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "bottom", 
            position: "center", 
            stopOnFocus: true, 
            style: {
            background: "linear-gradient(0deg, rgba(4,9,244,1) 0%, rgba(48,45,253,1) 100%)",
            },
            onClick: function(){} 
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
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", 
        position: "center", 
        stopOnFocus: true, 
        style: {
        background: "linear-gradient(0deg, rgba(4,9,244,1) 0%, rgba(48,45,253,1) 100%)",
        },
        onClick: function(){} 
    }).showToast();
};

function validarFormulario() {
    if (!validarEmail() || !validarContraseña() || !VerificarUsuario()) {
    event.preventDefault(); // Evita que el formulario se envíe si hay errores de validación
    }
}

let enviar = document.getElementById("enviar");
enviar.addEventListener("click", validarFormulario);
console.log(usuarios);