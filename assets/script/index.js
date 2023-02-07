let lamp = document.getElementById('lampada');
let onLamp = document.getElementById('btnligar');
let offLamp = document.getElementById('btndesligar');
let btnrestore = document.getElementById('btnrestaurar');

let checkLamp = 1;

const turnOnLamp = () => {
    if(checkLamp){
        lamp.src='assets/img/ligada.jpg';
    }
}

const turnOofLamp = () => {
    if(checkLamp){
        lamp.src='assets/img/desligada.jpg';
    }
}

const breakLamp = () => {
    lamp.src='assets/img/quebrada.jpg';
    checkLamp = 0;
}

const restoreLamp = () => {
    lamp.src='assets/img/desligada.jpg';
    checkLamp = 1;
}

btnrestore.addEventListener('click', restoreLamp);

btnligar.addEventListener('click', turnOnLamp);

btndesligar.addEventListener('click', turnOofLamp);

lamp.addEventListener('click', breakLamp);