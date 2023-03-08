const btn = document.querySelector("[data-form-btn]");

console.log(btn);

/* EVENTO LISTENER */

/* btn.addEventListener("click", function(evento){
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
}); */

/* CONVERTIR FUNCION EN ARROW FUNCTION O FUNCION FLECHA*/

/* btn.addEventListener("click", (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
}); */

/* CONVERTIT A FUNCION ANONIMA */

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
};

btn.addEventListener("click", createTask);


