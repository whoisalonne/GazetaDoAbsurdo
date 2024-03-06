

let ano = new Date().getFullYear();
let mes = new Date().getMonth();
let dia = new Date().getDate();

let anoA = document.getElementById('anoA');
let mesA = document.getElementById('mesA');
let diaA = document.getElementById('diaA');
const sub = document.getElementById('subtitulo');
const ArraySubs = ['- O contéudo deste site não é verídico e não deve ser levado a sério de forma alguma -', '- Gazeta do Povo? Nunca ouvi falar -', '- Atualização das páginas em breve (^◡^ ) -', ' - Versão mobile ainda não disponivel - '];
let contador = 0;

setInterval(() => {
    sub.innerText = ArraySubs[contador];
    contador++;
    if (contador === 4) { contador = 0 };
}, 12000)

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