// creamos la funcion principal
function agregarTarea() {
  let textinput = document.getElementById("nuevaTarea").value;

  if (textinput == "") {
    alert("la tarea no puede estar vacia");
    return;
  }

  // creamos la tarea
  let nuevaTarea = document.createElement("li");
  nuevaTarea.textContent = textinput + " ";
  // creamos el boton eliminar
  let botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.onclick = function () {
    nuevaTarea.remove();
  };
  // agregamos boton eliminar
  nuevaTarea.appendChild(botonEliminar);
  // agregamos elemento a la lista
  document.getElementById("listaTareas").appendChild(nuevaTarea);
  // limpiamos el input, estableciendo value como null
  document.getElementById("nuevaTarea").value = "";
}
