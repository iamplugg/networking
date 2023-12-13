import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './homescreen';
import WeatherScreen from './weatherscreen';
import NasaScreen from './NasaScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Weather" component={WeatherScreen} />
        <Tab.Screen name="NASA" component={NasaScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;