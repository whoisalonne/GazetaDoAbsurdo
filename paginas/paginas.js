const corpo = document.body;
const leitura = document.getElementById('modoLeitura');
const cabecalho = document.getElementById('header');
let temporizadorEsconder;


function mudarCor(cor) {
    corpo.style.backgroundColor = cor;
}

setInterval(() => {
    leitura.style.display = 'none';
}, 20000);

// Função para esconder o cabeçalho após um período de inatividade
function esconderCabecalho() {
    cabecalho.style.top = '-80vw';
}

// Evento de rolagem da página
window.addEventListener('scroll', () => {
    cabecalho.style.top = '1vh'; // Mostra o cabeçalho
    clearTimeout(temporizadorEsconder); // Limpa o temporizador anterior
    temporizadorEsconder = setTimeout(esconderCabecalho, 7000); // Define um novo temporizador para esconder o cabeçalho
});

// Inicialmente, esconde o cabeçalho após um período de inatividade
temporizadorEsconder = setTimeout(esconderCabecalho, 7000);