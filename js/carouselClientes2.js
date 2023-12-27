const itemClientes = document.getElementsByClassName('itemCliente');
const sliderContainer = document.getElementById('sliderClientes')

const slideWidth = sliderContainer.offsetWidth / 6; // Ancho de cada slide dividiendo el contenedor en 6
console.log(slideWidth)
let currentPosition = 0;


function nextSlide() {

    // Mueve la primera imagen al final del contenedor
    

    if (currentPosition > -(slideWidth * 2)) {
        currentPosition -= slideWidth;
        sliderContainer.style.transform = `translateX(${currentPosition}px)`;
        sliderContainer.style.transition = "transform 1.4s ease-in-out";
        /* sliderContainer.appendChild(itemClientes[0]); */
        sliderContainer.insertBefore(itemClientes[11], itemClientes[0])

        
    } else {
        // Si estás en el último slide, regresa al principio
        currentPosition = 0;
        sliderContainer.style.transform = `translateX(${currentPosition}px)`;
        sliderContainer.style.transition = 'transform 0s';
    }

}

// Configura el intervalo para cambiar automáticamente los slides cada 3 segundos
const intervalId = setInterval(nextSlide, 3000);