let valorEntrada = 200;


function calcularTotal(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);//obtengo datos del form
    const formProps = Object.fromEntries(formData);// pasa los datos a objetos para acceder a ellos

    let valorEntradaDescuento;

    if (formProps.categoria == "1") {
        valorEntradaDescuento = (80 * valorEntrada) / 100
    }
    else if ((formProps.categoria == "2")) {
        valorEntradaDescuento = (50 * valorEntrada) / 100
    } else {
        valorEntradaDescuento = (15 * valorEntrada) / 100
    }
    let precioTotal = (valorEntradaDescuento * parseInt(formProps.cantidad));

    let calculoTotal = document.getElementById('mostrarTotal')

    calculoTotal.innerHTML = `<strong>Total a pagar: $ ${precioTotal}</strong>`;

}

// calcularTotal(categoriaSeleccionada);

const form = document.getElementById('compras'); //obtengo el form de compras
form.addEventListener('submit', calcularTotal); //le agrego un evento submit que llama a calculartotal

function borrarDatos(e) {
    e.preventDefault();
    form.reset();
}

const btnBorrar = document.getElementById('btn-borrar'); 
btnBorrar.addEventListener('click', borrarDatos); 

