const myButton = document.getElementById('nameButton');
myButton.addEventListener('click', () => {
    const userNameInput = document.getElementById('nameField');
    const nameDisplay = document.getElementById('name');
   const value = userNameInput.value;
   nameDisplay.textContent = value;
    
    //get input
    //get inputs value
    //get div
    // set text content div to input value
});

const greenButton = document.getElementById('buttGreen');
greenButton.addEventListener('click',() => {
const colorFieldA = document.getElementById('colorsBottom');
const colorFieldB = document.getElementById('colorsTop');
colorFieldA.style.background = 'green';
colorFieldB.style.background = 'green';

});

const blueButton = document.getElementById('buttBlue');
blueButton.addEventListener('click',() => {
    const colorFieldA = document.getElementById('colorsBottom');
    const colorFieldB = document.getElementById('colorsTop');
    colorFieldA.style.background = 'blue';
    colorFieldB.style.background = 'blue';
});

const pinkButton = document.getElementById('buttPink');
pinkButton.addEventListener('click',() => {
    const colorFieldA = document.getElementById('colorsTop');
    const colorFieldB = document.getElementById('colorsBottom');
    colorFieldA.style.background = 'pink';
    colorFieldB.style.background = 'pink';
});

const redButton = document.getElementById('buttRed');
redButton.addEventListener("click", () => {
    const colorFieldA = document.getElementById('colorsTop');
    const colorFieldB = document.getElementById('colorsBottom');
    colorFieldA.style.background = 'red';
    colorFieldB.style.background = 'red';
});

