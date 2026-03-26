/* =====================================================
MENÚ HAMBURGUESA
Controla apertura y cierre del menú en móvil
===================================================== */

/* seleccionamos el botón hamburguesa */

const menuToggle = document.getElementById("menu-toggle");

/* seleccionamos el menú */

const navMenu = document.getElementById("nav");


/* =====================================================
EVENTO CLICK DEL BOTÓN HAMBURGUESA
===================================================== */

menuToggle.addEventListener("click", function(){

/* agrega o quita la clase active */

navMenu.classList.toggle("active");

});



/* =====================================================
CERRAR MENÚ AL HACER CLICK EN UN ENLACE
Mejora la experiencia en celular
===================================================== */

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(function(link){

link.addEventListener("click", function(){

navMenu.classList.remove("active");

});

});



/* =====================================================
RESETEAR MENÚ AL CAMBIAR EL TAMAÑO DE PANTALLA
Evita que el menú quede abierto en desktop
===================================================== */

window.addEventListener("resize", function(){

if(window.innerWidth > 768){

navMenu.classList.remove("active");

}

});


/* =====================================
CONTADOR ANIMADO HERO
===================================== */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

const target = +counter.dataset.target;

const duration = 2000;

const startTime = performance.now();

function animateCounter(currentTime){

const progress = Math.min((currentTime - startTime) / duration, 1);

counter.innerText = Math.floor(progress * target);

if(progress < 1){

requestAnimationFrame(animateCounter);

}else{

counter.innerText = target;

}

}

requestAnimationFrame(animateCounter);

});


/* ===================================
arriba termina el inicio
abajo esta la seccion de soluciones 
=================================== */







/* ===================================
abajo esta lo de proyectos 
=================================== */

const botones = document.querySelectorAll(".filtro-btn");
const proyectos = document.querySelectorAll(".proyecto-card");

botones.forEach(boton => {
    boton.addEventListener("click", () => {

        const filtro = boton.getAttribute("data-filter");

        // Si se presiona "Todos"
        if(filtro === "all"){
            // Quita active de todos los demás botones
            botones.forEach(b => b.classList.remove("active"));
            boton.classList.add("active");

            // Muestra todos los proyectos
            proyectos.forEach(p => p.style.display = "block");

        } else {
            // Desactiva "Todos"
            document.querySelector('.filtro-btn[data-filter="all"]').classList.remove("active");

            // Alterna active del botón clickeado
            boton.classList.toggle("active");

            // Lista de filtros activos
            const activos = Array.from(botones)
                                .filter(b => b.classList.contains("active") && b.getAttribute("data-filter") !== "all")
                                .map(b => b.getAttribute("data-filter"));

            // Si no hay filtros activos, vuelve a mostrar todo
            if(activos.length === 0){
                proyectos.forEach(p => p.style.display = "block");
                document.querySelector('.filtro-btn[data-filter="all"]').classList.add("active");
            } else {
                proyectos.forEach(p => {
                    const mostrar = activos.some(f => p.classList.contains(f));
                    p.style.display = mostrar ? "block" : "none";
                });
            }

        }

    });
});



// ==============================
// INICIALIZAR EMAILJS
// ==============================
document.addEventListener("DOMContentLoaded", function(){

const form = document.getElementById("form-contacto");
const btn = document.getElementById("btn-enviar");
const loader = btn.querySelector(".loader");
const text = btn.querySelector("span");
const message = document.getElementById("form-message");

form.addEventListener("submit", function(){

loader.style.display = "block";
text.style.opacity = "0.5";

message.style.color = "#00ff88";
message.textContent = "Enviando solicitud...";

});

});