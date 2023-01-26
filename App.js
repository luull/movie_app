import * as React from 'react';
import { Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome,faUser } from '@fortawesome/free-solid-svg-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/pages/Home.js';
import Profile from './src/pages/Profile.js';
import Detail from './src/pages/Detail.js';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function HomeTab() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown:false,
      tabBarIcon: ({ focused, color }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused
            ? faHome
            : faHome;
        } else if (route.name === 'Profile') {
          iconName = focused ? faUser : faUser;
        }
        return <FontAwesomeIcon icon={iconName} color={color}/>;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator  screenOptions={{
          cardStyle: {
            backgroundColor: 'red',
            color:'white'
          },
          animationEnabled: false,
          headerShown: false,
        }} >
      <Stack.Screen name="Home" component={HomeTab} />
      {/* <Stack.Screen name="Profile" component={withTab} /> */}
      <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
  </NavigationContainer>
  );
}