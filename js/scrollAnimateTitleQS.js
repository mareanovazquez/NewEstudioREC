document.addEventListener("DOMContentLoaded", function () {
    // Función para verificar si un elemento está en la vista
    let titleQuienesSomos = document.getElementById('titleQuienesSomos')

    window.addEventListener('scroll', function(){
        let quienesSomosOffSetTop = document.getElementById('queHacemos').offsetTop;
        if (window.scrollY>=quienesSomosOffSetTop) {
            titleQuienesSomos.classList.add('animate__fadeInLeft');
            titleQuienesSomos.classList.add('animate__slow');
        }
    })
    
});