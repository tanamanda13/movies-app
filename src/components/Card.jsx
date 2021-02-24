import React from 'react'
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native'

import {REACT_APP_API_URL_IMAGE} from "@env"

const Card = ({movieTitle, releaseDate, urlImage}) => {
  // console.log('photo', urlImage)
  return (
    <TouchableHighlight
    activeOpacity={0.6}
    underlayColor="#DDDDDD"
    onPress={() => alert('Pressed!')}
    >
      <View style={styles.cardContainer}>
        <View style={styles.cardImage}>
          <Image style={styles.moviePicture}
            resizeMode={'contain'}
            source={{uri: `${REACT_APP_API_URL_IMAGE}${urlImage}`}}
          ></Image>
        </View>
        <View style={styles.cardText}>
          <Text style={styles.movieTitle}>{movieTitle}</Text>
          <Text>{releaseDate}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    borderBottomColor: '#e3e3e3',
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginTop: 10
  },
  cardImage: {
    width: 100,
    height: 100,
  },
  moviePicture: {
    width: 100,
    height: 100,
  },
  cardText: {
    // justifyContent: 'center',
    justifyContent: 'space-evenly'
  },
  movieTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});


export default Card
