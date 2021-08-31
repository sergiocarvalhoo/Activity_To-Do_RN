import React from 'react';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';

import { useFonts,Inter_500Medium,Inter_400Regular,Inter_700Bold  } from '@expo-google-fonts/inter';

import { Home } from './src/pages/Home'

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_400Regular,
    Inter_700Bold
  });
  
  if(!fontsLoaded){
    return <AppLoading/>
  }
  return (
    <>
      <StatusBar 
        barStyle="light-content" 
        translucent 
        backgroundColor="transparent" 
      />
      <Home />
    </>
  );
}