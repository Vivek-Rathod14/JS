

Temp = document.querySelector('#Temp');
code = document.querySelector('#code');
locationEl = document.querySelector('#location');
deleteData = document.querySelector('#deleteData');
h = document.querySelector('#h');
l = document.querySelector('#l');
let li = document.querySelectorAll('li')
let weatherImg = document.querySelectorAll('#weatherImg')
wind = document.querySelector('#wind');
hum = document.querySelector('#hum');
let response = ``;

(async () => {
    response = await fetchWeather()
    console.log(response);
    showData();
})()

function showData() {

    Temp.innerHTML = response.current.temperature_2m + response.current_units.temperature_2m;
    codeConvert = response.current.weather_code;
    console.log(codeConvert);



    if (codeConvert == 0) {
        code.innerText = "Sunny";
        cloud.style.opacity = 1;
    } else if (codeConvert <= 3) {
        code.innerText = "Cloudy";
    } else {
        code.innerText = "Rainy";
    }
}

city = document.querySelector('input[type="text"]');
city.addEventListener('keydown', async () => {
    if (city.value.length > 2) {

        searchData = await fetchWeatherByCity(city.value);
        // locationEl.innerHTML = searchData.results[0].country;
        console.log(searchData);
        i = 0
        for (const singleLi of li) {
            singleLi.innerHTML = `${searchData.results[i].name}, ${searchData.results[i++].country}`

        }
        li.forEach((singleLi, index) => {
            singleLi.addEventListener('click', async () => {
                const { latitude, longitude, country } = searchData.results[index];

                locationEl.textContent = country;
                fetchData = await fetchWeather(latitude, longitude);
                Temp.innerText = fetchData.current.temperature_2m + fetchData.current_units.temperature_2m;
                codeConvert = fetchData.current.weather_code;
                wind.innerHTML = fetchData.current.wind_speed_10m;
                hum.innerHTML = fetchData.current.relative_humidity_2m;
                if (codeConvert == 0) {
                    code.innerText = "Sunny";

                } else if (codeConvert <= 3) {
                    code.innerText = "Cloudy";
                } else {
                    code.innerText = "Rainy";
                }
                h.innerText = `H:${fetchData.daily.temperature_2m_max[0]}°`;
                l.innerText = `L:${fetchData.daily.temperature_2m_min[0]}°`;



            });
        });


    }

})

deleteData.addEventListener('click', () => {
    city.value = ""
})


const setting = document.querySelector('.setting');
const settingIcon = document.querySelector('.setting i');
const box = document.querySelector('.box');
let isOpen = true;

gsap.set(settingIcon, { rotation: 0 });

setting.addEventListener('click', () => {
    gsap.to(box, { x: isOpen ? 1100 : 1600, duration: 0.8, ease: "power1.out" });

    gsap.to(settingIcon, { rotation: "+=360", duration: 0.5, ease: "power1.out" });

    isOpen = !isOpen;
});

