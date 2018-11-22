var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
const images = 5;
var newImage;
var url;

for (let i = 1; i <= images; i++) {
    // populate thumbBar
    newImage = document.createElement('img');
    url = 'images/pic' + i + '.jpg';
    newImage.setAttribute('src', url);
    thumbBar.appendChild(newImage);

    // add onclick handler to each thumbnail image
    newImage.onclick = function (e) {
        setImage(e.target.getAttribute('src'));
    }
}

function setImage(url) {
    displayedImage.setAttribute('src', url);
}

/* Wiring up the Darken/Lighten button */
btn.onclick = function () {
    if (btn.getAttribute('class') === 'light') {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
};


