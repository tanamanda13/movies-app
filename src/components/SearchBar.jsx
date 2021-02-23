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
  searchBarTitle: {
    fontSize: 18,
    marginTop: 50
  },
  searchBarContainer: {
    backgroundColor: '#ffe100',
    padding: 20,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15
  },
  searchBarTextInput: {
    borderColor: '#000000',
    backgroundColor: '#ffffff',
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    marginTop: 20
  }
});

export default SearchBar;