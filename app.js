const myButton = document.getElementById('nameButton')
myButton.addEventListener('click', () => {
    console.log('it worked!');
});

const userName = document.getElementById('nameField');
userName.addEventListener('input', () => {
    console.log("WOW!");
});