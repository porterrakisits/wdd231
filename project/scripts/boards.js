// The display of current year and date of last modification in the footer
function displayCurrentYear() {
    const currentYear = new Date().getFullYear(); 
    const yearSpan = document.getElementById('current-year'); 
    yearSpan.textContent = currentYear; 
}

function displayLastModifiedDate() {
    const lastModifiedDate = new Date(document.lastModified); 
    const formattedDate = lastModifiedDate.toLocaleDateString();
    const modifiedParagraph = document.getElementById('lastModified'); 
    modifiedParagraph.textContent = `Last modified on: ${formattedDate}`; 
}

displayCurrentYear();
displayLastModifiedDate();




// small width hambuger style menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});







// display inventory

async function loadInventory() {
    try {
        const response = await fetch('data/inventory.json');
        const data = await response.json();
        displayInventory(data.inventory);
    } catch (error) {
        console.error('Error loading inventory:', error);
    }
}

loadInventory();


function displayInventory(data) {
    const myShop = document.querySelector('#myShop');

    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" loading="lazy">
            <h3>${item.name}</h3>
            <p>${item.price}</p>
            <button class = "view-details" data-id="${item.id}">View Details</button>
        `;
        myShop.appendChild(card)

        card.querySelector('.view-details').addEventListener('click', () => {
            openDialog(item);
        });
    });
}


function openDialog(item) {
    const dialog = document.querySelector('dialog');
    const myDescription = document.querySelector('#myDescription');
    
    myDescription.textContent = item.description; 
    dialog.querySelector('h3').textContent = item.name;
    
    dialog.showModal();
    
    const myclose = document.querySelector('#myclose');
    myclose.addEventListener('click', () => {
        dialog.close();
    });
}




//      localStorage and page redirect for form
const contactForm = document.getElementById('contact_form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); 

        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            message: document.getElementById('message').value.trim(),
            timestamp: new Date().toISOString()
            
        };

        localStorage.setItem('contactFormSubmission', JSON.stringify(formData));

        window.location.href = 'thanks.html';
    });
}



    const data = JSON.parse(localStorage.getItem("contactFormSubmission"));

    if (data) {
        document.getElementById("displayName").textContent = data.name;
        document.getElementById("displayEmail").textContent = data.email;
        document.getElementById("displayPhone").textContent = data.phone;
        document.getElementById("displayMessage").textContent = data.message;
    } 
    else {
        document.getElementById("thanks_main").innerHTML += "<p>No form data found.</p>";
    }








