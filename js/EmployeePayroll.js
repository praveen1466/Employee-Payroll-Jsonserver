class EmployeePayRollData{
    //Properties
    id;
    name;
    profilePic;
    gender;
    department;
    salary;
    startDate;
    note;


    //constructor
    constructor(...params) {
        this.id=params[0]
        this.name=params[1];
        this.profilePic=params[2];
        this.gender=params[3];
        this.department=params[4];
        this.salary=params[5];
        this.startDate=params[6];
        this.note=params[7];
    } 

    //getter and setter method
    get id(){
        return this._id;
    }
    set id(id){
        this._id=id;
    }

    get name(){
    return this._name;
    }
    set name(name){
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$')
        if(nameRegex.test(name))
            this._name = name;
        else throw 'Name is Incorrect'
        this._name=name;
    }
    
    get profilePic(){
        return this._profilePic;
    }
    set profilePic(profilePic){
        this._profilePic=profilePic;
    }
     
    get gender(){
        return this._gender;
    }
    set gender(gender){
        this._gender=gender;
    }

    get department(){
        return this._department;
    }
    set department(department){
        this._department=department;
    }

    get salary(){
        return this._salary;
    }
    set salary(salary){
        this._salary=salary;
    }

    get note(){
        return this._note;
    }
    set note(note){
        this._note=note;
    }

    get startDate(){
        return this._startDate;
    }
    set startDate(startDate){
        this._startDate=startDate;
    }
    
    toString() {

        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const empDate = !this.startDate ? "undefined" :
            this.startDate.toLocaleDateString("en-US",options);
        return "id=" + this.id + ", name='" + this.name + ", gender='" + this.gender +
            ", profilePic='" + this.profilePic + ", department=" + this.department +
            ", salary=" + this.salary + ", startDate=" + empDate + ", notes=" + this.note;
    }
}



let isUpdate = false;
let employeePayrollObj = {};
window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector("#name")
    name.addEventListener('input', function() {
        if (name.value.length == 0) {
            setTextValue('.text-error', "");
            return
        }
        try {
            (new EmployeePayRollData()).name = name.value;
            setTextValue('.text-error', "");
        } catch (e) { setTextValue('.text-error', e); }
    });

    const date = document.querySelector('#date');
    date.addEventListener('input', function(){
        let startDate = getInputValueById('#day')+" "+getInputValueById('#month')+" "+getInputValueById('#year');
        try{
            (new EmployeePayRollData()).startDate = new Date(Date.parse(startDate));
            setTextValue('.date-error', "");
        }
        catch(e){
            setTextValue('.date-error', e);
        }
    });

    //UC8: Adding event listener on salary range is added
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function() {
        output.textContent = salary.value
    });

    checkForUpdate();
})


//UC14: saving the object to the local storage on submit
const save = (event) => {
    event.preventDefault();
    event.stopPropagation();
    try {
        setEmployeePayrollObject();
        createAndUpdateStorage();
        resetForm();
        window.location.replace(site_properties.Homepage);
    } catch (e) {
        return;
    }
}

const setEmployeePayrollObject = () => {
    employeePayrollObj._name = getInputValueById('#name');
    employeePayrollObj._profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollObj._profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollObj._profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollObj._salary = getInputValueById('#salary');
    employeePayrollObj._note = getInputValueById('#note');
    let date = getInputValueById('#day')+" "+getInputValueById('#month')+" "+getInputValueById('#year');
    employeePayrollObj._startDate = date;
}

const createEmployeePayroll = () => {
    let employeePayrollData = new EmployeePayRollData();
    try {
        employeePayrollData.name = getInputValueById('#name');
    } catch (e) {
        setTextValue('.text-error', e);
        throw e;
    }

    employeePayrollData.id = getSelectedValues('[name =id]')
    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop()
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop()
    employeePayrollData.department = getSelectedValues('[name=department]')
    employeePayrollData.salary = getInputValueById('#salary')
    employeePayrollData.note = getInputValueById('#note')
    employeePayrollData.date = getInputValueById('#day') + " " + getInputValueById('#month') + " " + getInputValueById('#year')

    alert(employeePayrollData.toString())
    return employeePayrollData
}

