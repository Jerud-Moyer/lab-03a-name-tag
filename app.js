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
    console.log('it worked!');
});

