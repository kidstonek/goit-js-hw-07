const myForm = document.querySelector('.login-form');

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if ((myForm.elements.email.value === '') || (myForm.elements.password.value === '')) {
        alert("All form fields must be filled in");
        return;
    }
    const answer = {
        email: myForm.elements.email.value.trim(),
        password: myForm.elements.password.value.trim(),
    };
    myForm.reset();
    console.log(answer)
})