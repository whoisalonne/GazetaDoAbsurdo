

let ano = new Date().getFullYear();
let mes = new Date().getMonth();
let dia = new Date().getDate();

let anoA = document.getElementById('anoA');
let mesA = document.getElementById('mesA');
let diaA = document.getElementById('diaA');
const sub = document.getElementById('subtitulo');
const ArraySubs = ['- Hoje é o dia 3 -', '- um dois, feijão com arroz -', '- Ok, está funcionando (^◡^ ) -'];
let contador = 0;

const fotos = document.getElementById('fotos')

setInterval(() => {
    sub.innerText = ArraySubs[contador];
    contador++;
    if (contador === 3) { contador = 0 };
}, 10000)

fotos.addEventListener('click', () => { if(fotos.style.transform === 'translateX(110%)') {
    fotos.style.transform = 'translateX(0%)';
} else {
    fotos.style.transform = 'translateX(110%)';
}})

anoA.innerText = ano;
diaA.innerText = dia;

switch (mes) {
    case 0:
        mesA.innerText = "Jan";
        break;
    case 1:
        mesA.innerText = "Fev";
        break;
    case 2:
        mesA.innerText = "Mar";
        break;
    case 3:
        mesA.innerText = "Abr";
        break;
    case 4:
        mesA.innerText = "Mai";
        break;
    case 5:
        mesA.innerText = "Jun";
        break;
    case 6:
        mesA.innerText = "Jul";
        break;
    case 7:
        mesA.innerText = "Ago";
        break;
    case 8:
        mesA.innerText = "Set";
        break;
    case 9:
        mesA.innerText = "Out";
        break;
    case 10:
        mesA.innerText = "Nov";
        break;
    case 11:
        mesA.innerText = "Dez";
        break;
}

