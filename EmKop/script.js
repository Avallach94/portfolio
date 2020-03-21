let triangleOffer = document.querySelector('.triangle-offer');
let triangleGallery = document.querySelector('.triangle-gallery');
let triangleContact = document.querySelector('.triangle-contact');
let gallery = document.querySelector('.gallery-photo');
let nextPht = document.querySelector('#next-photo');
let prevPht = document.querySelector('#prev-photo');
let photo = document.querySelector('.gallery-photo');
let photoShadow = document.querySelector('.gallery-img-shadow');
let galleryContent = document.querySelector('#gallery .content');
let mobileMenu = document.querySelector('.mobile-menu i');
let header = document.querySelector('header');
let html = document.querySelector('html');
let navBtn = document.querySelectorAll('header a');

let allPhoto = []
let isZoom = false;
let mobMenuOpn = false;
let isMobile = false; 
let isHorizontal = false;
let isTablet = false;


if (window.innerHeight <= '400'){
    isHorizontal = true;
}

if (window.innerWidth <= '500'){
    isMobile = true;
}

if (window.innerWidth <= '1000' && window.innerWidth >= '700') {
    isTablet = true;
}

for (var i = 0; i < gallery.childNodes.length; i++){
    if (gallery.childNodes[i].nodeName == 'IMG'){
        allPhoto.push(gallery.childNodes[i]);
    }
}

function resize(){
    let offerHeight = document.querySelector('#offer').offsetHeight;
    let galleryHeight = document.querySelector('#gallery').offsetHeight;
    let contactHeight = document.querySelector('#contact').offsetHeight;
    if (isMobile == true) {
        triangleOffer.style.top = `${(offerHeight / 3) * 2}px`
        triangleOffer.style.borderWidth = `${offerHeight / 3 + 30}px 0 0 100vw`;
        triangleGallery.style.borderWidth = `0 100vw ${galleryHeight}px 0`;
        triangleContact.style.borderWidth = `${contactHeight + 40}px 100vw 0 0`;
    } else if (isHorizontal == true){
        triangleOffer.style.top = `${(offerHeight / 3) * 2}px`
        triangleOffer.style.borderWidth = `${offerHeight / 3 + 15}px 0 0 86vw`;
        triangleGallery.style.borderWidth = `0 86vw ${galleryHeight}px 0`;
        triangleContact.style.borderWidth = `${contactHeight + 20}px 86vw 0 0`;
    } else {
        triangleOffer.style.borderWidth = `${offerHeight + 25}px 0 0 86vw`;
        triangleGallery.style.borderWidth = `0 86vw ${galleryHeight}px 0`;
        triangleContact.style.borderWidth = `${contactHeight}px 86vw 0 0`;
    }
}

function nextPhoto() {
    currentPhoto = document.querySelector('.chose-photo');
    for (let i = 0; i < allPhoto.length; i++){
        if (allPhoto[i] == currentPhoto){
            currentPhoto.className = 'rest-photo';
            let newIndex = i + 1;
            if (newIndex >= allPhoto.length){
                allPhoto[0].className = 'chose-photo';
            } else {
                allPhoto[newIndex].className = 'chose-photo';
            }
        }
        if (isMobile == false) {
            if (isTablet == true) {
                document.querySelector('.chose-photo').style.width = '75vw';
            } else if (isZoom == true) {
                document.querySelector('.chose-photo').style.width = '70vw';
            } else {
                document.querySelector('.chose-photo').style.width = '50vw';
            }
        } else {
            document.querySelector('.chose-photo').style.width = '90vw';
        }
    }
}

function prevPhoto() {
    let currentPhoto = document.querySelector('.chose-photo');
    for (let i = 0; i < allPhoto.length; i++){
        if (allPhoto[i] == currentPhoto){
            currentPhoto.className = 'rest-photo';
            let newIndex = i - 1;
            if (newIndex < 0){
                allPhoto[allPhoto.length-1].className = 'chose-photo';
            } else {
                allPhoto[newIndex].className = 'chose-photo';
            }
        }
    }
    if (isMobile == false) {
        if (isZoom == true) {
            document.querySelector('.chose-photo').style.width = '70vw';
        } else {
            document.querySelector('.chose-photo').style.width = '50vw';
        }
    } else {
        document.querySelector('.chose-photo').style.width = '90vw';
    }
}

function zoom() {
    if (isMobile == true || isHorizontal == true || isTablet == true) {
        return  
    } else {
        if (isZoom == false) {
            html.style.overflowY = 'hidden';
            header.style.visibility = 'hidden';
            photoShadow.style.backgroundColor = 'rgba(61, 61, 61, 0.80)';
            photoShadow.style.width = '130vw';
            photoShadow.style.height = '150vh';
            photoShadow.style.top = '-25vh';
            photoShadow.style.left = '-30vw';
            nextPht.style.color = '#C3C3C3';
            prevPht.style.color = '#C3C3C3';
            document.querySelector('.chose-photo').style.width = '70vw';
            isZoom = true;
        } else {
            header.style.visibility = 'visible';
            html.style.overflowY = 'scroll';
            photoShadow.style.backgroundColor = '#3D3D3D';
            photoShadow.style.width = '50vw';
            photoShadow.style.height = '77vh';
            photoShadow.style.top = '13.5vh';
            photoShadow.style.left = '16.5vw';
            nextPht.style.color = '#3D3D3D';
            prevPht.style.color = '#3D3D3D';
            document.querySelector('.chose-photo').style.width = '50vw';
            isZoom = false;
        }
    }
}

function openMenu() {
    header.style.visibility = 'visible';
    header.style.zIndex = '3';
    html.style.overflowY = 'hidden';
    mobMenuOpn = true;
}

function closeMenu() {
    if (isMobile == false && isHorizontal == false)  {
    } else {
        header.style.visibility = 'hidden';
        header.style.zIndex = '-3';
        html.style.overflowY = 'scroll';
        mobMenuOpn = false;
    }
}

function reload() {
    location.reload();
 }

resize();
window.addEventListener('resize', resize);
nextPht.addEventListener('click', nextPhoto);
prevPht.addEventListener('click', prevPhoto);
photo.addEventListener('click', zoom);
mobileMenu.addEventListener('click', openMenu);
for (i = 0; i < navBtn.length; i++) {
    navBtn[i].addEventListener('click', closeMenu);
}
window.addEventListener("orientationchange", reload);