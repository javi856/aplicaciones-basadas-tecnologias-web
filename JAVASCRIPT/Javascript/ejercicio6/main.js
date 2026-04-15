// Función para alternar la visibilidad de una sección
function toggleVisibility(link) {
    // Selecciona el párrafo asociado al enlace
    const paragraph = link.previousElementSibling;
  
    // Alterna la visibilidad del párrafo
    if (paragraph.style.display === "none") {
      paragraph.style.display = "block";
      link.textContent = "Ocultar contenidos";
    } else {
      paragraph.style.display = "none";
      link.textContent = "Mostrar contenidos";
    }
  }
  