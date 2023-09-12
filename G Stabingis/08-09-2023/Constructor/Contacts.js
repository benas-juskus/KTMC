export class Contact {
    constructor(firstName, lastName, telephone, email, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.telephone = telephone;
        this.email = email;
        this.address = address;
    }

    createNewContact(firstName, lastName, telephone, email, address ) {
        let contact = {
            firstName: '',
            lastName: '',
            telephone: null,
            email: '',
            address: ''
        };
        
        contact.firstName = firstName.value;
        contact.lastName = lastName.value;
        contact.telephone = telephone.value;
        contact.email = email.value;
        contact.address = address.value

        return contact;
    }
}

let bJuskus = new Contact(
    'Benas', 'Juskus', '868908014', 'benas.juskus@gmail.com', 'Debreceno g. 12 - 7, Klaipeda'
);
