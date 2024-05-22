let css = document.querySelector('h3');
let color01 = document.querySelector('.color01');
let color02 = document.querySelector('.color02');
let body = document.getElementById('gradient');

function setGrdient() {
    body.style.background = 
    'Linear-gradient(to right,' + color01.value + ', ' + color02.value + ')';

    css.textContent = body.style.background + ';';
}

color01.addEventListener('input', setGrdient);

color02.addEventListener('input', setGrdient);