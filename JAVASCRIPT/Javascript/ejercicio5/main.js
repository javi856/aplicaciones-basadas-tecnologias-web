// Selecciono la lista
const lista = document.getElementById("lista");

// Función para añadir un nuevo elemento a la lista
function addItem() {
  // Creo un nuevo elemento de lista
  const newItem = document.createElement("li");
  newItem.className = "list-group-item";

  // Cuento el número de elementos en la lista y añado el texto correspondiente
  const itemCount = lista.children.length + 1;
  newItem.textContent = `Elemento ${itemCount}`;

  // Añado el nuevo elemento a la lista
  lista.appendChild(newItem);
}
