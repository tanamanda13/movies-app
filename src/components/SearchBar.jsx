import React from 'react'
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SearchBar = ({searchText, onSearch}) => {
  return (
      <View style={styles.searchBarContainer}>
        <Text style={styles.searchBarTitle}>Search</Text>
        <View style={styles.searchBarInput}>
          <MaterialCommunityIcons style={styles.searchIcon} name="filmstrip-box-multiple" size={24} color="black" />
          <TextInput 
            onChangeText={text => onSearch(text)}
            style={styles.searchBarTextInput} 
            placeholder="Entrez votre recherche"
            // icon={()=> <MaterialCommunityIcons name="access-point" size={2} color="red"/>}
          />
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  searchBarTitle: {
    fontSize: 18,
    marginTop: 50,
    fontWeight: 'bold',
  },
  searchBarInput: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
    marginTop: 20,
    width: '100%',
    paddingLeft: 40
  },
  searchIcon: {
    // marginLeft: 50
    position: 'absolute',
    top: 28,
    left: 10,
    zIndex: 10,
  }
});

export default SearchBar;