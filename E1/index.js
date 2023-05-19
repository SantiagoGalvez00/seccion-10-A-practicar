const imagenes = [
    '/images/cohete.jpg',
    '/images/luna.jpg',
    '/images/tierra.jpg',
    '/images/astronauta.jpg',
];

let currentImageIndex = 0;

const btnAnterior = document.getElementById('anterior');
const btnSiguiente = document.getElementById('siguiente');
const imagen = document.getElementById('imagen');

btnAnterior.addEventListener('click', () => {
    if(currentImageIndex == 0) {
        currentImageIndex = 3;
    } else {
        currentImageIndex -= 1;
    }

    nuevaImagen();
});

btnSiguiente.addEventListener('click', () => {
    if(currentImageIndex == 3) {
        currentImageIndex = 0;
    } else {
        currentImageIndex += 1;
    }

    nuevaImagen();
});

function nuevaImagen() { 
    console.log(currentImageIndex);
    imagen.src = window.location.origin + imagenes[currentImageIndex];
}

const btnSwitch = document.getElementById('switch');
const slider = document.getElementById('slider');
const galeria = document.getElementById('galeria');

btnSwitch.addEventListener('click', () => {
    if(slider.style.display != 'none') {
        slider.style.display = 'none';
        galeria.style.display = 'flex';
        btnSwitch.innerText = 'Ver vista deslizador de imágenes';
    } else {
        slider.style.display = 'flex';
        galeria.style.display = 'none';
        btnSwitch.innerText = 'Ver vista galería de imágenes';
    }
});