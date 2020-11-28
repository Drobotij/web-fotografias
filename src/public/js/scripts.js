/* PARA LOS CAROUSELES */

const ImagenesCarousel = document.querySelector('.imagenes-carousel');
const BotonesCarousel = document.querySelectorAll('.b-carousel');
const CantImagenes = document.querySelectorAll('.imagenes-carousel img');



let IndexImagen = 1;
let translateX = 0;

const anterior = () => {
    if (IndexImagen !== 1) {
        IndexImagen = IndexImagen - 1;
        translateX += 100;
        ImagenesCarousel.style.transform = `translateX(${translateX}%)`;
    }
}


const siguiente = () => {
    if (IndexImagen !== CantImagenes.length) {
        IndexImagen++;
        translateX -= 100;
        ImagenesCarousel.style.transform = `translateX(${translateX}%)`;
    }
}

/* boton mensaje */

const code = document.querySelector('#code');
const msg = document.querySelector('#msg');
code.addEventListener('click', () => {
    if (msg.classList.contains('out')) {
        msg.classList.remove('out');
    } else {
        msg.classList.add('out');
    }
});


/* boton hamburgesa */

const hamburgesa = document.querySelector('#hamburger');
const social = document.querySelector('#social');

hamburgesa.addEventListener('click', (e) => {
    if (hamburgesa.firstChild.src === 'https://drobotij-leandro-photographs.herokuapp.com/img/close.svg') {
        hamburgesa.firstChild.src = '/img/hamburger_icon.svg';
        social.classList.remove('out');
    } else {
        hamburgesa.firstChild.src = '/img/close.svg';

        social.classList.add('out');
    }
});

/* loading  */

const loading = document.querySelector('#loading');

window.addEventListener('load', () => {
    loading.classList.add('out');
    window.scroll(0, 0);
});