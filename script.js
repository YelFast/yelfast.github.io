// mobile hamburger menu
const burgerBtn = document.querySelector(".burger-btn");
const navMenu = document.querySelector(".nav-menu");

burgerBtn.addEventListener("click", navSlide)

function navSlide() {
	burgerBtn.classList.toggle("active");
	navMenu.classList.toggle("active");
}

// image showcase
let previewImage = document.querySelectorAll(".preview-image")

if(previewImage) {
    previewImage.forEach(function(image, index) {
        image.onclick = function() {
            let getImageCSS = window.getComputedStyle(image); // gets the css-styling of the image
            let getImageUrl = getImageCSS.getPropertyValue("background-image"); // gets specifically the background-image property
            let splitImageUrl = getImageUrl.split("/img/"); // splits the image url into two pieces, index 0 and 1
            let setNewImageUrl = splitImageUrl[1].replace('")', ''); // sets new image url by replacing a part (index 1, second half) of the already split image url

            let lightbox = document.body;
            let lightboxBackground = document.createElement("div");
            lightbox.appendChild(lightboxBackground);
            lightboxBackground.setAttribute("class", "lightbox-background");
            lightboxBackground.setAttribute("onclick", "closeImage()");

            let lightboxImage = document.createElement("img");
            lightboxBackground.appendChild(lightboxImage);
            lightboxImage.setAttribute("src", "img/" + setNewImageUrl);
            lightboxImage.setAttribute("id", "current-image")
        }
    });
}

function closeImage() {
    document.querySelector(".lightbox-background").remove();
}