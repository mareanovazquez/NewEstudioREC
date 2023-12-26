document.addEventListener("DOMContentLoaded", function () {
    const sliderContainer = document.getElementById("slider-container");

    // Configuración del slider
    const slideWidth = sliderContainer.offsetWidth / 10; // Ancho de cada slide
    let currentPosition = 0;

    // Función para pasar al siguiente slide
    function nextSlide() {
        if (currentPosition > -(slideWidth * 2)) {
            currentPosition -= slideWidth;
            sliderContainer.style.transform = `translateX(${currentPosition}px)`;
        } else {
            // Si estás en el último slide, regresa al principio
            currentPosition = 0;
            sliderContainer.style.transform = `translateX(${currentPosition}px)`;
        }
    }

    // Configura el intervalo para cambiar automáticamente los slides cada 3 segundos
    const intervalId = setInterval(nextSlide, 3000);

    // Detener el intervalo cuando el mouse pasa sobre el contenedor
    sliderContainer.addEventListener("mouseenter", function () {
        clearInterval(intervalId);
    });

    // Reanudar el intervalo cuando el mouse sale del contenedor
    sliderContainer.addEventListener("mouseleave", function () {
        intervalId = setInterval(nextSlide, 3000);
    });
});