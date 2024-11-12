const contacts =[
    {
        name : 'Sahar',
        gmail : 'saharsaeed8090@gmail.com'
    },

    {
        name : 'Saeed',
        gmail : 'hamidsaeed8090@gmail.com'
    },

    {
        name : 'Danish',
        gmail : 'danishsaeed8090@gmail.com'
    },

    {
        name : 'Omer',
        gmail : 'Omersaeed8090@gmail.com'
    },
    {
        name : 'Ubaid',
        gmail : 'Ubaidsaeed8090@gmail.com'
    },
    {
        name : 'Hajra',
        gmail : 'Hajra8090@gmail.com'
    },
    {
        name : 'Atika',
        gmail : 'Atika8090@gmail.com'
    },
    {
        name : 'Amina',
        gmail : 'Amina8090@gmail.com'
    },
    {
        name : 'Asia',
        gmail : 'Asia8090@gmail.com'
    },
    
    
];
function renderContacts(contacts) {
    const contactList = document.getElementById('contact-list');
    contactList.innerHTML ='';
    for (const contact of contacts) {
        const contactDiv = document.createElement("div");
        contactDiv.className = 'contact';
        contactDiv.innerHTML = `
            <b>${contact.name}</b>
            <p>${contact.gmail}</p> 
        `;
        contactList.appendChild(contactDiv);
    }
}
renderContacts(contacts);
function filterContact(){
    const filterInput = document.getElementById('filter-input').value.toLowerCase();
    const filterContact = contacts.filter((contact)=> contact.name.toLowerCase().includes(filterInput));
    renderContacts(filterContact);
}
document.getElementById('filterButton').addEventListener('click',filterContact);