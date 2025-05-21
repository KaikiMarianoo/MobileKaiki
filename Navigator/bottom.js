import React from 'react';
import Sec1 from "./navigation/home.js";
import Sec2 from "./navigation/login.js";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={{ 
          headerShown: false,
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'white',
          tabBarActiveBackgroundColor: 'black',
          tabBarInactiveBackgroundColor: 'white',
          tabBarInactiveTintColor:'#397688',
          headerStyle:{backgroundColor:'#399989'},
          headerTintColor:'#345578'
        }}>
        <Tab.Screen name="Login" component={Sec2} />

            

        <Tab.Screen name="Home" component={Sec1} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}