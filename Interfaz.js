
export class Interfaz {

  agregarProducto(producto) {
    const listaDeProductos = document.getElementById("lista-productos");
    const elemento = document.createElement("div");
    elemento.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Producto</strong>: ${producto.nombre} -
                    <strong>Precio</strong>: ${producto.precio} - 
                    <strong>Año</strong>: ${producto.año}
                    <a href="#" class="btn btn-danger" name="eliminar">Eliminar</a>
                </div>
            </div>
        `;
    listaDeProductos.appendChild(elemento);
  }

 
  resetearFormulario() {
    document.getElementById("formulario-producto").reset();
  }

  eliminarProducto(elemento) {
    if (elemento.name === "eliminar") {
      elemento.parentElement.parentElement.remove();
      this.mostrarMensaje("Producto eliminado exitosamente", "success");
    }
  }

  mostrarMensaje(mensaje, claseCss) {
    const div = document.createElement("div");
    div.className = `alert alert-${claseCss} mt-2`;
    div.appendChild(document.createTextNode(mensaje);

    const contenedor = document.querySelector(".container");
    const aplicacion = document.querySelector("#App");

    contenedor.insertBefore(div, aplicacion);

    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }
}
