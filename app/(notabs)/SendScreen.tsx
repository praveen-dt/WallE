import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function SendScreen() {
  const { qrData } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Send Screen</Text>
      <Text style={styles.info}>Scanned data:</Text>
      <Text style={styles.qrData}>{qrData}</Text>
      {/*needs logic here*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginVertical: 8,
  },
  qrData: {
    fontSize: 14,
    fontWeight: '600',
    color: 'blue',
  },
});
