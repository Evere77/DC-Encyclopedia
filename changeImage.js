function changeImage() {
  let displayImage = document.getElementById('imageSuperman')
  if(displayImage.src.match('./images/FinalSuper.JPG')) {
    displayImage.src = './images/SuperLogoText.JPG'
  } else {
    displayImage.src = './images/FinalSuper.JPG'
  }
};

function changeImage2() {
  let displayImage = document.getElementById('imageBatman')
  if(displayImage.src.match('./images/FinalBat.JPG')) {
    displayImage.src = './images/BatLogoText.JPG'
  } else {
    displayImage.src = './images/FinalBat.JPG'
  }
};

function changeImage3() {
  let displayImage = document.getElementById('imageWonderWoman')
  if(displayImage.src.match('./images/FinalWonder.JPG')) {
    displayImage.src = './images/WonderLogoText.JPG'
  } else {
    displayImage.src = './images/FinalWonder.JPG'
  }
};

function changeImage4() {
  let displayImage = document.getElementById('imageLexLuthor')
  if(displayImage.src.match('./images/FinalLex.JPG')) {
    displayImage.src = './images/LexLogo.png'
  } else {
    displayImage.src = './images/FinalLex.JPG'
  }
};

function changeImage5() {
  let displayImage = document.getElementById('imageJoker')
  if(displayImage.src.match('./images/FinalJoker.JPG')) {
    displayImage.src = './images/JokerLogo.png'
  } else {
    displayImage.src = './images/FinalJoker.JPG'
  }
};

function changeImage6() {
  let displayImage = document.getElementById('imageCheetah')
  if(displayImage.src.match('./images/FinalCheet.JPG')) {
    displayImage.src = './images/CheetahLogo.jpg'
  } else {
    displayImage.src = './images/FinalCheet.JPG'
  }
};