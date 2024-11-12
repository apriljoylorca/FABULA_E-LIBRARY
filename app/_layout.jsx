import { Text, View } from 'react-native'
import React from 'react'
import { Stack, SplashScreen } from 'expo-router'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font'
import { useEffect } from 'react'
import home from './(tabs)/home';
import favorites from './(tabs)/favorites';
import library from './(tabs)/library';

SplashScreen.preventAutoHideAsync();

const MainLayout = () => {

  const [fontsLoaded, error] = useFonts({
    "CinzelDecorative-Bold": require("../assets/fonts/CinzelDecorative-Bold.ttf"),
    "CinzelDecorative-Regular": require("../assets/fonts/CinzelDecorative-Regular.ttf"),
    "CinzelDecorative-Black": require("../assets/fonts/CinzelDecorative-Black.ttf"),
    "PlayfairDisplay-Regular": require("../assets/fonts/PlayfairDisplay-Regular.ttf"),
    "PlayfairDisplay-Black": require("../assets/fonts/PlayfairDisplay-Black.ttf"),
    "PlayfairDisplay-BlackItalic": require("../assets/fonts/PlayfairDisplay-BlackItalic.ttf"),
    "PlayfairDisplay-Bold": require("../assets/fonts/PlayfairDisplay-Bold.ttf"),
    "PlayfairDisplay-BoldItalic": require("../assets/fonts/PlayfairDisplay-BoldItalic.ttf"),
    "PlayfairDisplay-ExtraBold": require("../assets/fonts/PlayfairDisplay-ExtraBold.ttf"),
    "PlayfairDisplay-ExtraBoldItalic": require("../assets/fonts/PlayfairDisplay-ExtraBoldItalic.ttf"),
    "PlayfairDisplay-Italic": require("../assets/fonts/PlayfairDisplay-Italic.ttf"),
    "PlayfairDisplay-Medium": require("../assets/fonts/PlayfairDisplay-Medium.ttf"),
    "PlayfairDisplay-MediumItalic": require("../assets/fonts/PlayfairDisplay-MediumItalic.ttf"),
    "PlayfairDisplay-SemiBold": require("../assets/fonts/PlayfairDisplay-SemiBold.ttf"),
    "PlayfairDisplay-SemiBoldItalic": require("../assets/fonts/PlayfairDisplay-SemiBoldItalic.ttf"),
    "Griffy-Regular": require("../assets/fonts/Griffy-Regular.ttf"),
    "HennyPenny-Regular": require("../assets/fonts/HennyPenny-Regular.ttf"),
  });
  
  useEffect(() => {
    if (error) throw error;
  
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);
  
  if (!fontsLoaded && !error) {
    return null;
  }
  

  return (
    <Stack>
      <Stack.Screen
      name="index"
      options={{
        headerShown:false
      }}/>

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="home" component={home} />
        </Stack.Navigator>
      </NavigationContainer>

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Favorites">
          <Stack.Screen name="favorites" component={favorites} />
        </Stack.Navigator>
      </NavigationContainer>

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Library">
        <Stack.Screen name="library" component={library} />
        </Stack.Navigator>
      </NavigationContainer>

    </Stack>
  )
}

export default MainLayout