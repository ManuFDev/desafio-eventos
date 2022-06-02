let carrito = [];

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
        this.id = -1;
    }
    setId (nuevoId) {
        this.id = nuevoId
    }
    sumaIva() {
        return this.precio * 1.21;
    }
    vender() {
        this.vendido = true;
    }
    mostrarDescripcion() {
        return (this.id + " - " + this.nombre + " - " + "Precio: $" + this.precio + " - " + "Precio final con IVA: $" + this.sumaIva());
    }
}

function cargarNuevoProducto() {
    let nuevoProducto = solicitarNuevoProducto();

    if (nuevoProducto) {

        nuevoProducto.setId(id);
        id ++;
        carrito.push(nuevoProducto)
        agregarItem(nuevoProducto);

        function agregarItem(producto) {
            let lista = document.getElementById("list__container");
            let item = document.createElement("li");
            item.textContent = producto.mostrarDescripcion();
            lista.appendChild(item);
        }
        alert("Producto agregado con exito");
    }
}


function solicitarNuevoProducto() {
    let check = true;
    while (check) {
        let msj = "";
        let nombre = prompt("Ingrese nombre del producto");
        let precio = parseFloat(prompt("Ingresa el precio del producto"));
        let vendido = false;

        if (!nombre) {
            msj += "\nDebe Ingresar el nombre del producto\n"
        }

        if (isNaN(precio)) {
            msj += "Debe Ingresar un valor numerico"
        }

        if (msj != "") {
            alert(msj);
            check = confirm("Desea cargar de nuevo los datos?");
        } else {
            return new Producto(nombre, precio, vendido);
        }
    }
}

function eliminarProducto() {

    if (productoExistente()) {
        mostrarArrayCarrito();
        let productoId = parseInt(prompt("Ingrese el ID del producto a eliminar:"));

        if (productoId) {
            let productoEncontrado = carrito.find((producto) => producto.id == productoId);

            if (productoEncontrado) {
                let confirmacion = confirm("Deseas eliminar el producto: " + productoEncontrado.mostrarDescripcion() + "?");
                if (confirmacion) {
                carrito = carrito.filter((producto) => producto.id != productoId);
                    alert("Producto eliminado del carrito");
                }
            }
        }
    }
}

function productoExistente() {
    if (carrito.length == 0) {
        alert("No hay productos en el carrito");
        return false
    }
    return true;
}

function mostrarCarrito() {
    if (productoExistente()) {
    mostrarArrayCarrito();
    } 
    }

function mostrarArrayCarrito() {
    let mensaje = "Los productos que tenes en el carrito son:  " + "\n";

    carrito.forEach((productos) => {
        mensaje +=  productos.mostrarDescripcion() + "\n";
    })
    alert(mensaje);
}

function finalizarCompra() {
    let totalCompra = carrito.reduce((sumar, precios) => sumar + precios.sumaIva(), 0);
    // alert(`El total a abonar es de: $ ${totalCompra} (precio con iva)`);
    let pTotal = document.getElementById("total__compra");
    let total = document.createElement("p");
    total.textContent = `El total a abonar es de: $ ${totalCompra} (precio con iva)`;
    pTotal.appendChild(total);

    if (totalCompra) {
        alert("Gracias por utilizar el simulador");
        flag = false;
    } else {
        alert("No ingresaste una opcion valida")
    }

}



