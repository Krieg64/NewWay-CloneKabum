import React from 'react';
import { CardPromotionsComponent, CardImg } from './CardBanner_styled';
import promotion1 from '../../files/promotion_pc.png';
import promotion2 from '../../files/promotion2.jfif';
import promotion3 from '../../files/promotion3.jfif';

const time = 5000;

function load() {
  return new Promise((images) => {
    setTimeout(() => {
      images(document.querySelectorAll('#slider img'));
    }, 500);
  });
}

let currentImageIndex = 0;
// const images = document.querySelectorAll('#slider img');

async function nextImage() {
  const image = await load();
  const max = image.length;

  image[currentImageIndex].classList.remove('selected');

  currentImageIndex += 1;

  if (currentImageIndex >= max) { currentImageIndex = 0; }

  image[currentImageIndex].classList.add('selected');
}

function start() {
  setInterval(() => {
    nextImage();
  }, time);
}
window.addEventListener('load', start);

// function prevImage() {
//   images[currentImageIndex].classList.remove('act');

//   currentImageIndex--;
//   console.log(currentImageIndex);

//   if (currentImageIndex < min) { currentImageIndex = 4; }

//   images[currentImageIndex].classList.add('act');
// }

const CardPromotions = () => (
  <CardPromotionsComponent>
    <CardImg id="slider">
      <img src={promotion1} alt="promotion1" className="selected" />
      <img src={promotion2} alt="promotion2" />
      <img src={promotion3} alt="promotion3" />
    </CardImg>
  </CardPromotionsComponent>
);

export default CardPromotions;
