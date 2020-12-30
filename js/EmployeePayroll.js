const notes = document.querySelector('#notes');
const notesError = document.querySelector('.notes-error');
notes.addEventListener('input', function(){
    if(notes.value.length < 3){
        notesError.textContent = "It should be minimum 3 character";
    }
    else{
        notesError.textContent = "";
    }
});

window.addEventListener('DOMContentLoaded', (event) => {
    const text = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    text.addEventListener('input', function(){
        if(text.value.length < 3){
            textError.textContent = "It should be atleast 3 characters";
        }
        else{
            textError.textContent = "";
        }
    });

    // Usecase 8
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function(){
        output.textContent = salary.value;
    });

});