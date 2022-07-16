const cityName = document.querySelector(".city-name");
const dateValue = document.querySelector(".date-value");
const icon = document.querySelector(".icon");
const tempValue = document.querySelector(".temp-value");
const tempMaxValue = document.querySelector(".temp-max-value");
const tempMinValue = document.querySelector(".temp-min-value");
const tempDescription = document.querySelector(".temp-description-value");

const cityNameSecond = document.querySelector(".city-name-second");
const dateValueSecond = document.querySelector(".date-value-second");
const iconSecond = document.querySelector(".icon-second");
const tempValueSecond = document.querySelector(".temp-value-second");
const tempMaxValueSecond = document.querySelector(".temp-max-value-second");
const tempMinValueSecond = document.querySelector(".temp-min-value-second");
const tempDescriptionSecond = document.querySelector(".temp-description-value-second");

const cityNameThird = document.querySelector(".city-name-third");
const dateValueThird = document.querySelector(".date-value-third");
const iconThird = document.querySelector(".icon-third");
const tempValueThird = document.querySelector(".temp-value-third");
const tempMaxValueThird = document.querySelector(".temp-max-value-third");
const tempMinValueThird = document.querySelector(".temp-min-value-third");
const tempDescriptionThird = document.querySelector(".temp-description-value-third");


// document.getElementById("ville").addEventListener("keypress", (e) => {
//     if (e.key === "Enter") {
//         e.preventDefault();
//         document.getElementById("buttonVille").click();
//     }
// })


// function getVille() {

//     const inputVal = document.getElementById("ville").value

//     const apiKey = "96fcee721123fae8dc78175dbfe89863";
//     // const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

//     fetch(url)
//         .then(response => response.json())
//         .then(myWeather => generateHtml(myWeather))

//     const generateHtml = data => {
//         const iconUrl = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.weather[0]["icon"]}.svg`

//         cityName.innerHTML = data.name;
//         icon.innerHTML = `<img src="${iconUrl}">`;
//         tempValue.innerHTML = data.main.temp + " °C";
//         tempMaxValue.innerHTML = data.main.temp_max + " °C";
//         tempMinValue.innerHTML = data.main.temp_min + " °C";
//         tempDescription.innerHTML = data.weather[0]["description"];
//         console.log(data)

//     }

// }


document.getElementById("ville").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        document.getElementById("buttonVille").click();
    }
})

document.getElementById("buttonVille").onclick = getVille2;

function getVille2() {

    const inputVal = document.getElementById("ville").value;

    const apiKey = "96fcee721123fae8dc78175dbfe89863";
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${inputVal}&appid=${apiKey}&units=metric&lang=fr`;

    fetch(url)
        .then(response => response.json())
        .then(myWeather => generateHtml(myWeather))

    const generateHtml = data => {
        const iconUrl = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.list[0]["weather"][0]["icon"]}.svg`
        const iconUrlSecond = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.list[1]["weather"][0]["icon"]}.svg`
        const iconUrlThird = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.list[2]["weather"][0]["icon"]}.svg`

        cityName.innerHTML = data.city.name;
        dateValue.innerHTML = data.list[0]["dt_txt"];
        icon.innerHTML = `<img src="${iconUrl}">`;
        tempValue.innerHTML = data.list[0]["main"]["temp"] + " °C";
        tempMaxValue.innerHTML = data.list[0]["main"]["temp_max"] + " °C";
        tempMinValue.innerHTML = data.list[0]["main"]["temp_min"] + " °C";
        tempDescription.innerHTML = data.list[0]["weather"][0]["description"];

        cityNameSecond.innerHTML = data.city.name;
        dateValueSecond.innerHTML = data.list[1]["dt_txt"];
        iconSecond.innerHTML = `<img src="${iconUrlSecond}">`;
        tempValueSecond.innerHTML = data.list[1]["main"]["temp"] + " °C";
        tempMaxValueSecond.innerHTML = data.list[1]["main"]["temp_max"] + " °C";
        tempMinValueSecond.innerHTML = data.list[1]["main"]["temp_min"] + " °C";
        tempDescriptionSecond.innerHTML = data.list[1]["weather"][0]["description"];

        cityNameThird.innerHTML = data.city.name;
        dateValueThird.innerHTML = data.list[2]["dt_txt"];
        iconThird.innerHTML = `<img src="${iconUrlThird}">`;
        tempValueThird.innerHTML = data.list[2]["main"]["temp"] + " °C";
        tempMaxValueThird.innerHTML = data.list[2]["main"]["temp_max"] + " °C";
        tempMinValueThird.innerHTML = data.list[2]["main"]["temp_min"] + " °C";
        tempDescriptionThird.innerHTML = data.list[2]["weather"][0]["description"];
    }
}
