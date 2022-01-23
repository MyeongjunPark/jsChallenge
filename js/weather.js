const API_KEY = "453c490d839f7861d5b8e1ec4562fedc"

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        const iconData = data.weather[0].icon;
        const icon = document.querySelector("#weathericon img").src=`http://openweathermap.org/img/wn/${iconData}@2x.png`;
        city.innerText = data.name;
        const temp = Math.round(data.main.temp)
        weather.innerText = `${data.weather[0].main} / ${temp} °C`;
    });
}

function onGeoError() {
    alert("위치를 찾을 수 없습니다.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)