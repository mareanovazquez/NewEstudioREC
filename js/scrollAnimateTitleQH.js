document.addEventListener("DOMContentLoaded", function () {
    // Función para verificar si un elemento está en la vista
    let titleQueHacemos = document.getElementById('titleQueHacemos')

    window.addEventListener('scroll', function(){
        let queHacemosOffSetTop = document.getElementById('principal').offsetTop;
        if (window.scrollY>=queHacemosOffSetTop) {
            titleQueHacemos.classList.add('animate__fadeInLeft');
            titleQueHacemos.classList.add('animate__slow')
        }
    })
    
});


