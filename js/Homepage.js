window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {

    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                        "<th>Salary</th><th>Start Date</th><th>Actions</th>";

    let innerHtml = `${headerHtml}`;
    const empPayrollList = createEmployeePayrollJSON();
    for(const empPayrollData of empPayrollList){
        innerHtml = `${innerHtml}
        <tr>
            <td><img class="profile" src="${empPayrollData._profilePic}" alt=""></td>
            <td>${empPayrollData._name}</td>
            <td>${empPayrollData._gender}</td>
            <td>
                <div class="dept-label">${empPayrollData._department[0]}</div>
                <div class="dept-label">${empPayrollData._department[1]}</div>
            </td>
                <div class="dept-label">${empPayrollData._department[0]}</div>
            <td>${empPayrollData._salary}</td>
            <td>${empPayrollData._startDate}</td>
            <td>
                <img name="${empPayrollData._id}" onclick="remove(this)" src="../assets/delete.png" alt="delete">
                <img name="${empPayrollData._id}" onclick="update(this)" src="../assets/edit.png" alt="edit">
            </td>
        </tr>
    `;
    }
    document.querySelectorAll('#table-display').innerHtml = innerHtml;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for(const dept of deptList){
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}

const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name: 'Praveen Sakinala',
            _gender: 'male',
            _department: [
                'Engineering',
                'Finance'
            ],
            _salary: '400000',
            _startDate: '29 Oct 2019',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '../assets/profile2.jpg'
        },
        {
            _name: 'Shiva Shankar',
            _gender: 'male',
            _department: [
                'HR',
                'Sales'
            ],
            _salary: '350000',
            _startDate: '19 Nov 2019',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '../assets/profile4.jpg'
        }
    ];
    return empPayrollListLocal;
}