import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import SearchBar from './src/components/SearchBar'
import ListResults from './src/components/ListResults'

export default function App() {
  return (
    <View style={styles.container}>
      <SearchBar/>
      <ListResults/>
      {/* <Text>Coucou !</Text>
      <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
