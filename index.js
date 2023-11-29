

let ano = new Date().getFullYear();
let mes = new Date().getMonth();
let dia = new Date().getDate();

let anoA = document.getElementById('anoA');
let mesA = document.getElementById('mesA');
let diaA = document.getElementById('diaA');
const sub = document.getElementById('subtitulo');
const ArraySubs = ['- Hoje é o dia 3 -', '- um dois, feijão com arroz -', '- Ok, está funcionando (^◡^ ) -'];
let contador = 0;

const fotos = document.getElementById('fotos');
let idFoto = document.getElementById('clara')
const tituloFast = document.getElementById('titulo-fast');
const paragrafoFast = document.getElementById('paragrafo-fast');
const btProx = document.getElementById('prox'); 
const btAnt = document.getElementById('ant');
let contFast = 1; 
const fastArrayShort = [
  { titulo: 'Clara, A Garota do Sol Poente', imagem: 'fotos/clara.png' },
  { titulo: "Alonne, Voce não precisa se sentir só", imagem: 'fotos/alonne.jpeg' }
];

const fastArrayLong = [{paragrafo: 'Clara, é uma garota que costuma sair a tarde para que o sol\n de 40 graus não machuque sua pele.'},
{paragrafo: 'Fiz o que queria fazer, mas nao disse o que queria dizer.\n No fim, vc só me viu como um estorvo.'}]

btProx.addEventListener('click', () => {
  tituloFast.innerText = fastArrayShort[contFast].titulo;
  fotos.querySelector('img').src = fastArrayShort[contFast].imagem;
  paragrafoFast.innerText = fastArrayLong[contFast].paragrafo;
  contFast++;
  if (contFast >= fastArrayShort.length) {
    contFast = 0; 
  }
});

btAnt.addEventListener('click', () => {
    tituloFast.innerText = fastArrayShort[contFast].titulo;
    fotos.querySelector('img').src = fastArrayShort[contFast].imagem;
    paragrafoFast.innerText = fastArrayLong[contFast].paragrafo;
    contFast--;
    if (contFast < 0) {
      contFast = (fastArrayShort.length - 1); 
    }
})
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

