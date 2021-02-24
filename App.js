import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
// import dotenv from  'dotenv';
import {REACT_APP_API_URL, REACT_APP_API_KEY} from "@env"

import SearchBar from './src/components/SearchBar'
import ListResults from './src/components/ListResults'
import data from './src/helpers/filmDatas'
// import MovieService from './src/services/Movies';

export default function App() {
  const [searchText, setSearchText] = useState('');
  // const [movies, setMovies] = useState(data);
  const [movies, setMovies] = useState({});
  console.log('appi', REACT_APP_API_URL);
  console.log('key', REACT_APP_API_KEY);

  const getSearchMovies = (searchText) => {

    if (!searchText) {
      fetchMovies()
    }

    const searchMovies = movies.filter(movie => 
      movie.title.toLowerCase().includes(searchText.toLowerCase())
    )
    setMovies(searchMovies)
  }

  const fetchMovies = async () => {
    console.log('hello service movie');
    try {
      const response = await axios.get(
        `${REACT_APP_API_URL}discover/movie?api_key=${REACT_APP_API_KEY}`
      )
      setMovies(response.data.results)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <View style={styles.container}>
      <SearchBar searchText={searchText} onSearch={searchText => getSearchMovies(searchText)}/>
      {/* <ListResults movies={movies}/> */}
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
