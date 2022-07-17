const cityName = document.querySelector(".city-name");
const dateValue = document.querySelector(".date-value");
const icon = document.querySelector(".icon");
const tempValue = document.querySelector(".temp-value");
const tempMaxValue = document.querySelector(".temp-max-value");
const tempMinValue = document.querySelector(".temp-min-value");
const tempDescription = document.querySelector(".temp-description-value");

const dateValueSecond = document.querySelector(".date-value-second");
const iconSecond = document.querySelector(".icon-second");
const tempValueSecond = document.querySelector(".temp-value-second");
const tempMaxValueSecond = document.querySelector(".temp-max-value-second");
const tempMinValueSecond = document.querySelector(".temp-min-value-second");
const tempDescriptionSecond = document.querySelector(".temp-description-value-second");

const dateValueThird = document.querySelector(".date-value-third");
const iconThird = document.querySelector(".icon-third");
const tempValueThird = document.querySelector(".temp-value-third");
const tempMaxValueThird = document.querySelector(".temp-max-value-third");
const tempMinValueThird = document.querySelector(".temp-min-value-third");
const tempDescriptionThird = document.querySelector(".temp-description-value-third");

const reculer = document.querySelector('#reculer');
const present = document.querySelector('#present');
const avancer = document.querySelector('#avancer');

let city = "";
let date = [];
let iconData = "";
let temp = "";
let tempMax = "";
let tempMin = "";
let tempDsc = "";



let iconUrl = "";
let iconUrlSecond = "";
let iconUrlThird = "";


let i = 0;

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



        city = data.city.name;
        date = data.list.map(item => { return item["dt_txt"] });
        iconData = data.list.map(item => { return item["weather"][0]["icon"] })

        temp = data.list.map(item => { return item["main"]["temp"] });
        tempMax = data.list.map(item => { return item["main"]["temp_max"] });
        tempMin = data.list.map(item => { return item["main"]["temp_min"] });
        tempDsc = data.list.map(item => { return item["weather"][0]["description"] });

        showHtml(i);
        console.log(date)
        console.log(temp)
        console.log(tempDsc)
        console.log(iconData)

    }
}

const showHtml = (item) => {
    // FIRST CARD
    cityName.innerHTML = city
    dateValue.innerHTML = date[item];
    iconUrl = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${iconData[item]}.svg`
    icon.innerHTML = `<img src="${iconUrl}">`;
    tempValue.innerHTML = temp[item] + " °C";
    tempMaxValue.innerHTML = tempMax[item] + " °C";
    tempMinValue.innerHTML = tempMin[item] + " °C";
    tempDescription.innerHTML = tempDsc[item] + " °C";

    // SECOND CARD
    dateValueSecond.innerHTML = date[item + 1];
    iconUrlSecond = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${iconData[item + 1]}.svg`
    iconSecond.innerHTML = `<img src="${iconUrlSecond}">`;
    tempValueSecond.innerHTML = temp[item + 1] + " °C";
    tempMaxValueSecond.innerHTML = tempMax[item + 1] + " °C";
    tempMinValueSecond.innerHTML = tempMin[item + 1] + " °C";
    tempDescriptionSecond.innerHTML = tempDsc[item + 1] + " °C";

    // THIRD CARD
    dateValueThird.innerHTML = date[item + 2];
    iconUrlThird = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${iconData[item + 2]}.svg`
    iconThird.innerHTML = `<img src="${iconUrlThird}">`;
    tempValueThird.innerHTML = temp[item + 2] + " °C";
    tempMaxValueThird.innerHTML = tempMax[item + 2] + " °C";
    tempMinValueThird.innerHTML = tempMin[item + 2] + " °C";
    tempDescriptionThird.innerHTML = tempDsc[item + 2] + " °C";
}

reculer.addEventListener('click', e => {
    if (i !== 0) {
        i -= 3;
        showHtml(i);
        console.log("this is the reculer i: " + i)
    }
})
present.addEventListener('click', e => {
    i = 0;
    showHtml(i);
    console.log("this is the present i: " + i)

})
avancer.addEventListener('click', e => {
    i += 3;
    showHtml(i);
    console.log("this is the avancer i: " + i)

})


