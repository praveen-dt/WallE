import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      
          <Tab.Navigator
            screenOptions={{
              tabBarLabelStyle: { fontSize: 12 },
              tabBarStyle: { backgroundColor: 'powderblue' },
              tabBarIndicatorStyle: { backgroundColor: 'navy' },
            }}
          >
            <Tab.Screen name="Hot" component={HotScreen} />
            <Tab.Screen name="Gainers" component={GainersScreen} />
            <Tab.Screen name="Losers" component={LosersScreen} />
            <Tab.Screen name="New" component={NewScreen} />
          </Tab.Navigator>
        
      
    </SafeAreaView>
  );
}

function HotScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hot Topics</Text>
    </View>
  );
}

function GainersScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Gainers</Text>
    </View>
  );
}

function LosersScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Losers</Text>
    </View>
  );
}

function NewScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Newcomers</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10
  }
});
