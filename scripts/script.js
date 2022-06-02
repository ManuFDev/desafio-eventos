let flag = true;
let id = 1;



// alert("Bienvenido al simulador de compra!")


// while (flag) {
//     let mensaje = " Que desea hacer?: ";
//     mensaje += "\n1)Cargar nuevo producto";
//     mensaje += "\n2)Eliminar un producto del carrito";
//     mensaje += "\n3)Mostrar productos en el carrito";
//     mensaje += "\n4)Finalizar y abonar la compra";
//     mensaje += "\n5)Salir";

//     let respuesta = parseInt(prompt(mensaje));

//     switch (respuesta) {

//         case 1:
//             cargarNuevoProducto();
//             break;

//         case 2:
//             eliminarProducto();
//             break;

//         case 3:
//             mostrarCarrito();
//             break;

//         case 4:
//             finalizarCompra();
//             break;

//         case 5:
//             alert("Gracias por utilizar el simulador");
//             flag = false;
//             break;

//         default:
//             alert("No ingresaste una opcion valida");
//             break;
//     }
// }

let titleList = document.getElementById("title__list");
titleList.textContent = "Lista de compras: ";
let lista = document.getElementById("list__container");


function mostrarItem(){
    if (input.value.trim() != "") {
        agregarItem(input.value);
        input.value = "" ;
    }
}

function  agregarItem (item){
    let  li = document.createElement("li");
    li.textContent = item ;
    lista.appendChild(li);
}


let input = document.getElementById("inputList");
input.addEventListener("keypress",(e)=>{
    console.log("entre");
    if (e.keyCode === 13) {
        mostrarItem();
    }
});


let boton = document.getElementById("addLista");
boton.addEventListener("click",()=>{
    mostrarItem();
})





