const photoContainer = document.getElementById("photo-container"); 
const photo = document.getElementById("photoLviv");

const btnAdd = document.getElementById('btnAdd'); 
const btnDelete = document.getElementById('btnDelete');
const btnIncrease = document.getElementById('btnIncrease');
const btnReduce = document.getElementById('btnReduce');

const initialWidth = photo.clientWidth;
const maxWidth = initialWidth * 3; 
const minWidth = initialWidth / 3; 

// Function to update image width
const updateImageWidth = (factor) => {
    const images = photoContainer.querySelectorAll('img'); 
    const lastImage = images[images.length - 1]; 
    if (lastImage) {
        const newWidth = lastImage.clientWidth * factor; 
        if ((factor > 1 && newWidth <= maxWidth) || (factor < 1 && newWidth >= minWidth)) {
            lastImage.style.width = newWidth + 'px'; 
        }
    }
};

btnAdd.addEventListener("click", () => {
    photoContainer.appendChild(photo.cloneNode(true));
});

btnDelete.addEventListener("click", () => {
    const lastImage = photoContainer.lastElementChild;
    if (lastImage) lastImage.remove();
});

btnIncrease.addEventListener("click", () => updateImageWidth(1.2));
btnReduce.addEventListener("click", () => updateImageWidth(0.75));

// Option number
const n = 66;
const elementIndex = (n % 10) + 1;

// Select elements
const firstElement = document.getElementById(elementIndex.toString());
const secondElement = document.querySelector(`li[id="${elementIndex + 1}"]`); 

// Change colors when clicked
let clicks = [true, true];

const handleClick = (element, index) => {
    const textElement = element.querySelector('span');
    if (clicks[index]) {
        element.style.backgroundColor = '#001f3f'; 
        textElement.style.color = '#f8f9fa'; 
    } else {
        element.style.backgroundColor = 'yellow'; 
        textElement.style.color = '#6A1B9A'; 
    }
    clicks[index] = !clicks[index];
};

firstElement.addEventListener('click', () => handleClick(firstElement, 0));
secondElement.addEventListener('click', () => handleClick(secondElement, 1));