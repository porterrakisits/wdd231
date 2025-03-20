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












// display member cards 

const url = 'data/members.json'

const cards = document.querySelector('#members_cards');


async function getBusinessData(url) {
    const response = await fetch(url);
    const data = await response.json();
    displayBusinessess(data.members);
}


function displaySpotlights(members) {

    const filteredMembers = members.filter(member => member.membership_level === '3' || member.membership_level === '2');

    const randomSpotlights = getRandomMembers(filteredMembers, 2, 3);

    randomSpotlights.forEach(member => {
        const memberCard = document.createElement('section');
        memberCard.classList.add('member_card');
        memberCard.innerHTML = `
            <h2>${member.name}</h2>
            <img src="${member.image_file}" alt="${member.name} logo">
            <p>Phone: ${member.phone_number}</p>
            <p>Address: ${member.address}</p>
            <p><a href="${member.website_url}" target="_blank">Visit Website</a></p>
            <p>Membership Level: ${member.membership_level}</p>
            <p>Member Since: ${member.member_since}</p>
        `;
        membersCards.appendChild(memberCard);
    });
}



function getRandomMembers(members, min, max) {
    const numberOfMembers = Math.floor(Math.random() * (max - min + 1)) + min;
    const randomMembers = [];
    while (randomMembers.length < numberOfMembers) {
        const randomIndex = Math.floor(Math.random() * members.length);
        if (!randomMembers.includes(members[randomIndex])) {
            randomMembers.push(members[randomIndex]);
        }
    }
    return randomMembers;
}


getBusinessData()












        // weather        
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');



const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=37.10&lon=-113.58&units=imperial&appid=172b7656bc684338c07b0c9f48954761';  


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
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);
    captionDesc.textContent = data.current.weather[0].description;
    ;
  }


  function displayForecast(data) {
    forecastContainer.innerHTML = '';
    const forecastDays = data.daily.slice(0,3);
    forecastDays.forEach(day => {
        const forecastDiv = document.createElement('div');
        forecastDiv.classList.add('forecast_day');
        const date = new Date(day.dt * 1000).toLocaleDateString();
        forecastDiv.innerHTML = `
            <h3>${date}</h3>
            <p>High: ${day.temp.max}&deg;F</p>
            <p>Low: ${day.temp.min}&deg;F</p>
        `;
        forecastContainer.appendChild(forecastDiv)
    });
  }





