import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type WeatherDisplayProps = {
  temperature: number;
  description: string;
  service: 'OpenWeatherMap' | 'WeatherAPI';
};

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ temperature, description, service }) => {
  const styles = service === 'OpenWeatherMap' ? openWeatherMapStyles : weatherAPIStyles;

  return (
    <View style={styles.container}>
      <Text style={styles.temperature}>Temperature: {temperature}°C</Text>
      <Text style={styles.description}>Description: {description}</Text>
    </View>
  );
};

const openWeatherMapStyles = StyleSheet.create({
  container: { backgroundColor: 'lightblue', padding: 20, borderRadius: 10 },
  temperature: { fontSize: 24, color: 'blue' },
  description: { fontSize: 18, color: 'darkblue' },
});

const weatherAPIStyles = StyleSheet.create({
  container: { backgroundColor: 'lightgreen', padding: 20, borderRadius: 10 },
  temperature: { fontSize: 24, color: 'green' },
  description: { fontSize: 18, color: 'darkgreen' },
});

export default WeatherDisplay;
