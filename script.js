function agregar(valor) {
    document.getElementById('pantalla').value += valor;
}

function borrar() {
    document.getElementById('pantalla').value = '';
}

function calcular() {
    const calcularValor = document.getElementById('pantalla').value;
    const resultado = eval(calcularValor);
    document.getElementById('pantalla').value = resultado;
}
