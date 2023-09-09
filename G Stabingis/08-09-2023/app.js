let fName = 'Benas',
    surName = 'Juškus',
    uzd1 = document.getElementById('uzd1'),
    result = `${fName} ${surName}`; //naudojamas literal string sujungti kintamuosius ir prideti tarpa.

uzd1.innerText = result;

// Uzduotis 2:

let table = document.getElementById('table');
let contacts = [
    {
        name: 'Benas',
        surname: 'Juskus',
        tel: 861456789,
        email: 'email@email.com',
        address: 'Gatves gatve 15, Klaipeda'
    },
    {
        name: 'Pierce',
        surname: 'Morgan',
        tel: 864578965,
        email: 'p.morgan@email.com',
        address: 'Streets street 15, New York, NY'
    },
    {
        name: 'Joe',
        surname: 'Rogan',
        tel: 864712548,
        email: 'j.rogan@email.com',
        address: 'Avenue road, Austin, TX'
    },
    {
        name: 'Marilyn',
        surname: 'Monroe',
        tel: 864445788,
        email: 'mmonroe@email.com',
        address: 'Holywood rd. 458, Los Angeles, CA'
    }
];

// version 1:

// for (let c of contacts) {
//     let newRow = document.createElement('tr'),
//         surnameDataCell = document.createElement('td'),
//         nameDataCell = document.createElement('td'),
//         telDataCell = document.createElement('td'),
//         emailDataCell = document.createElement('td'),
//         addressDataCell = document.createElement('td');

//         nameDataCell.innerText = c.name;
//         surnameDataCell.innerText = c.surname;
//         telDataCell.innerText = c.tel;
//         emailDataCell.innerText = c.email;
//         addressDataCell.innerText = c.address;

//     table.appendChild(newRow);
//     newRow.appendChild(nameDataCell);
//     newRow.appendChild(surnameDataCell);
//     newRow.appendChild(telDataCell);
//     newRow.appendChild(emailDataCell);
//     newRow.appendChild(addressDataCell);
// }

// version 2:
// Per contacts masyva eina loop'as 
for (let contact of contacts) {
    let newRow = document.createElement('tr'),
        fields = [
            'name',
            'surname',
            'tel',
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

//Uzduotis 3:

let item = {
    id: 1,
    name: 'MacBook Air M1',
    type: 'Laptop',
    price: '1199.00',
    stock: 17,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium autem expedita beatae sequi accusamus, laborum voluptatum sed officia soluta fugiat voluptate ut nostrum veniam nesciunt consequatur blanditiis. Cupiditate, numquam nobis.',
    image: 'https://istore.lt/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/p/apple-macbook-air-13-space-gray-m1.jpg'
};

let itemCard    = document.getElementById('item'),
    itemName    = document.getElementById('itemName'),
    itemImage   = document.getElementById('itemImage'),
    description = document.getElementById('description'),
    stock       = document.getElementById('stock'),
    price       = document.getElementById('price');

itemName.textContent = item.name;
itemImage.setAttribute('src', item.image);
description.textContent = item.description;
stock.textContent = `In stock: ${item.stock}`;
price.textContent = `${item.price} EUR`
