import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';
import { LocationProvider } from './src/hooks/location'

import {
  useFonts,
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from '@expo-google-fonts/archivo';
import {
  Inter_400Regular,
  Inter_500Medium,
} from '@expo-google-fonts/inter';

import Home from './src/screens/Home';
import { StatusBar } from 'expo-status-bar';


export default function App() {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
    Inter_400Regular,
    Inter_500Medium,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
      style="light" translucent backgroundColor="transparent" />
      <LocationProvider>
        <Home />
      </LocationProvider>
    </ThemeProvider>  
  )
}
