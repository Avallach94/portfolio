let nav1 = document.querySelector('.nav1');
let nav2 = document.querySelector('.nav2');
let nav3 = document.querySelector('.nav3');
let nav4 = document.querySelector('.nav4');
let nav5 = document.querySelector('.nav5');
let nav6 = document.querySelector('.nav6');
let nav7 = document.querySelector('.nav7');
let nav8 = document.querySelector('.nav8');
let list = document.querySelector('ul');
let main = document.querySelector('main');
let contact = document.querySelector('.contact');
let contactTitle = document.querySelector('.contact-title');
let glass = document.querySelector('.glass');
let photo1 = document.querySelector('.photo1');
let photo2 = document.querySelector('.photo2');
let toFill = document.querySelector('.to-fill');
let send = document.querySelector('.btn');

let allNav = [nav1, nav2, nav3, nav4, nav5, nav6, nav7, nav8];

let contactOpen = false;

let titleAftSend = document.createElement('h4');
titleAftSend.innerHTML = 'Dziękuję za kontakt.';
let messAftSend = document.createElement('p');
messAftSend.innerHTML = 'Zostaniesz przekierowany<br>do swojej skrzynki pocztowej';

function changeColor() {
    let position = 15;
    for (let x = 0; x < allNav.length; x++){
        if(allNav[x] == this) {
            this.setAttribute('style', `color: black`);
            position -= x * 5;
        } else {
            allNav[x].setAttribute('style', `color: #00000083`);
        }
    }
    list.setAttribute('style', `top: ${position}vh`);
}

function openContact() {
    contact.setAttribute('style', 'right: 0vw');
    glass.setAttribute('style', 'visibility: hidden');
    contactOpen = true;
}

function closeContact() {
    if (contactOpen == true) {
        contact.setAttribute('style', 'right: -40vw');
        glass.setAttribute('style', 'visibility: visible');
        contactOpen = false;
    } else {
        return
    }
}

function afterSend() {
    toFill.parentNode.replaceChild(titleAftSend, toFill);
    titleAftSend.parentNode.setAttribute('style', 'font-size: 1.3em');
    titleAftSend.parentNode.appendChild(messAftSend);
}

nav5.addEventListener('click', changeColor);
nav6.addEventListener('click', changeColor);
nav7.addEventListener('click', changeColor);
nav8.addEventListener('click', changeColor);
nav1.addEventListener('click', changeColor);
nav2.addEventListener('click', changeColor);
nav3.addEventListener('click', changeColor);
nav4.addEventListener('click', changeColor);
contactTitle.addEventListener('click', openContact);
photo1.addEventListener('click', closeContact);
photo2.addEventListener('click', closeContact);
send.addEventListener('blur', afterSend);