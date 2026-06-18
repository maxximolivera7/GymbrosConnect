document.addEventListener("DOMContentLoaded", () => {
    // 1. Interacción para el buscador de spotters en el Inicio (index.html)
    const formSpotter = document.querySelector("main form");
    if (formSpotter) {
        formSpotter.addEventListener("submit", (e) => {
            e.preventDefault();
            const gimnasio = document.getElementById("gym")?.value || "tu gimnasio";
            alert(`¡Buscando Gymbros disponibles en ${gimnasio}! Conectando de forma interactiva...`);
        });
    }

    // 2. Interacción para el Muro de Rutinas (rutinas.html)
    const formRutina = document.querySelector(".contenedor-formulario form");
    if (formRutina) {
        formRutina.addEventListener("submit", (e) => {
            e.preventDefault();
            const nombre = document.getElementById("nombre")?.value || "Gymbro";
            alert(`¡Buenas marcas, ${nombre}! Tus levantamientos fueron publicados en el muro correctamente.`);
            formRutina.reset(); // Limpia los campos simulando el envío exitoso
        });
    }
});