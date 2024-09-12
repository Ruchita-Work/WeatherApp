import { OPEN_WEATHER_MAP_API_KEY } from '@env';
export const fetchWeatherFromOpenWeatherMap = async (location: string) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${OPEN_WEATHER_MAP_API_KEY}&units=metric`
    );
    const data = await response.json();
    
    if (!response.ok) throw new Error(data.message || 'Error fetching weather from OpenWeatherMap');
    
    return {
      temperature: data.main.temp,
      description: data.weather[0].description,
    };
  };
  