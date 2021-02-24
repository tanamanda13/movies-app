import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import SearchBar from './src/components/SearchBar'
import ListResults from './src/components/ListResults'
import data from './src/helpers/filmDatas'

export default function App() {
  const [searchText, setSearchText] = useState('');
  const [movies, setMovies] = useState(data);

  const getSearchMovies = (searchText) => {
    const searchMovies = data.filter( movie => movie.title.includes(searchText) )
    // console.log(searchMovies);
    setMovies(searchMovies)
  }

  return (
    <View style={styles.container}>
      <SearchBar searchText={searchText} onSearch={searchText => getSearchMovies(searchText)}/>
      <ListResults movies={movies}/>
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
