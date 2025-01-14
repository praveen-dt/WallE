import { useState, useEffect } from "react";
import { 
  View, 
  StyleSheet, 
  Text, 
  TouchableWithoutFeedback, 
  Keyboard, 
  FlatList,
  ActivityIndicator,
  RefreshControl 
} from "react-native";

interface CryptoItem {
  id: number;
  name: string;
  symbol: string;
  trading_volume_24h: number;
  percent_change_1h: number;
  percent_change_24h: number;
  hotness_score: number;
}

const CryptoCard = ({ item }: { item: CryptoItem }) => (
  <View style={styles.card}>
    <View style={styles.topRow}>
      <View style={styles.nameContainer}>
        <View style={styles.symbolContainer}>
          <Text style={styles.symbolText}>{item.symbol}</Text>
          <Text style={styles.hotScore}>🔥 {(item.hotness_score / 1e9).toFixed(2)}B</Text>
        </View>
        <Text style={styles.nameText}>{item.name}</Text>
      </View>
      <View style={styles.changeContainer}>
        <Text style={[
          styles.changeText,
          { color: item.percent_change_24h >= 0 ? '#28a745' : '#dc3545' }
        ]}>
          {item.percent_change_24h >= 0 ? '+' : ''}{item.percent_change_24h.toFixed(2)}%
        </Text>
        <Text style={styles.periodText}>24h</Text>
      </View>
    </View>

    <View style={styles.bottomRow}>
      <Text style={styles.volumeText}>
        Vol ${(item.trading_volume_24h / 1000000).toFixed(2)}M
      </Text>
      <Text style={[
        styles.hourChangeText,
        { color: item.percent_change_1h >= 0 ? '#28a745' : '#dc3545' }
      ]}>
        1h: {item.percent_change_1h >= 0 ? '+' : ''}{item.percent_change_1h.toFixed(2)}%
      </Text>
    </View>
  </View>
);

export default function Loser() {
  const [data, setData] = useState<CryptoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch('http://192.168.1.84:3000/crypto'); // Replace with your IP
      if (!response.ok) throw new Error('Network response was not ok');
      const result = await response.json();
      setData(result.topLosers); // We're only using topHot data
    } catch (err) {
      setError('Failed to fetch data');
      console.error('Error:', err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchData();
  };

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#1E90FF" />
      </View>
    );
  }

  if (error || !data) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>{error || 'No data available'}</Text>
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <CryptoCard item={item} />}
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      />
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  nameContainer: {
    flex: 1,
  },
  symbolContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  symbolText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  hotScore: {
    fontSize: 14,
    color: '#666',
  },
  nameText: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  changeContainer: {
    alignItems: 'flex-end',
  },
  changeText: {
    fontSize: 16,
    fontWeight: '600',
  },
  periodText: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  volumeText: {
    fontSize: 14,
    color: '#666',
  },
  hourChangeText: {
    fontSize: 14,
    fontWeight: '500',
  },
  errorText: {
    color: '#dc3545',
    fontSize: 16,
  },
});