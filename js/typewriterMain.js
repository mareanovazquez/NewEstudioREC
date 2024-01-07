document.addEventListener("DOMContentLoaded", function () {
    // Función para animar un elemento tipo máquina de escribir
    function typeWriter(element, text, speed) {
        let i = 0;
        const intervalId = setInterval(function () {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(intervalId);
            }
        }, speed);
    }

    // Selecciona los elementos con los IDs "line1Main" y "line2Main"
    const line1MainElement = document.getElementById("line1Main");
    const line2MainElement = document.getElementById("line2Main");

    // Define la velocidad de la animación
    const typingSpeed = 100; // Ajusta la velocidad según tu preferencia

    // Aplica la animación a cada elemento
    typeWriter(line1MainElement, line1MainElement.textContent, typingSpeed);
    typeWriter(line2MainElement, line2MainElement.textContent, typingSpeed);
});

