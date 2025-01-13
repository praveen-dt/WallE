// app/_layout.tsx
import React from 'react';
import { Stack } from 'expo-router';
import {GestureHandlerRootView} from 'react-native-gesture-handler';


export default function RootLayout() {
  return (
    <GestureHandlerRootView>
        <Stack screenOptions={{ headerShown: false }}>
        
          
          <Stack.Screen 
            name="(notabs)/AssetsScreen"
            options={{ headerShown: true, headerTitle: "AssetsList"}} 
          />
          
        </Stack>
    </GestureHandlerRootView>
  );
}
