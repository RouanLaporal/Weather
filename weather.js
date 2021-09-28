/*WeekList a terminer, problème à résoudre sur la fonction pour le jour de la semaine getDay retourne uniquement 1*/
var date = new Date();
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
let weekTemp = document.getElementById("weekTemp");
fetch("http://api.weatherapi.com/v1/current.json?key=7a5e39162d0044c8972113559212709&q=Bagnolet&aqi=yes")
.then(response => response.json())
.then(response =>{
    dateDayName.innerHTML = getDayName(date.now, 'long');
    weekDayName.innerHTML = getDayName(date.now, 'short');
    weekTemp.innerHTML = response.current.temp_c + " °C";
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
    for(var i=1;i<3;i++){
        var newLi = document.createElement('li');
        var firstspan = document.createElement('span');
        var secspan = document.createElement('span');
        var day = date.getDate() + 1;
        newLi.className = 'active';
        newLi.id = "active" + i;
        firstspan.className = 'day-name';
        firstspan.innerHTML = getDayName(date.setDate(day), 'short');
        firstspan.id = "weekDayName"+i;
        secspan.className = 'day-temp';
        secspan.innerHTML = response.forecast.forecastday[i].day.maxtemp_c + " °C";
        document.getElementById('weekList').appendChild(newLi);
        document.getElementById('active'+i).appendChild(firstspan);
        document.getElementById('weekDayName' + i).appendChild(secspan);
    }
    
})
function getDayName(localtime,string){
    var options = { weekday: string };
    console.log("function =" + date.getDay(localtime));
    return new Intl.DateTimeFormat('en-US', options).format(date);
}