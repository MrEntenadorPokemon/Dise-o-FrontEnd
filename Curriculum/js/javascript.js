// ===========================
// Descargar CV en PDF
// ===========================
const btnDescargar = document.querySelector("#descargarPDF");
btnDescargar.onclick = () => {
    window.print(); // Más adelante se puede mejorar con jsPDF
};

// ===========================
// Carrusel de imágenes
// ===========================
const imagenes = [
    "img/PC1.JPG",
    "img/PC2.JPG",
    "img/CV.png",
    "img/ProyectoRedes.png"
];
let indice = 0;

const carruselImg = document.querySelector("#carruselImg");
const btnPrev = document.querySelector("#prevBtn");
const btnNext = document.querySelector("#nextBtn");

function mostrarImagen() {
    carruselImg.src = imagenes[indice];
}

btnPrev.onclick = () => {
    indice = (indice - 1 + imagenes.length) % imagenes.length;
    mostrarImagen();
};

btnNext.onclick = () => {
    indice = (indice + 1) % imagenes.length;
    mostrarImagen();
};

// Mostrar la primera imagen al cargar
mostrarImagen();

// ===========================
// Mensaje de Bienvenida (con fade)
// ===========================
const bienvenida = document.querySelector("#bienvenida");
const mensajes = [
    "Le presento mi curriculum vitae.",
    "Aquí encontrará algunos proyectos que he realizado a lo largo de mi carrera.",
    "Me apasionan las tecnologías y la informática.",
];
let mensajeIndex = 0;

function cambiarMensaje() {
    bienvenida.style.opacity = 0;
    setTimeout(() => {
        bienvenida.textContent = mensajes[mensajeIndex];
        bienvenida.style.opacity = 1;
        mensajeIndex = (mensajeIndex + 1) % mensajes.length;
    }, 800); // coincide con la transición en CSS
}

cambiarMensaje();
setInterval(cambiarMensaje, 4000);
