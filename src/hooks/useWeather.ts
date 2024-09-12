import { useState } from 'react';
import { fetchWeatherFromOpenWeatherMap } from '../services/openMapService';
import { fetchWeatherFromWeatherAPI } from '../services/weatherAPIService';

export const useWeather = () => {
  const [weatherData, setWeatherData] = useState<{ temperature: number; description: string } | null>(null);
  const [service, setService] = useState<'OpenWeatherMap' | 'WeatherAPI'>('OpenWeatherMap');
  const [loading, setLoading] = useState(false);

  const toggleService = () => {
    setService(prev => (prev === 'OpenWeatherMap' ? 'WeatherAPI' : 'OpenWeatherMap'));
  };

  const fetchWeatherData = async (location: string) => {
    setLoading(true);
    try {
      if (service === 'OpenWeatherMap') {
        const data = await fetchWeatherFromOpenWeatherMap(location);
        setWeatherData(data);
      } else {
        const data = await fetchWeatherFromWeatherAPI(location);
        setWeatherData(data);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { weatherData, service, toggleService, fetchWeatherData, loading };
};
