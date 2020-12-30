class EmployeePayRollData{
    //Properties
    id;
    name;
    profil_pic;
    gender;
    department;
    salary;
    startDate;
    notes;


    //constructor
    constructor(...params) {
        this.id=params[0]
        this.name=params[1];
        this.profil_pic=params[2];
        this.gender=params[3];
        this.department=params[4];
        this.salary=params[5];
        this.startDate=params[6];
        this.notes=params[7];
    } 

    //getter and setter method
    get name(){
    return this.name;
    }
    set name(name){
        this._name=name;
    }
    
    get profilPic(){
        return this.profilPic;
    }
    set profilPic(profilPic){
        this._profilPic=profilPic;
    }
     
    get gender(){
        return this.gender;
    }
    set gender(gender){
        this._gender=gender;
    }

    get department(){
        return this.department;
    }
    set department(department){
        this._department=department;
    }

    get salary(){
        return this.salary;
    }
    set salary(salary){
        this._salary=salary;
    }

    get startDate(){
        return this.startDate;
    }
    set startDate(startDate){
        this._startDate=startDate;
    }

    get notes(){
        return this.notes;
    }
    set notes(notes){
        this._notes=notes;
    }

    toString() {

        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const empDate = !this.startDate ? "undefined" :
            this.startDate;
        return "id=" + this.id + ", name='" + this.name + ", gender='" + this.gender +
            ", profilePic='" + this.profilePic + ", department=" + this.department +
            ", salary=" + this.salary + ", startDate=" + empDate + ", notes=" + this.notes;
    }
}

