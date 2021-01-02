window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {

    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                        "<th>Salary</th><th>Start Date</th><th>Actions</th>";

    const innerHtml = `${headerHtml}
        <tr>
            <td><img src="../assets/profile1.jpg" alt=""></td>
            <td>Praveen Sakinala</td>
            <td>Male</td>
            <td>
                <div class="dept-label">HR</div>
            </td>
            <td>3000000</td>
            <td>1 Nov 2020</td>
            <td>
                <img name="1" onclick="remove(this)" src="../assets/delete.png" alt="delete">
                <img name="1" onclick="update(this)" src="../assets/edit.png" alt="edit">
            </td>
        </tr>
    `;
    document.querySelectorAll('#table-display').innerHtml = innerHtml;
}