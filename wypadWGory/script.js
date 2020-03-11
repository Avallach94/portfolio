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

let allNav = [nav1, nav2, nav3, nav4, nav5, nav6, nav7, nav8];

let background = [
'http://foto.miemiec.eu/wp-content/uploads/2018/10/IMG_3548.jpg',
'https://zieloniwpodrozy.pl/wp-content/uploads/2017/08/Panorama-z-Gęsiej-Szyi.-Tutaj-po-prostu-trzeba-być.jpg',
'https://www.zakopane.pl/assets/zakopane25/media/thumbnails/main_slider/assets/zakopane25/media/files/ee252021-b72a-49f3-803b-273b87d8fc34/20160722-ab-dsc07384-copy.jpg',
'https://www.zakopane.pl/assets/zakopane25/media/thumbnails/main_slider/assets/zakopane25/media/files/7440898d-8f5b-4f97-83b9-2b41ba61a75a/dolina-pieciu-stawow-wielki-staw-1.JPG',
'https://portaltatrzanski.pl/upload/article/615e6419664cff083972a072834e7026.jpeg',
'https://strefasingla.pl/uploads/events/c604/c604c1a835f2b1def8e4a93c3c51c8d89c9f090e.jpg',
'https://szymonkaczmarczyk.com/wp-content/uploads/2019/07/ze-szytu-szpiglasowego-wierchu.jpg',
'https://1.bp.blogspot.com/-6bXYTnOp7_c/UsgNtK_0vvI/AAAAAAAANVM/mw-aKR-sSPk/s1600/IMG_7413.jpg'
];

let contactOpen = false;

function changeColor() {
    let position = 15;
    for (let x = 0; x < allNav.length; x++){
        if(allNav[x] == this) {
            this.setAttribute('style', `color: black`);
            main.setAttribute('style', `background-image: url(${background[x]})`)
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
        break
    }
}

nav5.addEventListener('mouseenter', changeColor);
nav6.addEventListener('mouseenter', changeColor);
nav7.addEventListener('mouseenter', changeColor);
nav8.addEventListener('mouseenter', changeColor);
nav1.addEventListener('mouseenter', changeColor);
nav2.addEventListener('mouseenter', changeColor);
nav3.addEventListener('mouseenter', changeColor);
nav4.addEventListener('mouseenter', changeColor);
contactTitle.addEventListener('click', openContact);
main.addEventListener('click', closeContact);