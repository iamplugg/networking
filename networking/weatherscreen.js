import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const WeatherScreen = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    try {
      const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          q: 'Khanty-Mansiysk',
          appid: '1837cb4c84c9cd9609c2457d163e316b',
          units: 'metric',
        }
      });

      setWeather(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!weather) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather in {weather.name}</Text>
      <Text style={styles.text}>Temperature: {weather.main.temp}°C</Text>
      <Text style={styles.text}>Humidity: {weather.main.humidity}%</Text>
      <Text style={styles.text}>Description: {weather.weather[0].description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default WeatherScreen;