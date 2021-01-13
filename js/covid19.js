//  put this file in the scripts folder (or the js folder if that is what you called it)
let country = document.getElementById('country');
country.addEventListener('blur', selectCountry);
document.getElementById('getStats').addEventListener('click', getStats);
country.addEventListener('blur', selectCountry);
function selectCountry() {
    let row = document.getElementById(this.value);
    row.classList.toggle('selected');
}
function getStats() {
    fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "0d37b81b71mshd2a786938d53961p106afcjsnff17f6392adf",  //  "AIxP56HptHmshgNo3oo3eXKMlJvXp13w59gjsnNT2jFu4oqvqs",
                "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com"
            }
        })
        .then(resp => resp.json())      //  wait for the response and convert it to JSON
        .then(covid => {                //  with the resulting JSON data do something
            console.table(covid);
            
            //  put a break point here to look at the data coming from the COVID API
            
            let table = document.getElementById('countries');

            let innerHtml = '';

            //  need a loop here to create rows for the country data on COVID
for(let country of covid.countries_stat){
    innerHtml+=
    `<tr id='${country.country_name}'>
    <td>${country.country_name}</td>
    <td>${country.cases}</td>
    <td>${country.deaths}</td>
    <td>${country.total_recovered}</td>
    <td>${country.new_deaths}</td>
    <td>${country.new_cases}</td>
    <td>${country.serious_critical}</td>
    <td>${country.active_cases}</td>
    <td>${country.total_cases_per_1m_population}</td>
    <td>${country.deaths_per_1m_population}</td>
    <td>${country.total_tests}</td>
    <td>${country.tests_per_1m_population}</td>
    </tr>
    `
}
            table.innerHTML += innerHtml;

        }).catch(err => {   console.error(err);     });
}