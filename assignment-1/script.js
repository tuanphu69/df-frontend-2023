// Your JS code goes here

var modal = document.getElementById('modal');
var add_modal = document.getElementById('add-modal');
var vName = document.getElementById('name-err-msg')
var vAge = document.getElementById('age-err-msg')
var vPhone = document.getElementById('phone-err-msg')
var vAddress = document.getElementById('address-err-msg')

function myFunction() {
    var input, filter, table, tr, td, i, txtValue;

    const searchInput = document.getElementById("search-input");
    filter = searchInput.value.toUpperCase();

    table = document.getElementById("tableBody");
    tr = table.getElementsByTagName("tr");


    for (i = 0; i < tr.length; i++) {
        var rowMatch = false;
        td = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {
            txtValue = td[j].textContent || td[j].innerText;
            // If the current column contains the search filter, set rowMatch to true and break out of the inner loop
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              rowMatch = true;
              break;
            }
        }
        if (rowMatch) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
      
    }
}


const data = [
    {name: 'Admin', age: '23', phone: '03999999', address: 'TP.Hồ Chí Minh'}
];
const dataForm = document.getElementById("add-modal");
const tableBody = document.getElementById("tableBody");


document.getElementById('buttonAdd').addEventListener('click', function () {
    unHidden()
});

document.getElementById('cancelModalAdd').addEventListener('click', function () {
    hiddenForm();
    dataForm.reset();
    vName.classList.add('hidden');
    vAge.classList.add('hidden');
    vPhone.classList.add('hidden');
    vAddress.classList.add('hidden')

});

function unHidden() {
    modal.classList.remove('hidden');
    add_modal.classList.remove('hidden');
}

function hiddenForm() {
    modal.classList.add('hidden');
    add_modal.classList.add('hidden');
}

function Validation(name,age,phone,address){
    if(!name){
        vName.classList.remove('hidden');
    }else{
        vName.classList.add('hidden');
    }
    if(!age){
        vAge.classList.remove('hidden');
    }else{
        vAge.classList.add('hidden');
    }
    if(!phone){
        vPhone.classList.remove('hidden');
    }else{
        vPhone.classList.add('hidden');
    }
    if(!address){
        vAddress.classList.remove('hidden');
    }else{
        vAddress.classList.add('hidden');
    }
    return;
}

displayData();

// Function to add a new row
dataForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name-input").value;
    const age = document.getElementById("age-input").value;
    const phone = document.getElementById("phone-input").value;
    const address = document.getElementById("address-input").value;

    Validation(name,age,phone,address)

    if (name && age && phone && address) {
        data.push({ name, age, phone, address });
        hiddenForm();
        dataForm.reset();
        displayData();
    }
});

function displayData() {
    tableBody.innerHTML = "";
    data.forEach((item, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${item.phone}</td>
            <td>${item.address}</td>
            <td>
                <button onclick="deleteRow(${index})" class="main-header-button btn-red">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function deleteRow(index) {
    // const confirmDelete = confirm("Are you sure you want to delete this row?");
    // if (confirmDelete) {
        data.splice(index, 1);
        displayData();
    // }
}

// Function to filter and display data based on search input





