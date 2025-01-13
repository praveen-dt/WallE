import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type CardProps = {
  amount: number;
  currency?: string;
  onSend?: () => void;
  onReceive?: () => void;
  onBuy?: () => void;
};

export default function Card({
  amount,
  currency = 'USD',
  onSend,
  onReceive,
  onBuy,
}: CardProps) {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>My Wallet</Text>
      <Text style={styles.balanceLabel}>Balance</Text>
      <Text style={styles.balanceAmount}>
        {currency === 'USD' ? `$${amount}` : `${amount} ${currency}`}
      </Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, styles.sendButton]} onPress={onSend}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.receiveButton]} onPress={onReceive}>
          <Text style={styles.buttonText}>Receive</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buyButton]} onPress={onBuy}>
          <Text style={styles.buttonText}>Buy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: '90%',
    height: 200,
    borderRadius: 16,
    backgroundColor: '#4B0082',
    padding: 16,
    marginVertical: 16,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
    marginBottom: 8,
  },
  balanceLabel: {
    fontSize: 14,
    color: '#ddd',
  },
  balanceAmount: {
    fontSize: 28,
    color: '#fff',
    fontWeight: '700',
    marginBottom: 8,
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    flex: 1,
    marginHorizontal: 4,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendButton: {
    backgroundColor: '#ff4500',
  },
  receiveButton: {
    backgroundColor: '#228b22',
  },
  buyButton: {
    backgroundColor: '#1e90ff',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
