// Usecase 8
const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function(){
    output.textContent = salary.value;
});

//Usecase 10
const text = document.querySelector('#name');
const textError = document.querySelector('.text-error');
text.addEventListener('input', function(){
    let nameRegex = RegExp('^[A-Z]{1}{a-z}{2,}$');
    if(nameRegex.test(text.value)){
        textError.textContent = "";
    }
    else{
        textError.textContent = "Name is Incorrect";
    }
});

const notes = document.querySelector('#notes');
const notesError = document.querySelector('.notes-error');
notes.addEventListener('input', function(){
    let notesRegex = RegExp('^{a-z}{2,}$');
    if(notesRegex.test(notes.value)){
        notesError.textContent = "";
    }
    else{
        notesError.textContent = "It should be minimum 3 character";
    }
});


