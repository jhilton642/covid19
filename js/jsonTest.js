//  put this file in the scripts folder (or the js folder if that is what you called it)

let stats = {
    "countries_stat": [
        {
        "country_name": "USA",
        "cases": "17,047,129",
        "deaths": "309,650",
        "region": "",
        "total_recovered": "9,947,047",
        "new_deaths": "1,553",
        "new_cases": "103,225",
        "serious_critical": "27,874",
        "active_cases": "6,790,432",
        "total_cases_per_1m_population": "51,364",
        "deaths_per_1m_population": "933",
        "total_tests": "224,184,627",
        "tests_per_1m_population": "675,486"
    }, {
        "country_name": "Vanuatu",
        "cases": "1",
        "deaths": "0",
        "region": "",
        "total_recovered": "1",
        "new_deaths": "0",
        "new_cases": "0",
        "serious_critical": "0",
        "active_cases": "0",
        "total_cases_per_1m_population": "3",
        "deaths_per_1m_population": "0",
        "total_tests": "0",
        "tests_per_1m_population": "0"
    }
],
    "statistic_taken_at": "2020-12-15 20:28:01",
    "world_total": {
        "total_cases": "73,614,731",
        "new_cases": "411,249",
        "total_deaths": "1,637,358",
        "new_deaths": "9,363",
        "total_recovered": "51,665,729",
        "active_cases": "20,311,644",
        "serious_critical": "106,428",
        "total_cases_per_1m_population": "9,444",
        "deaths_per_1m_population": "210.1",
        "statistic_taken_at": "2020-12-15 20:30:01"
    }
}

let people = [
    {firstName: 'Gulnar', lastName: 'Thawar'},
    {firstName: 'Joshua', lastName: 'Hilton'},
    {firstName: 'Daniel', lastName: 'Perez'},
    {firstName: 'Derek',  lastName: 'Bacy'},
    {firstName: 'Gary', lastName: 'James'},
];

//   create a for loop to print the first name of each person
//for(let i =0;i<5;i++){
    //console.log(people[i].firstName)
//}
//   print the total cases of COVID in the world along with the total number of deaths


    //console.log("there are " + stats.world_total.total_cases + " cases in the world and " + stats.world_total.total_deaths + " deaths")

//   create a for loop to print the names of the countries in the world, number of cases and deaths for each country
for(let country of stats.countries_stat){
    console.log(country.country_name + " has " + country.cases + " total cases and " + country.deaths + " total deaths")
}

for (let m of stats.countries_stat){
    console.log(`<tr><td>${m.country_name}</td><td>${m.cases}</tr><tr>${m.deaths}</td></tr>`)
}