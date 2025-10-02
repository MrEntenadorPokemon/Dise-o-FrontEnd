document.addEventListener("DOMContentLoaded", function() {
    // ===========================
    // Descargar CV en PDF
    // ===========================
    const btnDescargar = document.querySelector("#descargarPDF");
    if (btnDescargar) {
        btnDescargar.onclick = () => {
            window.print();
        };
    }

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
        if (carruselImg) carruselImg.src = imagenes[indice];
    }

    if (btnPrev && btnNext && carruselImg) {
        btnPrev.onclick = () => {
            indice = (indice - 1 + imagenes.length) % imagenes.length;
            mostrarImagen();
        };

        btnNext.onclick = () => {
            indice = (indice + 1) % imagenes.length;
            mostrarImagen();
        };

        mostrarImagen();
    }

    // ===========================
    // Mensaje de Bienvenida (con fade)
    // ===========================
    const bienvenida = document.querySelector("#bienvenida");
    const mensajes = [
        "Le presento mi curriculum vitae.",
        "Aquí encontrará algunos proyectos que he realizado a lo largo de mi carrera.",
        "Y asi mismo, mis habilidades y conocimientos."
    ];
    let mensajeIndex = 0;

    function cambiarMensaje() {
        if (!bienvenida) return;
        bienvenida.style.opacity = 0;
        setTimeout(() => {
            bienvenida.textContent = mensajes[mensajeIndex];
            bienvenida.style.opacity = 1;
            mensajeIndex = (mensajeIndex + 1) % mensajes.length;
        }, 800);
    }

    if (bienvenida) {
        cambiarMensaje();
        setInterval(cambiarMensaje, 4000);
    }
});