import { WEATHER_API_KEY } from '@env';
export const fetchWeatherFromWeatherAPI = async (location: string) => {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${location}&aqi=no`
    );
    const data = await response.json();
  
    if (!response.ok) throw new Error(data.error.message || 'Error fetching weather from WeatherAPI');
    
    return {
      temperature: data.current.temp_c,
      description: data.current.condition.text,
    };
  };
  