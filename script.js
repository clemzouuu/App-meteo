let weather = {
    apiKey: "01321c2ace5205fb9b62f54976f54621",
    fetchWeather : function(city) {
        fetch (
            "https://api.openweathermap.org/data/2.5/weather?q=" + city 
            + "&units=metric&appid=" 
            + this.apiKey)


            .then((response) => response.json())
            .then((data) => this.displayWeather(data))   
    },
    displayWeather : function(data){
        const { name } = data
        const {icon, description} = data.weather[0]
        const { temp, humidity } = data.main 
        const {country} = data.sys
    
        document.querySelector(".city").innerText = "Weather in " + name +", "+ country
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png" 
        document.querySelector('.description').innerText = description
        document.querySelector('.temp').innerText = temp + "°C"
        document.querySelector('.humidity').innerText = "Humidity : " + humidity  + "%"
        document.body.style.backgroundImage = "url('https://source.unsplash.com/2200x1600/?" + name + "')"


    },
    search : function() {
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
}   
document.querySelector("button").addEventListener("click", function() {
    weather.search()
})

document.querySelector(".search-bar").addEventListener("keyup",function(){
    if (event.key == "Enter"){
        weather.search()
    }
})