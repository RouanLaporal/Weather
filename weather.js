/*WeekList a terminer, problème à résoudre sur la fonction pour le jour de la semaine getDay retourne uniquement 1*/
let dateDay = document.getElementById("dateDay");
let dateDayName = document.getElementById("dateDayName");
let temp = document.getElementById("tempC");
let weatherIcon = document.getElementById("weatherIcon");
let humidityValue = document.getElementById("humidityValue");
let windValue = document.getElementById("windValue");
let weatherDesc = document.getElementById("weatherDesc");
let pressionValue = document.getElementById("pressionValue");
let loc = document.getElementById("location");
let weekDayName = document.getElementById("weekDayName");
fetch("http://api.weatherapi.com/v1/current.json?key=7a5e39162d0044c8972113559212709&q=Bagnolet&aqi=yes")
.then(response => response.json())
.then(response =>{
    dateDayName.innerHTML = getDayName(response.location.localtime);
    loc.innerHTML = response.location.name + ", " + response.location.region;
    dateDay.innerHTML = response.location.localtime;
    temp.innerHTML = response.current.temp_c + " °C";
    weatherDesc.innerHTML = response.current.condition.text;
    pressionValue.innerHTML = response.current.pressure_mb + " hPa"
    weatherIcon.className = response.current.condition.icon;
    humidityValue.innerHTML = response.current.humidity + " %";
    windValue.innerHTML = response.current.wind_kph + "Km/h";
})
fetch("http://api.weatherapi.com/v1/forecast.json?key=7a5e39162d0044c8972113559212709&q=Bagnolet&days=7&aqi=no&alerts=yes")
.then(response => response.json())
.then(response =>{
    console.log(response.forecast.forecastday[1].date);
    console.log(getDayName(response.forecast.forecastday[1].date));
    for(let i =0; i<2;i++){
        console.log(getDayName(response.forecast.forecastday[i].date).substring(0,3));
    }
    
})
function getDayName(localtime){
    let date = new Date();
    let name;
    console.log("localtime = "+localtime);
    let dateD = date.getDay(localtime);
    console.log("dateD = " + dateD);
    switch(dateD){
        case 0:
            name = "Sunday";
            break;
        case 1:
            name = "Monday";
            break;
        case 2:
            name = "Tuesday";
            break;
        case 3:
            name = "Wednesday";
            break;
        case 4:
            name = "Thursday";
            break;
        case 5:
            name = "Friday";
            break;
        default:
           name = "Saturday";
            
    }
    return name;
}