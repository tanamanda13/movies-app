import React from 'react'
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

const SearchBar = () => {
  return (
      <View style={styles.searchBarContainer}>
        <Text style={styles.searchBarTitle}>Search</Text>
        <TextInput style={styles.searchBarTextInput} placeholder="Entrez votre recherche"/>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBarTitle: {
    fontSize: 18,
    marginTop: 50
  },
  searchBarContainer: {
    // flex: 1,
    backgroundColor: '#ffe100',
    padding: 20,
    // width: '100%',
    // position: 'absolute',
    // top: 0
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  searchBarTextInput: {
    borderColor: '#000000',
    backgroundColor: '#ffffff',
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    // width: '100%',
    marginTop: 20
  }
});

export default SearchBar;