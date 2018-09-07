var nameInp = document.getElementById('name');
var surnameInp = document.getElementById('surname');
var emailInp = document.getElementById('email');
var phoneInp = document.getElementById('phone');
var invisible = document.getElementById('invisible');
var dateInp = document.getElementById('date');
var tableRow = invisible.getElementsByClassName('table-row')[0];
var table = document.getElementsByClassName('table')[0];
var winnerName = document.getElementById('winner');
var i = 0;
var users = [];
var nowEdit = 0;

function addUser(onsubmit) {
    onsubmit.preventDefault();

    users[i] = {
        name: nameInp.value,
        surname: surnameInp.value,
        email: emailInp.value,
        phone: phoneInp.value,
        date: dateInp.value
    };

    if (nowEdit === 0) {
        var newTableRow = tableRow.cloneNode(true);
        newTableRow.getElementsByClassName('name')[0].innerHTML = nameInp.value;
        newTableRow.getElementsByClassName('surname')[0].innerHTML = surnameInp.value;
        newTableRow.getElementsByClassName('email')[0].innerHTML = emailInp.value;
        newTableRow.getElementsByClassName('phone')[0].innerHTML = phoneInp.value;
        newTableRow.getElementsByClassName('date')[0].innerHTML = dateInp.value;
        table.appendChild(newTableRow);
        newTableRow.id = i;
    }
    else {
        var oldTableRow = document.getElementById(i);
        oldTableRow.getElementsByClassName('name')[0].innerHTML = nameInp.value;
        oldTableRow.getElementsByClassName('surname')[0].innerHTML = surnameInp.value;
        oldTableRow.getElementsByClassName('email')[0].innerHTML = emailInp.value;
        oldTableRow.getElementsByClassName('phone')[0].innerHTML = phoneInp.value;
        oldTableRow.getElementsByClassName('date')[0].innerHTML = dateInp.value;
    }

    i = users.length;
    nowEdit = 0;
    nameInp.value = null;
    surnameInp.value = null;
    emailInp.value = null;
    phoneInp.value = null;
    dateInp.value = null;
}

document.getElementsByClassName('winner-button')[0].onclick = function createWinner() {
    var rand = Math.random() * users.length - 0.5;
    rand = Math.round(rand);
    rand = Math.abs(rand);
    winnerName.innerHTML = [users[rand].name + ' ' + users[rand].surname];

};

function edit(el) {
    i = el.id;
    nameInp.value = users[i].name;
    surnameInp.value = users[i].surname;
    emailInp.value = users[i].email;
    phoneInp.value = users[i].phone;
    dateInp.value = users[i].date;
    nowEdit = 1;
}

document.getElementsByClassName('name-form')[0].addEventListener('submit', addUser);