import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

import SplashScreen from './screens/SplashScreen';
import InicioScreen from './screens/InicioScreen';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  const [splashDone, setSplashDone] = useState(false);

  if (!splashDone) {
    return <SplashScreen onFinish={() => setSplashDone(true)} />;
  }

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              const icons = {
                Início: focused ? 'home' : 'home-outline',
                Esportes: focused ? 'trophy' : 'trophy-outline',
                Sobre: focused ? 'information-circle' : 'information-circle-outline',
              };
              return <Ionicons name={icons[route.name]} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#f5c518',
            tabBarInactiveTintColor: '#3a5a7a',
            tabBarStyle: {
              backgroundColor: '#050a14',
              borderTopColor: '#1a2a40',
              borderTopWidth: 1,
              paddingBottom: 4,
              height: 58,
            },
            tabBarLabelStyle: { fontSize: 12, fontWeight: '600' },
            headerStyle: { backgroundColor: '#050a14', shadowColor: 'transparent', elevation: 0 },
            headerTintColor: '#ffffff',
            headerTitleStyle: { fontWeight: 'bold', fontSize: 18, letterSpacing: 1 },
          })}
        >
          <Tab.Screen
            name="Início"
            component={InicioScreen}
            options={{ title: '🏅  Olimpíadas' }}
          />
          <Tab.Screen
            name="Esportes"
            component={HomeScreen}
            options={{ title: '🏅  Esportes Olímpicos' }}
          />
          <Tab.Screen
            name="Sobre"
            component={AboutScreen}
            options={{ title: 'Sobre o App' }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
