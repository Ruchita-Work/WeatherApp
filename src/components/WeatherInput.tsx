import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { validateLocation } from '../utils/validateLocation';

type WeatherInputProps = {
  onSearch: (location: string) => void;
};

const WeatherInput: React.FC<WeatherInputProps> = ({ onSearch }) => {
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    try {
      validateLocation(location);
      onSearch(location);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Location"
        value={location}
        onChangeText={setLocation}
      />
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10 },
  input: { borderColor: 'gray', borderWidth: 1, padding: 8, marginBottom: 10 }
});

export default WeatherInput;
