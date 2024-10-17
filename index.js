let clickButton = document.getElementById('button');
let squareDiv = document.getElementById('container');
let refreshButton = document.getElementById('reload');
let body = document.body;

//If Button is clicked once
const clickEventOne = () => {
    squareDiv.classList.add("animation");
};

//If button is clicked twice 
const clickEventTwo = () => {
    squareDiv.classList.remove("animation");
};

//If mouse is hover then the container moved to left
const mouseHandleEvent = () => {
    squareDiv.classList.add('animation1');
};

//If the mouse pointer leaves the container the move to right
const mouseHandleEvent1 = () => {
    if (squareDiv.classList.contains('animation1')) {
        squareDiv.classList.add('animation3');
    }
};

//If the the left-side container is clicked then return to its original position
const mouseHandleEvent2 = () => {
    squareDiv.classList.remove('animation1');
    squareDiv.classList.remove('animation3');
};

//If the button is reload 
refreshButton.addEventListener('click', () => {
    body.classList.add('fade-out');
    setTimeout(() => {
        location.reload(); 
    }, 500);
});

clickButton.addEventListener('click', clickEventOne);
clickButton.addEventListener('dblclick', clickEventTwo);
squareDiv.addEventListener('mouseover', mouseHandleEvent);
squareDiv.addEventListener('mouseout', mouseHandleEvent1);
squareDiv.addEventListener('mousedown', mouseHandleEvent2);

