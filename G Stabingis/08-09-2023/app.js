let table = document.getElementById('table');
let contacts = [
    {
        firstName: 'Benas',
        lastName: 'Juskus',
        telephone: 861456789,
        email: 'email@email.com',
        address: 'Gatves gatve 15, Klaipeda'
    },
    {
        firstName: 'Pierce',
        lastName: 'Morgan',
        telephone: 864578965,
        email: 'p.morgan@email.com',
        address: 'Streets street 15, New York, NY'
    },
    {
        firstName: 'Joe',
        lastName: 'Rogan',
        telephone: 864712548,
        email: 'j.rogan@email.com',
        address: 'Avenue road, Austin, TX'
    },
    {
        firstName: 'Marilyn',
        lastName: 'Monroe',
        telephone: 864445788,
        email: 'mmonroe@email.com',
        address: 'Holywood rd. 458, Los Angeles, CA'
    }
];



function generateContactList () {
table.innerHTML = '';

    for (let contact of contacts) {
        let newRow = document.createElement('tr'),
            fields = [
                'firstName',
                'lastName',
                'telephone',
                'email',
                'address'
            ];
    
        for (let field of fields) {
            let cell = document.createElement('td');
            cell.textContent = contact[field];
            newRow.appendChild(cell);
        }
    
        table.appendChild(newRow);

    };
};

function submitNewContact() {
    let contact = {
        firstName: '',
        lastName: '',
        telephone: null,
        email: '',
        address: ''
    };

    let fName = document.getElementById('name'),
    surname = document.getElementById('surname'),
    tel = document.getElementById('tel'),
    email = document.getElementById('email'),
    address = document.getElementById('address');

    if (fName.value && surname.value && tel.value && email.value && address.value) {
        contact.firstName = fName.value;
        contact.lastName = surname.value;
        contact.telephone = tel.value;
        contact.email = email.value;
        contact.address = address.value
        contacts.push(contact);

        generateContactList();

        let inputFields = [fName, surname, tel, email, address];
        for (let field of inputFields) {
            field.value = '';
        }

        return
    }

    console.log('please eneter valid values');
    
    
}

let submissionBtn = document.getElementById('submission');

submissionBtn.addEventListener('click', () => submitNewContact());

generateContactList();
