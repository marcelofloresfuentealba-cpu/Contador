const btnSumar = document.querySelector('#btnSumar');
const btnRestar = document.querySelector('#btnRestar');
const cantidadSpan = document.querySelector('#cantidad');
const totalSpan = document.querySelector('#total');


const precioUnitario = 400000;
let cantidad = 0;


function actualizarTotal() {
  cantidadSpan.textContent = cantidad;
  totalSpan.textContent = `$${(cantidad * precioUnitario).toFixed(0)}`;
}


btnSumar.onclick = function() {
  cantidad++;
  actualizarTotal();
};

btnRestar.onclick = function() {
  if (cantidad > 0) {
    cantidad--;
    actualizarTotal();
  }
};