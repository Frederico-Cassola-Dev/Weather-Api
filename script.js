const cityName = document.querySelector(".city-name");
const icon = document.querySelector(".icon");
const tempValue = document.querySelector(".temp-value");
const tempMaxValue = document.querySelector(".temp-max-value");
const tempMinValue = document.querySelector(".temp-min-value");
const tempDescription = document.querySelector(".temp-description-value");

document.getElementById("buttonVille").onclick = function () {

    const inputVal = document.getElementById("ville").value

    const apiKey = "96fcee721123fae8dc78175dbfe89863";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(myWeather => generateHtml(myWeather))

    const generateHtml = data => {
        const iconUrl = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.weather[0]["icon"]}.svg`

        cityName.innerHTML = data.name;
        icon.innerHTML = `<img src="${iconUrl}">`;
        tempValue.innerHTML = data.main.temp + " °C";
        tempMaxValue.innerHTML = data.main.temp_max + " °C";
        tempMinValue.innerHTML = data.main.temp_min + " °C";
        tempDescription.innerHTML = data.weather[0]["description"];
    }
};

