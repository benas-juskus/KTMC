class Contacts {
    constructor(firstName, lastName, telephone, email, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.telephone = telephone;
        this.email = email;
        this.address = address;
    }

    submitNewContact(contacts) {
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
        
        contact.firstName = fName.value;
        contact.lastName = surname.value;
        contact.telephone = tel.value;
        contact.email = email.value;
        contact.address = address.value
        contacts.push(contact);
        console.log(contacts);
    }
}