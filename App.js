import { Producto } from "./Producto.js";
import { Interfaz } from "./Interfaz.js";

document
  .getElementById("formulario-producto")
  .addEventListener("submit", function (e) {
    
    e.preventDefault();
    
    const nombre = document.getElementById("nombre").value,
      precio = document.getElementById("precio").value,
      año = document.getElementById("año").value;
    
    const producto = new Producto(nombre, precio, año);
   
    const interfaz = new Interfaz();
  
    if (nombre === "" || precio === "" || año === "") {
      interfaz.mostrarMensaje("Por favor, ingrese datos en todos los campos", "danger");
    }

    interfaz.agregarProducto(producto);
    interfaz.mostrarMensaje("Producto agregado exitosamente", "success");
    interfaz.resetearFormulario();
  });

document.getElementById("lista-productos").addEventListener("click", (e) => {
  const interfaz = new Interfaz();
  interfaz.eliminarProducto(e.target);
  e.preventDefault();
});
