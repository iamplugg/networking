import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const NasaScreen = () => {
  const [apod, setApod] = useState(null);

  useEffect(() => {
    fetchApod();
  }, []);

  const fetchApod = async () => {
    try {
      const response = await axios.get('https://api.nasa.gov/planetary/apod', {
        params: {
          api_key: 'RTmVFy4U4dooZDePhE1FXNdDJx0D6Lpit0dLxNsS',
        },
      });

      setApod(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!apod) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{apod.title}</Text>
      <Image source={{ uri: apod.url }} style={styles.image} />
      <Text style={styles.text}>{apod.explanation}</Text>
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
  image: {
    width: '100%',
    height: 200,
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default NasaScreen;