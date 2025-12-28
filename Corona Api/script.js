async function fetchData() {
   const url=  await fetch('https://disease.sh/v3/covid-19/countries')
   response = await url.json();
   console.log(response);
   
}
fetchData();

async function covideCountry(city) {
	const url = `https://disease.sh/v3/covid-19/countries/${country}`;
    
	const response = await fetch(url);
	return response.json();
}
