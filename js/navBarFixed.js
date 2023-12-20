document.addEventListener("scroll", function() {
    let navBar = document.querySelector(".navBar");
    let principal = document.getElementById("principal");

    // Calcula la posición de sectionUno
    let principalRect = principal.getBoundingClientRect();

    // Agrega o quita la clase según la posición de scroll
    if (window.scrollY > principalRect.bottom) {
        navBar.classList.add("fixed");
    } else {
        navBar.classList.remove("fixed");
    }
});