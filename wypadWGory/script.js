let nav1 = document.querySelector('.nav1');
let nav2 = document.querySelector('.nav2');
let nav3 = document.querySelector('.nav3');
let nav4 = document.querySelector('.nav4');
let nav5 = document.querySelector('.nav5');
let nav6 = document.querySelector('.nav6');
let nav7 = document.querySelector('.nav7');
let nav8 = document.querySelector('.nav8');

let allNav = [nav1, nav2, nav3, nav4, nav5, nav6, nav7, nav8];

function changeColor() {
    for (let x = 0; x <= allNav.length; x++){
        if(allNav[x] == this) {
            this.setAttribute('style', `color: black`);
        } else {
            allNav[x].setAttribute('style', `color: #00000083`);
        }
    }
}

nav5.addEventListener('click', changeColor);
nav6.addEventListener('click', changeColor);
nav7.addEventListener('click', changeColor);
nav8.addEventListener('click', changeColor);
nav1.addEventListener('click', changeColor);
nav2.addEventListener('click', changeColor);
nav3.addEventListener('click', changeColor);
nav4.addEventListener('click', changeColor);