import {StyleSheet, TouchableOpacity, Image, Text, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const localResturants = [
  {
    name: 'Alhaj-Akhter',
    image_url: 'https://www.visitswatvalley.com/images/naran-kaghan.jpg',
    categories: ['Cafe', 'Dinner'],
    price: '$$',
    reviews: 1200,
    rating: 4.5,
  },
  {
    name: 'Al-Madina',
    image_url:
      'https://www.pakistantoursguide.pk/wp-content/uploads/2015/08/Lalazar1.jpg',
    categories: ['Zinger', 'Broast'],
    price: '$$',
    reviews: '8k',
    rating: 4.8,
  },
  {
    name: 'Mehran-ice-cream',
    image_url:
      'https://northernareasofpakistan.com/wp-content/uploads/2020/04/sharan-Valley.jpg',
    categories: ['Sweets', 'Shake'],
    price: '$$',
    reviews: '6k',
    rating: 4.9,
  },
];

const ResturantItems = ({resturantData}) => {
  return (
    <TouchableOpacity activeOpacity={1} style={{marginBottom: 4}}>
      {resturantData.map((resturant, index) => (
        <View
          key={index}
          style={{marginTop: 8, padding: 10, backgroundColor: '#fff'}}>
          <ResturantImage image={resturant.image_url} />
          <ResturantInfo name={resturant.name} rating={resturant.rating} />
        </View>
      ))}
    </TouchableOpacity>
  );
};

export default ResturantItems;

const ResturantImage = ({image}) => (
  <View>
    <Image source={{uri: image}} style={{width: '100%', height: 180}} />
    <TouchableOpacity style={{position: 'absolute', right: 20, top: 20}}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </View>
);

const ResturantInfo = ({name, rating}) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 5,
    }}>
    <View>
      <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>
        {name}
      </Text>
      <Text style={{fontSize: 13, color: 'gray'}}>30-45 . min</Text>
    </View>
    <View
      style={{
        backgroundColor: '#eee',
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        // padding: ,
      }}>
      <Text>{rating}</Text>
    </View>
  </View>
);
