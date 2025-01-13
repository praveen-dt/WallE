import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Card from '../../components/Card';
import { useRouter } from 'expo-router';
import Assets from '@/components/Assets';


export default function WalletScreen() {
  const router = useRouter();
  const handleSend = () => {
    Alert.alert('Send', 'Sending funds...');
  };

  const handleReceive = () => {
    //Alert.alert('Receive', 'Receiving funds...');
    router.push('/AssetsScreen');
  };

  const handleBuy = () => {
    Alert.alert('Buy', 'Buying more crypto...');
  };

  return (
    
    <View style={styles.container}>
      <Card
        amount={1000}            
        currency="USD"          
        onSend={handleSend}
        onReceive={handleReceive}
        onBuy={handleBuy}
      />
      <Assets />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#f0f0f0',
  },
});
