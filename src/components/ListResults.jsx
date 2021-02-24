import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

import Card from './Card';
// import data from '../helpers/filmDatas.js';

const ListResults = ({movies}) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        // data={data}
        data={movies}
        // renderItem={({item}) => <Card movieTitle={item.title} releaseDate={item.release_date}/> }
        renderItem={({item}) => <Card movieTitle={item.title} releaseDate={item.release_date} urlImage={item.poster_path}/> }
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 10,
    padding: 10
  },
});

export default ListResults