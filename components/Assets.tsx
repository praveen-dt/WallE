import React, { useState } from 'react';

import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';

interface Asset {
  id: string;
  name: string;
  logo: string;
}

type AssetsProps = {
  onAssetPress?: (asset: Asset) => void;
};

const ASSETS: Asset[] = [
  { id: 'BTC', name: 'Bitcoin', logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=040"},
  { id: 'ETH', name: 'Ethereum', logo : "https://imgs.search.brave.com/T9HWfRb29DxPh4CzKr2TTjL2tc1caflVySS2qIEvi3U/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y29pbnBhcGVyLmNv/bS9jb2lucGFwZXIv/Zl93ZWJwLGNfbGlt/aXQsd18zODQwLHFf/YXV0bzpnb29kL2V0/aGVyZXVtX2V0aF9s/b2dvX2U2OWIxYzIz/NjgucG5n" },
  { id: 'USDT', name: 'Tether', logo : "https://imgs.search.brave.com/6xyKj1q_oWO9jkh7zLavwcoQxS0qtI01bpdbrlbv5Ss/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/cG5nLXZlY3Rvci8y/MDIyMDYwNi9vdXJt/aWQvcG5ndHJlZS10/ZXRoZXItdXNkdC10/b2tlbi1zeW1ib2wt/Y3J5cHRvY3VycmVu/Y3ktbG9nby1wbmct/aW1hZ2VfNDg2NjA1/MS5wbmc" },
  { id: 'KAS', name: 'Kaspa', logo : "https://imgs.search.brave.com/akSdkqIPbglxu_g8T2410nnbL1RgbybxT75gqv1QUJ8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20va2FzcGEu/b3JnL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzA2L0thc3Bh/LUljb24tMjU2LnBu/Zz9yZXNpemU9MjU2/LDI1NiZzc2w9MQ" },
  { id: 'LTC', name: 'Litecoin', logo : "https://cryptologos.cc/logos/litecoin-ltc-logo.png?v=013" },
  { id: 'XRP', name: 'Ripple', logo : "https://cryptologos.cc/logos/ripple-xrp-logo.png?v=013" },
  { id: 'BCH', name: 'Bitcoin Cash', logo : "https://cryptologos.cc/logos/bitcoin-cash-bch-logo.png?v=013" },
  { id: 'BNB', name: 'Binance Coin', logo : "https://cryptologos.cc/logos/binance-coin-bnb-logo.png?v=013" },
  { id: 'ADA', name: 'Cardano', logo : "https://cryptologos.cc/logos/cardano-ada-logo.png?v=013" },
  { id: 'LINK', name: 'Chainlink', logo : "https://cryptologos.cc/logos/chainlink-link-logo.png?v=013" },
  { id: 'XLM', name: 'Stellar', logo : "https://cryptologos.cc/logos/stellar-xlm-logo.png?v=013" },
  { id: 'USDC', name: 'USD Coin', logo : "https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=013" },
  { id: 'WBTC', name: 'Wrapped Bitcoin', logo : "https://cryptologos.cc/logos/wrapped-bitcoin-wbtc-logo.png?v=013" },
  { id: 'BSV', name: 'Bitcoin SV', logo : "https://cryptologos.cc/logos/bitcoin-sv-bsv-logo.png?v=013" },
  { id: 'EOS', name: 'EOS', logo : "https://cryptologos.cc/logos/eos-eos-logo.png?v=013" },
  { id: 'TRX', name: 'TRON', logo : "https://cryptologos.cc/logos/tron-trx-logo.png?v=013" },
  { id: 'XMR', name: 'Monero', logo : "https://cryptologos.cc/logos/monero-xmr-logo.png?v=013" },
  { id: 'XTZ', name: 'Tezos', logo : "https://cryptologos.cc/logos/tezos-xtz-logo.png?v=013" },
  { id: 'NEO', name: 'NEO', logo : "https://cryptologos.cc/logos/neo-neo-logo.png?v=013" },
  { id: 'ATOM', name: 'Cosmos', logo : "https://cryptologos.cc/logos/cosmos-atom-logo.png?v=013" },
  { id: 'DAI', name: 'Dai', logo : "https://cryptologos.cc/logos/dai-dai-logo.png?v=013" },
  { id: 'UNI', name: 'Uniswap', logo : "https://cryptologos.cc/logos/uniswap-uni-logo.png?v=013" },
  { id: 'DOGE', name: 'Dogecoin', logo : "https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=013" },
  { id: 'AAVE', name: 'Aave', logo : "https://cryptologos.cc/logos/aave-aave-logo.png?v=013" },
  { id: 'YFI', name: 'yearn.finance', logo : "https://cryptologos.cc/logos/yearn-finance-yfi-logo.png?v=013" },
  { id: 'SUSHI', name: 'SushiSwap', logo : "https://cryptologos.cc/logos/sushiswap-sushi-logo.png?v=013" },
  { id: 'SNX', name: 'Synthetix', logo : "https://cryptologos.cc/logos/synthetix-network-token-snx-logo.png?v=013" },
];

export default function Assets({ onAssetPress }: AssetsProps) {

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredAssets, setFilteredAssets] = useState(ASSETS);

  const handlePress = (asset: Asset) => {
    if (onAssetPress) {
      onAssetPress(asset);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const formattedQuery = query.toLowerCase();
    const filtered = ASSETS.filter(asset => asset.name.toLowerCase().includes(formattedQuery));
    setFilteredAssets(filtered);
  };

  const renderItem = ({ item }: { item: Asset }) => (
    <TouchableOpacity
      style={styles.assetItem}
      onPress={() => handlePress(item)}
    >
      <View style={styles.assetRow}>
        <Image source={{ uri: item.logo }} style={styles.assetLogo} />
        <Text style={styles.assetID}>{item.id}</Text>
      </View>
      <Text style={styles.assetName}>
      
        {item.name} ({item.id})
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Assets</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search Assets"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={ASSETS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    marginTop: 10,
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  assetItem: {
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    marginVertical: 6,
    padding: 16,
    width: 300,
  },
  searchBar: {
    fontSize: 16,
    height: 40,
    width: '90%',
    borderWidth: 1,
    borderColor: '#ddd',
    paddingLeft: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  assetRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  assetText: {
    fontSize: 16,
    fontWeight: '500',
  },
  assetLogo: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  assetID: {
    fontWeight: 'bold',
    marginRight: 8,
  },
  assetName: {
    fontSize: 14,
    color: '#666',
  },
});
