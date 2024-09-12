import React, { useState } from 'react';
import { View, TextInput, Button, ActivityIndicator, StyleSheet, SafeAreaView } from 'react-native';
import WeatherDisplay from './src/components/WeatherDisplay';
import { useWeather } from './src/hooks/useWeather';
import { validateLocation } from './src/utils/validateLocation';

const App: React.FC = () => {
  const { weatherData, service, toggleService, fetchWeatherData, loading } = useWeather();
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    try {
      validateLocation(location);
      fetchWeatherData(location);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <SafeAreaView>
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Location"
        value={location}
        onChangeText={setLocation}
      />
      <Button title="Get Weather" onPress={handleSearch} />
      <Button title={`Switch to ${service === 'OpenWeatherMap' ? 'WeatherAPI' : 'OpenWeatherMap'}`} onPress={toggleService} />

      {loading ? <ActivityIndicator size="large" color="#0000ff" /> : weatherData && (
        <WeatherDisplay
          temperature={weatherData.temperature}
          description={weatherData.description}
          service={service}
        />
      )}
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderColor: 'gray', borderWidth: 1, padding: 8, marginBottom: 10 },
});

export default App;
