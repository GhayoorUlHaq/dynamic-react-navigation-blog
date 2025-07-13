import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Import Tab screens
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SettingsScreen from './src/screens/SettingsScreen';

// Create Navigators
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const createRouteScreen = {
  component: ({route}) => {
    const {component: Component, params} = route.params;
    return <Component {...params} />;
  },
  options: ({route}) => ({
    title: route?.params?.title || '',
  }),
};

// Navigator for screens
const ScreenStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Screen"
        component={createRouteScreen.component}
        options={createRouteScreen.options}
      />
    </Stack.Navigator>
  );
};

// Navigator for modal
const ModalStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Modal"
        component={createRouteScreen.component}
        options={createRouteScreen.options}
      />
      <Stack.Screen
        name="ModalScreen"
        component={createRouteScreen.component}
        options={createRouteScreen.options}
      />
    </Stack.Navigator>
  );
};

// Main Tab Navigator
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8E8E93',
      }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
        }}
      />
      <Tab.Screen
        name="SettingsTab"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
        }}
      />
    </Tab.Navigator>
  );
};

// Main App Component
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tabs" component={TabNavigator} />
        <Stack.Screen name="ScreenStack" component={ScreenStackNavigator} />
        <Stack.Group
          screenOptions={{
            presentation: 'modal',
            animation: 'slide_from_bottom',
            headerShown: false,
          }}>
          <Stack.Screen name="ModalStack" component={ModalStackNavigator} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
