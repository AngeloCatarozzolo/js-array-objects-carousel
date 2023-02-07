'use strict';

const slides = [
{
    image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

function setCurrentImage() {
    currentImageContainer.querySelector('img').src = images[currentImageIndex].image;
    currentImageContainer.querySelector('img').alt = images[currentImageIndex].title;
    currentImageContainer.querySelector('.current-image-text h3').innerHTML = images[currentImageIndex].title;
    currentImageContainer.querySelector('.current-image-text p').innerHTML = images[currentImageIndex].text;
}
function changeSlide(direction) {
    thumbs[currentImageIndex].classList.remove('active');
    if( direction === 'next' ) {
        if( currentImageIndex < images.length - 1 ) {
            currentImageIndex++;
        } else {
            currentImageIndex = 0;
        }
    } else if( direction === 'prev' ) {
        if( currentImageIndex > 0 ) {
            currentImageIndex--;
        } else {
            currentImageIndex = images.length - 1;
        }
    }
    thumbs[currentImageIndex].classList.add('active');
    setCurrentImage();
}

let currentImageIndex = 0;
const currentImageContainer = document.querySelector('.current-image');
const thumbsContainer = document.querySelector('.thumbs');
setCurrentImage();
images.forEach((elm, index) => {
    const templateThumb = document.getElementById('thumb').content.cloneNode(true);
    if( index === currentImageIndex ) {
        templateThumb.querySelector('.thumb').classList.add('active');
    }
    templateThumb.querySelector('img').src = elm.image;
    templateThumb.querySelector('img').alt = elm.title;
    thumbsContainer.append(templateThumb);
});

const thumbs = document.querySelectorAll('.thumb');
const btnNextSlide = document.querySelector('.next-slide');
btnNextSlide.addEventListener('click', function() {
    changeSlide('next');
});
const btnPrevSlide = document.querySelector('.prev-slide');
btnPrevSlide.addEventListener('click', function() {
    changeSlide('prev');
});
