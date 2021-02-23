import React from 'react'
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native'

const Card = ({movieTitle, releaseDate}) => {
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
            source={{uri: 'https://img-4.linternaute.com/hjM5dgLFPajbUWUmTVDwLHOqt3c=/1240x/19547719906f480d80a7c0a77d93f6be/ccmcms-linternaute/127232.jpg'}}
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
