function ordenarLista(items) {
    let contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = ""; 
    items.forEach((item, index) => {
        let listItem = document.createElement("li");
        listItem.classList.add("list-group-item");
        listItem.textContent = item;
        contenedor.appendChild(listItem);
    });
}

function cargarLista() {
    let listaAlmacenada = localStorage.getItem("listado");
    return listaAlmacenada ? JSON.parse(listaAlmacenada) : [];
}

function guardarLista(items) {
    localStorage.setItem("listado", JSON.stringify(items));
}

document.getElementById("agregar").addEventListener("click", function() {
    let input = document.getElementById("item");
    let itemValue = input.value.trim();

    if (itemValue) {
        let items = cargarLista();
        items.push(itemValue);
        guardarLista(items);
        ordenarLista(items);
        input.value = "";
    }
});

document.getElementById("limpiar").addEventListener("click", function() {
    localStorage.removeItem("listado");
    ordenarLista([]);
});

document.addEventListener("DOMContentLoaded", function(){
    let items = cargarLista();
    ordenarLista(items);
});

