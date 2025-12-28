var Search = document.querySelector('#Search');
var countryName1 = document.querySelector('#countryName');
var case1 = document.querySelector('#case');
var recovered = document.querySelector('#recovered');
var deaths = document.querySelector('#deaths');
var active = document.querySelector('#active');
var population = document.querySelector('#population');
var img = document.querySelector('#img');
var button = document.querySelector('#button');
var TotalCase = document.querySelector('#TotalCase');
var Recovered = document.querySelector('#Recovered');
var TotalDeaths = document.querySelector('#TotalDeaths');
var ActiveWorld = document.querySelector('#ActiveWorld');
var TodayCase = document.querySelector('#TodayCase');
var todayDeaths = document.querySelector('#TodayDeaths');
var TodayRecovered = document.querySelector('#todayRecovered');
var allWolrdCase = 0
var allWolrdRecovered=0
var TotalDeaths1=0
var ActiveWorld1=0
var TodayCase1=0
var TodayRecovered1=0
var todayDeaths1=0
var allResponse;
async function importData() {
    const response = await fetch('https://disease.sh/v3/covid-19/countries');
    allResponse = await response.json();
    allResponse.forEach(e => {
        allWolrdCase+=e.cases
        allWolrdRecovered+=e.recovered
        TotalDeaths1+=e.deaths
        ActiveWorld1+=e.active
        TodayRecovered1+=e.todayRecovered
        TodayCase1+=e.todayCases
        todayDeaths1+=e.todayDeaths

        TotalCase.innerHTML=allWolrdCase
        Recovered.innerHTML=allWolrdRecovered
        TotalDeaths.innerHTML=TotalDeaths1
        ActiveWorld.innerHTML=ActiveWorld1
        TodayRecovered.innerHTML=TodayRecovered1
        TodayCase.innerHTML=TodayCase1
        todayDeaths.innerHTML=todayDeaths1

        console.log(e.todayRecovered);
        
    });

}
async function covidCountry(country) {
    var url = `https://disease.sh/v3/covid-19/countries/${country}`;
    const response = await fetch(url);
    return response.json();
}
button.addEventListener('click', async () => {
    const countryName = Search.value.trim();

    if (countryName === "") {
        alert('Enter Data');
        return;
    }

    try {
        const data = await covidCountry(countryName);
        if (!data || data.message) {
            alert('Country not found');
            return;
        }

        countryName1.innerHTML = data.country || '-';
        case1.innerHTML = data.cases || '0';
        recovered.innerHTML = data.recovered || '0';
        deaths.innerHTML = data.deaths || '0';
        active.innerHTML = data.active || '0';
        population.innerHTML = data.population || '0';
        img.src = data.countryInfo?.flag || '';
    } catch (error) {
        console.error(error);
        alert('Error fetching data');
    }
});

importData();



