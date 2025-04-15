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
















const discoverdataURL = '../data/discovercards.json';
const discovercards = document.querySelector('.discover_cards');




console.log("Fetching from:", discoverdataURL);

async function getDiscoverCard(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Could not fetch: " + response.statusText);
        const data = await response.json();
        console.log("Fetched data:", data);
        generateDiscover(data.items || data);
    } catch (err) {
        console.error("Error loading discover cards:", err);
    }
}






async function getDiscoverCard(url) {
    const response = await fetch(url);
    const data = await response.json();
    generateDiscover(data.items);
}

function generateDiscover(data) {
    // console.log("this is a test")
    const container = document.querySelector('.discover_cards');
    container.innerHTML = '';

    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('discover_card');
        card.innerHTML = 
            `<figure>
                <img src="images/${item.image}" alt="${item.name}" class="card_img" />
                <figcaption>${item.name}</figcaption>
            </figure>
            <address>${item.address}</address>
            <p>${item.description}</p>
            <button class="learn_more">Learn More</button>
            `;
        container.appendChild(card)

    });
}


function displayLastVisit() {
    const LastVisit = localStorage.getItem('lastVisit');
    const currentVisit = new Date();
    const messageElement = document.createElement('p');

    if (!LastVisit) {
        messageElement.textContent = 'Welcome to St. George Chamber of Commerce!';
    } else {
        const diff = Math.floor((currentVisit - new Date(LastVisit)) / (1000 * 3600 * 24));
        if (diff < 1) {
            messageElement.textContent = 'Back so soon! Awesome!';
        } else if (diff === 1) {
            messageElement.textContent = 'Back so soon! Awesome!';
        } else {
            messageElement.textContent = `You last visited ${diff} days ago.`;
        }
    }

    document.body.insertBefore(messageElement, document.querySelector('main'));
    localStorage.setItem('lastVisit', currentVisit);
}




getDiscoverCard(discoverdataURL);
displayLastVisit();










