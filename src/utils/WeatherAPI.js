export default async function WeatherAPI(Location){
    try {
        const WeatherData = await fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${encodeURI(Location)}`,
            {
                "method": "GET",
                "headers": {
                    // API Key to be hidden in an dot-env file
                    "x-rapidapi-key": "SECRET API",
                    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
                }
            });
        if(WeatherData.ok)
            return WeatherData.json();
    } catch (error) {
        console.error(error);
    }
}