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







// grid and list button

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#members_cards");



gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); 

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}








// array async stuff

const url = 'data/members.json'

const cards = document.querySelector('#members_cards');


async function getBusinessData(url) {
    const response = await fetch(url);
    const data = await response.json();
    displayBusinessess(data.members);
}

const displayBusinessess = (members) =>{
    members.forEach((member) => {
        const memberCard = document.createElement('section');
        memberCard.classList.add('member_card');
        memberCard.innerHTML = `
            <h2>${member.name}</h2>
            <p>${member.address}</p>
            <p>${member.phone_number}</p>
            <a href="${member.website_url}" >Visit Website</a>
            <img src="${member.image_file}" alt="${member.name} logo">
            <p>Membership Level: ${member.membership_level}</p>
            <p>Member Since: ${member.member_since}</p>
        `;
        cards.appendChild(memberCard);
    });
}

getBusinessData(url)





        // weather        
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');



const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=172b7656bc684338c07b0c9f48954761';  


async function apiFetch() {
    try {
      const response = await fetch(weatherUrl);
      if (response.ok) {
        const data = await response.json();
        console.log(data); 
        displayWeather(data); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();



  function displayWeather(data) {
    currentTemp.innerHTML = `${data.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);
    captionDesc.textContent = `${desc}`;
  }