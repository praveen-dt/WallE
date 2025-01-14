import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tabs } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar, Platform, View,KeyboardAvoidingView } from "react-native";
import Loading from '../../components/Loading';

const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);  // This will hide the Loading screen after 3 seconds
    }, 1000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true, // Add this line
          tabBarStyle: {
            height: Platform.OS === 'android' ? 65 : 80,
            paddingBottom: Platform.OS === 'android' ? 12 : 30,
            paddingTop: 8,
            backgroundColor: 'white',
            borderTopWidth: 1,
            borderTopColor: '#E5E5E5',
          },
        }}>
      
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
        }}
      />
        <Tabs.Screen
        name="ScanScreen"
        options={{
          title: 'Scan QR',
          tabBarIcon: ({ color }) => <MaterialIcons name="qr-code-scanner" size={24} color={color} />,
        }}
      />
        <Tabs.Screen
        name="WalletScreen"
        options={{
          title: 'Wallet',
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons name="wallet-outline" size={24} color={color} />,
        }}
      />
      </Tabs>
    
    </SafeAreaProvider>
  );
}
