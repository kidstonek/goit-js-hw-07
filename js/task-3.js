const myInput = document.querySelector('#name-input');
const myOutput = document.querySelector('span#name-output');

myInput.addEventListener('input', () => {
    const name = myInput.value;
    name.split(' ').filter(sp => sp !== '').length === 0 ? myOutput.textContent = "Anonymous" : myOutput.textContent = `${name.trim()}`;
})
