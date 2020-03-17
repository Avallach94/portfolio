let triangleOffer = document.querySelector('.triangle-offer');
let triangleGallery = document.querySelector('.triangle-gallery');
let triangleContact = document.querySelector('.triangle-contact');
let gallery = document.querySelector('.gallery-photo');
let nextPht = document.querySelector('#next-photo');
let prevPht = document.querySelector('#prev-photo');
let photo = document.querySelector('.gallery-photo');
let photoShadow = document.querySelector('.gallery-img-shadow');
let galleryContent = document.querySelector('#gallery .content');

let allPhoto = []
let isZoom = false;

for (var i = 0; i < gallery.childNodes.length; i++){
    if (gallery.childNodes[i].nodeName == 'IMG'){
        allPhoto.push(gallery.childNodes[i]);
    }
}

function resize(){
    let offerHeight = document.querySelector('#offer').offsetHeight;
    let galleryHeight = document.querySelector('#gallery').offsetHeight;
    let contactHeight = document.querySelector('#contact').offsetHeight;
    triangleOffer.style.borderWidth = `${offerHeight + 25}px 0 0 86vw`;
    triangleGallery.style.borderWidth = `0 86vw ${galleryHeight}px 0`;
    triangleContact.style.borderWidth = `${contactHeight}px 86vw 0 0`;
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
        if (isZoom == true) {
            document.querySelector('.chose-photo').style.width = '70vw';
        } else {
            document.querySelector('.chose-photo').style.width = '50vw';
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
}

function zoom() {
    if (isZoom == false) {
        document.querySelector('html').style.overflowY = 'hidden';
        document.querySelector('body').style.visibility = 'hidden';
        galleryContent.style.visibility = 'visible';
        document.querySelector('body').style.backgroundColor = '#3D3D3D';
        nextPht.style.color = 'white';
        prevPht.style.color = 'white';
        document.querySelector('.chose-photo').style.width = '70vw';
        isZoom = true;
    } else {
        document.querySelector('html').style.overflowY = 'scroll';
        document.querySelector('body').style.visibility = 'visible';
        document.querySelector('body').style.backgroundColor = 'white';
        nextPht.style.color = '#3D3D3D';
        prevPht.style.color = '#3D3D3D';
        document.querySelector('.chose-photo').style.width = '50vw';
        isZoom = false;
    }
    
}

window.addEventListener('resize', resize);
nextPht.addEventListener('click', nextPhoto);
prevPht.addEventListener('click', prevPhoto);
photo.addEventListener('click', zoom);