// Variable global para rastrear el estado de visibilidad
let isTextVisible = false;

function toggleText() {
  // Obtén el elemento del texto adicional y el enlace
  const additionalText = document.querySelector('.additional');
  const toggleLink = document.querySelector('#toggleLink');

  // Cambia la visibilidad y el texto del enlace
  if (isTextVisible) {
    additionalText.classList.add('hidden');
    additionalText.classList.remove('visible');
    toggleLink.textContent = 'Seguir leyendo';
  } else {
    additionalText.classList.add('visible');
    additionalText.classList.remove('hidden');
    toggleLink.textContent = 'Ocultar exceso de texto';
  }

  // Alterna el estado
  isTextVisible = !isTextVisible;
}
