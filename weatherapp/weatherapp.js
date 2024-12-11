
const weatherform = document.querySelector(".weatherform")
const cityInput = document.querySelector(".cityInput")
const card = document.querySelector(".card")
const apikey = "8fbee2ede2ce224adfc38f5eba904a61"


weatherform.addEventListener("submit", async (event) => {
    event.preventDefault();
    const city = cityInput.value.trim();

    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        } catch (error) {
            console.error(error);
            displayError(error.message);
        }
    } else {
        displayError("Please enter the City");
    }
});


async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
        if (response.status === 404) {
            throw new Error(`City "${city}" not found. Please check the name and try again.`);
        } else {
            throw new Error("An error occurred while fetching the weather data.");
        }
    }
    return await response.json();
}


function displayWeatherInfo(data){
    const {name: city,
                main:{temp,humidity},
                weather:[{description,id}]} = data

    card.textContent ="";
    card.style.display="flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherDisplay = document.createElement("p");

    cityDisplay.textContent= city;
    tempDisplay.textContent = `${temp.toFixed(1)}°C`
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    weatherDisplay.textContent = getWeatherEmoji(id)

    cityDisplay.classList.add("cityDisplay")
    tempDisplay.classList.add("tempDisplay")
    humidityDisplay.classList.add("humidityDisplay")
    descDisplay.classList.add("descDisplay")
    weatherDisplay.classList.add("weatherEmoji")


    card.appendChild(cityDisplay)
    card.appendChild(tempDisplay)
    card.appendChild(humidityDisplay)
    card.appendChild(descDisplay)
    card.appendChild(weatherDisplay)
    
}
function getWeatherEmoji(weatherId){

    switch(true){
        case(weatherId >=200 && weatherId <300):
            return "⛈️";
        case(weatherId >=300 && weatherId <400):
            return "🌦️";
        case(weatherId >=500 && weatherId <600):
            return "🌧️";
        case(weatherId >=600 && weatherId <700):
            return "❄️";
        case(weatherId >=700 && weatherId <800):
            return "🌁";
        case(weatherId === 800):
            return "☀️";
        case(weatherId >=801 && weatherId <810):
            return "☁️";
        default:
            return "❓";
    }

}

function displayError(message){
    const errorDisplay = document.createElement("p")
    errorDisplay.textContent =message;
    errorDisplay.classList.add("errorDisplay")

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}


cityInput.addEventListener("keydown", async (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        const city = cityInput.value.trim();

        if (city) {
            try {
                const weatherData = await getWeatherData(city);
                displayWeatherInfo(weatherData);
            } catch (error) {
                console.error(error);
                displayError(error.message);
            }
        } else {
            displayError("Please enter the City");
        }
    }
});