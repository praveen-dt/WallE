import React, { useState } from 'react';
import { 
  SafeAreaView, 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Platform, 
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard
} from 'react-native';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons';
import Hot from '../../components/HotScreen';
import Gainers from '../../components/GainerScreen';
import Loser from '../../components/LoserScreen';
import { ScrollView } from 'react-native-gesture-handler';

const Tab = createMaterialTopTabNavigator();

// Tab screen components
const HotScreen = () => {
  return (   
    <View style={styles.containerr}>
      <Hot />
    </View>
  );
};

const GainersScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View >
        <Gainers/>
      </View>
    </TouchableWithoutFeedback>
  );
};

const LosersScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View >
        <Loser/>
      </View>
    </TouchableWithoutFeedback>
  );
};

const NewScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Newcomers</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

// Tab screen wrapper
const TabScreen = (WrappedComponent: React.ComponentType) => {
  return function TabContent(props: any) {
    return (
      <View style={styles.tabContainer}>
        <WrappedComponent {...props as any} />
      </View>
    );
  };
};

// Main HomeScreen component
export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView style={{ flex: 1 }}>
          {/* Header Section */}
          <View style={styles.headerContainer}>
            <TouchableOpacity>
              <Feather name="user" size={24} color="black" />
            </TouchableOpacity>
            <View style={styles.searchContainer}>
              <View style={styles.searchInputWrapper}>
                <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
                <TextInput
                  style={styles.searchInput}
                  placeholder="🔥 FARTCOIN"
                  placeholderTextColor="#666"
                  value={searchQuery}
                  onChangeText={setSearchQuery}
                  returnKeyType="search"
                  onSubmitEditing={Keyboard.dismiss}
                />
              </View>
            </View>
            <View style={styles.headerIcons}>
              <TouchableOpacity style={styles.iconButton}>
                <Feather name="maximize" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Feather name="headphones" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="chatbubble-outline" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Asset Section */}
          <View style={styles.assetContainer}>
            {/* Top row: Total Asset and Deposit button */}
            <View style={styles.topRow}>
              {/* Left side: Total Asset */}
              <View style={styles.totalAssetContainer}>
                <Text style={styles.totalAssetText}>Total Asset</Text>
                <TouchableOpacity
                  onPress={() => setIsBalanceVisible(!isBalanceVisible)}
                  style={styles.eyeButton}
                >
                  <Ionicons
                    name={isBalanceVisible ? "eye-outline" : "eye-off-outline"}
                    size={20}
                    color="#666"
                  />
                </TouchableOpacity>
              </View>

              {/* Right side: Deposit Button */}
              <TouchableOpacity style={styles.depositButton}>
                <Text style={styles.depositButtonText}>Deposit</Text>
              </TouchableOpacity>
            </View>

            {/* Second row: Balance */}
            <View style={styles.balanceContainer}>
              <Text style={styles.balanceAmount}>
                {isBalanceVisible ? '0' : 'XXXX'}
              </Text>
              <Text style={styles.balanceCurrency}>USDT</Text>
              <Ionicons name="chevron-down" size={20} color="#666" />
            </View>
          </View>

          <Tab.Navigator
            screenOptions={{
              tabBarLabelStyle: { fontSize: 12 },
              tabBarStyle: { 
                backgroundColor: 'white',
                elevation: 0,
                shadowOpacity: 0,
              },
              tabBarIndicatorStyle: { backgroundColor: '#1E90FF' },
              tabBarPressColor: 'transparent',
              tabBarActiveTintColor: '#1E90FF',
              tabBarInactiveTintColor: '#666',
            }}
          >
            <Tab.Screen name="Hot" component={TabScreen(HotScreen)} />
            <Tab.Screen name="Gainers" component={TabScreen(GainersScreen)} />
            <Tab.Screen name="Losers" component={TabScreen(LosersScreen)} />
            <Tab.Screen name="New" component={TabScreen(NewScreen)} />
          </Tab.Navigator>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerr: {
    flex: 1,
    backgroundColor: 'white',
  },
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
  },
  inputContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    zIndex: 1,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#ccc',
    backgroundColor: 'white',
  },
  assetContainer: {
    padding: 16,
    backgroundColor: 'white',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Ensure vertical alignment
  },
  assetSection: {
    marginBottom: 16,
  },
  /* New row style to hold "Total Asset" and the Deposit button side by side */
  row: {
    flexDirection: 'row',
    //alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalAssetContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  totalAssetText: {
    fontSize: 16,
    color: '#666',
    marginRight: 8,
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 8,
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    marginRight: 8,
  },
  balanceCurrency: {
    fontSize: 18,
    color: '#666',
    marginRight: 4,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'white',
    borderBottomColor: '#f0f0f0',
    borderBottomWidth: 1,
  },
  searchContainer: {
    flex: 1,
    marginHorizontal: 12,
  },
  searchInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    paddingHorizontal: 12,
    height: 36,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    paddingVertical: 8,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 16,
  },
  eyeButton: {
    padding: 4,
  },
  depositButton: {
    backgroundColor: '#1E90FF',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 20,
    // Removed marginTop and alignSelf so it aligns in the same row
  },
  depositButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});