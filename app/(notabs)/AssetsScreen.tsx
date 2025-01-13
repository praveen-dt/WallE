import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Assets from '../../components/Assets';

export default function AssetsList() {

  return (
    <>
      
      <View style={styles.container}>
        
        <Assets
          onAssetPress={(asset) => {
            console.log('Selected:', asset);
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    marginTop: 60,
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
});
