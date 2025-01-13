import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tabs } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar, Platform } from "react-native";


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 0 }}>
    <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent = {true} />
    <Tabs 
      screenOptions={{ 
        tabBarActiveTintColor: 'black', 
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'white',
        },
        headerStyle: {
          backgroundColor: 'white',
        },
        
      }}
      >
      
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
    </SafeAreaView>
  );
}