function createAndUpdateStorage(employeePayrollData){
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));

    if(employeePayrollList){
        let empPayrollData = employeePayrollList.find(empData => empData._id == employeePayrollObj._id );
        if(!empPayrollData){
            employeePayrollList.push(createEmployeePayrollData());
        }
        else{
            const index = employeePayrollList.map(empData => empData._id).indexOf(empPayrollData._id);
            employeePayrollList.splice(index, 1, createEmployeePayrollData(empPayrollData._id));
        }
    }
    else{
        employeePayrollList = [employeePayrollData]
    }

    alert(employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList));
}


const createEmployeePayrollData = () => {
    let employeePayrollData = new EmployeePayRollData();
    if(!id) employeePayrollData.id = createNewEmployeeId();
    else employeePayrollData.id = id;
    setEmployeePayrollData(employeePayrollData);
    return employeePayrollData;
}

const setEmployeePayrollData = (employeePayrollData) => {
    try{
        employeePayrollData.name = employeePayrollObj._name;
    }
    catch(e){
        setTextValue('.text-error', e);
    }

    employeePayrollData.profilePic = employeePayrollObj._profilePic
    employeePayrollData.gender = employeePayrollObj._gender
    employeePayrollData.department = employeePayrollObj._department
    employeePayrollData.salary = employeePayrollObj._salary
    employeePayrollData.note = employeePayrollObj._note
    try{
        employeePayrollData.startDate = new Date(Date.parse(employeePayrollObj._startDate));
    }
    catch(e){
        setTextValue('.text-error', e);
        throw e;
    }
    alert(employeePayrollData.toString());
}

const createNewEmployeeId = () => {
    let empID = localStorage.getItem("EmployeeID");
    empID = !empID ? 1 : (parseInt(empID)+1).toString();
    localStorage.setItem("EmployeeID", empID);
    return empID
;}

const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let setItems = [];
    allItems.forEach(item => {
        if (item.checked)
            setItems.push(item.value);
    });
    return setItems;
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

const getInputElementValue = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

//UC15: Resetting the form fields on reset
const resetForm = () => {
    setValue('#name', '');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setValue('#salary', ' ');
    setValue('#notes', ' ');
    setValue('#day', '1');
    setValue('#month', 'Jan');
    setValue('#year', '2020');
}

const unsetSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => { item.checked = false; });
}

const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}

const checkForUpdate = () => {
    const employeePayrollJson = localStorage.getItem('ediEmp');
    isUpdate = employeePayrollJson ? true : false;
    if(!isUpdate) return;
    employeePayrollObj = JSON.parse(employeePayrollJson);
    setForm();
}

const setForm = () => {
    setValue('#name', employeePayrollObj._name);
    setSelectedValues('[name=profile]', employeePayrollObj._profilePic);
    setSelectedValues('[name=profile]', employeePayrollObj._profilePic);
    setSelectedValues('[name=department]', employeePayrollObj._department);
    setValue('#salary', employeePayrollObj._salary);
    setTextValue('.salary-output', employeePayrollObj._salary);
    setValue('#note', employeePayrollObj._note);
    let date = stringifyDate(employeePayrollObj._startDate).split(" ");
    setValue('#day', date[0]);
    setValue('#day', date[1]);
    setValue('#year', date[2]);
}

const setSelectedValues = () => {
    let allItems =  document.querySelectorAll(propertyValue);
    allItems.forEach(item => {
        if(Array.isArray(value)){
            if(value.includes(item.value)){
                item.checked = true;
            }
        }
        else if(item.value == value)
            item.checked = true;
    });
}

const setSelectedIndex = (id, index) => {
     const element  = document.querySelector(id);
     element.setSelectedIndex = index;
}