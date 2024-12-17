const temperatureSpan = document.getElementById('temperature')
fetch('https://api.open-meteo.com/v1/forecast?latitude=10.5276&longitude=76.2144&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m')

// .then(handleResponse)
// .then(handleData)
// .catch(handleError)

// function handleResponse(response){
//     return response.json()
// }

// function handleData(data) {
//     const currentTemperature = data.current.temperature_2m
//     console.log(currentTemperature)    
// }

// function handleError(error) {
//     console.log(error) 
// }

.then(response => {return response.json()})
.then(data => {
    const currentTemperature = (data.current.temperature_2m)
    console.log(currentTemperature)
    temperatureSpan.innerHTML = currentTemperature + "&deg;C"
})
.catch(error => {
    console.log(error)
})





