// variables
let nombre = document.querySelector("#nombre");
let email = document.querySelector("#email");
let formulario = document.querySelector("#formulario");
let infoForm = document.querySelector(".infoForm");
let productosCarrito = [];
let opcionDeseada = document.querySelectorAll(".form-select");
let reserva = document.querySelector(".btn-reservar");


//eventos
nombre.addEventListener("input", function(){
    if(nombre.value === ""){
        alert("ingrese un nombre")
    }
});

email.addEventListener("input", function(){
    if(email.value === ""){
        alert("ingrese su correo electronico")
    }
});

reserva.addEventListener("click", function(){
    let dia = document.querySelector("#day").value;
    let hora = document.querySelector("#hr").value;
    let selector = document.querySelector(".selector");
    selector.innerHTML = `
    <div class = "alert alert-info" role = "alert">
    <p>Usted tiene reserva para el ${dia} a las ${hora}</p>
    </div>
    `
})

//constantes
const mostrarInfoForm = formulario.addEventListener("submit", function (evento){
    evento.preventDefault();
    infoForm.innerHTML = `
    <div class="alert alert-info" role="alert">
    <p>Buen dia ${nombre.value}, nos contactaremos al correo ${email.value} para darle mas informacion</p>
    </div>
    `;
});

 const cards = document.querySelectorAll(".card");
 cards.forEach((card) => {
    card.addEventListener("click", (evento) =>{
        datosProducto(evento.target.parentElement)
    })
 });

 const carrito = document.querySelector("#carrito");

//funiones

function datosProducto (producto){
    const infoProducto = {
        titulo:producto.querySelector(".card-title").textContent,
        texto:producto.querySelector(".card-text").textContent,
    }
    productosCarrito= [...productosCarrito, infoProducto];
    carritoHTML();
};

function carritoHTML(){
    cleanHTML();
productosCarrito.forEach((producto) => {
    const row = document.createElement("p");
    row.innerHTML = `
    <div class = "container">
    <h5>${producto.titulo}</h5>
    <p>${producto.texto}</p>
    <button class = "btn btn-danger">Eliminar</button>
    </div>
    `
    carrito.appendChild(row);
})}


function cleanHTML (){
    carrito.innerHTML = "";
}