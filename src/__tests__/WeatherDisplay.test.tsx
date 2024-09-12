import React from 'react';
import { render } from '@testing-library/react-native';
import WeatherDisplay from '../components/WeatherDisplay'; 

describe('WeatherDisplay Component', () => {
  it('displays the correct weather data for OpenWeatherMap', () => {
    const { getByText } = render(
      <WeatherDisplay
        temperature={25}
        description="Clear sky"
        service="OpenWeatherMap"
      />
    );

    expect(getByText('Temperature: 25°C')).toBeTruthy();
    expect(getByText('Description: Clear sky')).toBeTruthy();
  });

  it('displays the correct weather data for WeatherAPI', () => {
    const { getByText } = render(
      <WeatherDisplay
        temperature={30}
        description="Partly cloudy"
        service="WeatherAPI"
      />
    );

    expect(getByText('Temperature: 30°C')).toBeTruthy();
    expect(getByText('Description: Partly cloudy')).toBeTruthy();
  });
});
