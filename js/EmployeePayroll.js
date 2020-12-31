const notes = document.querySelector('#note');
const notesError = document.querySelector('.note-error');
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


const save = () => {
    try{
        let employeePayrollData = createEmployeePayroll();
    }
    catch(e){
        return;
    }
}

const createEmployeePayroll = () => {
    let employeePayrollData = new EmployeePayRollData();
    try{
        employeePayrollData.name = getInputValueById('#name');
    }
    catch(e){
        setTextValue('.text-error',e);
        throw e;
    }

    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData.department = getSelectedValues('[name=department]');
    employeePayrollData.salary = getInputValueById('#salary');
    employeePayrollData.note = getInputValueById('#note');
    let date = getInputValueById('#day')+" "+getInputValueById('#month')+" "+getInputValueById('#year');
    employeePayrollData.date = Date.parse(date);
    alert(employeePayrollData.toString());
    return employeePayrollData;
}

const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let selItems = [];
    allItems.forEach(item => {
        if(item.checked){
            selItems.push(item.value);
        }
    });
    return selItems;
}

const getInputValueById = (id) => {
    let value = document.querySelectorAll(id).value;
    return value;
}

const getInputElementValue = (id) => {
    let value = document.getElementById(id).value;
    return value;
}





