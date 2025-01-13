import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function GainersScreen() {
  return (
    <View style={styles.tabContainer}>
      <Text>Gainers Content</Text>
    </View>
  );
}

function LosersScreen() {
  return (
    <View style={styles.tabContainer}>
      <Text>Losers Content</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

//need different approach, this is not good 
const HomeCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Total Assets Value</Text>
        <Text style={styles.cardValue}>$1,234,567 USDT</Text>  // Example static value
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: { backgroundColor: 'white' },
          tabBarIndicatorStyle: { backgroundColor: 'blue' },
        }}>
        <Tab.Screen name="Gainers" component={GainersScreen} />
        <Tab.Screen name="Losers" component={LosersScreen} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 4,
  },
  cardValue: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  tabContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default HomeCard;
