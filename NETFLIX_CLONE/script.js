// Email Validation
const email_Field = document.getElementById('email-field');
const submit_Btn = document.getElementById('submit');
const error_Msg = document.getElementById('error-msg')


submit_Btn.addEventListener('click', ()=>{
    if(email_Field.value===''){
        error_Msg.innerHTML = 'Email is required.';
        email_Field.style.borderColor = 'red';
    }
    else if(!email_Field.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        error_Msg.innerHTML = 'Please enter a valid email address.';
        email_Field.style.borderColor = 'red';
    }
    else{
        email_Field.style.borderColor = 'green';
    }
})
// End Email Validation

// Accordion 
const accordionBox = document.querySelectorAll('.box');

accordionBox.forEach(box => {
    box.addEventListener("click", ()=>{
        box.classList.toggle('active');
    })
});
// End Accordion
