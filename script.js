const tabs = document.querySelectorAll('[data-tab-target]');
const tabContent = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => { 
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContent.forEach(tabContent => {
            tabContent.classList.remove('active')
            })
        tabs.forEach(tab => {
            tab.classList.remove('active')
            })    
        tab.classList.add('active')        
        target.classList.add('active')
    })
})


let weather = {
    "apiKey" : "81de9cf9dbb574d3fdd8afb6fcc40a73",
    fetchWeather: function(city) {
        fetch(
            "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + appKey
        )
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
    displayWeather: function(data) {
        
    }

}