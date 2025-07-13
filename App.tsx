import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import all screens
import HomeScreen from './src/screens/HomeScreen';
import FeedDetailsScreen from './src/screens/FeedDetailsScreen';
import FeedModalScreen from './src/screens/FeedModalScreen';
import FeedModalDetailScreen from './src/screens/FeedModalDetailScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ProfileModalScreen from './src/screens/ProfileModalScreen';
import ChangeEmailScreen from './src/screens/ChangeEmailScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import ChangeLanguageScreen from './src/screens/ChangeLanguageScreen';
import ChangeCountryScreen from './src/screens/ChangeCountryScreen';
import ChooseCountryModalScreen from './src/screens/ChooseCountryModalScreen';
import ChooseLanguageScreen from './src/screens/ChooseLanguageScreen';

// Create navigators
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Modal Stack Navigator for Feed Modal
const FeedModalStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FeedModalMain" component={FeedModalScreen} options={{ headerShown: false }} />
      <Stack.Screen name="FeedModalDetail" component={FeedModalDetailScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

// Modal Stack Navigator for Profile Modal
const ProfileModalStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileModalMain" component={ProfileModalScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ChangeEmail" component={ChangeEmailScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

// Modal Stack Navigator for Settings Modal
const SettingsModalStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ChooseCountryModalMain" component={ChooseCountryModalScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ChooseLanguage" component={ChooseLanguageScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

// Home Stack Navigator
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feeds" component={HomeScreen} />
      <Stack.Screen name="FeedDetails" component={FeedDetailsScreen} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="FeedModal" component={FeedModalStack} options={{ headerShown: false }} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

// Profile Stack Navigator
const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="ProfileModal" component={ProfileModalStack} options={{ headerShown: false }} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

// Settings Stack Navigator
const SettingsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="ChangeLanguage" component={ChangeLanguageScreen} />
      <Stack.Screen name="ChangeCountry" component={ChangeCountryScreen} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="ChooseCountryModal" component={SettingsModalStack} options={{ headerShown: false }} />
      </Stack.Group>
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
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
        }}
      />
      <Tab.Screen
        name="SettingsTab"
        component={SettingsStack}
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
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;
