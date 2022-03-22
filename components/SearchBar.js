import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

import Ionicons from 'react-native-vector-icons/Ionicons.js';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SearchBar = () => {
  return (
    <View style={{marginTop: 8, flexDirection: 'row'}}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: '#eeee',
            borderRadius: 20,
            fontWeight: '700',
            marginTop: 3,
          },
          textInputContainer: {
            backgroundColor: '#eeee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 1,
          },
        }}
        renderLeftButton={() => (
          <View style={{marginLeft: 8}}>
            <Ionicons name="location-sharp" size={24} color="black" />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: 'row',
              marginRight: 8,
              backgroundColor: 'white',
              paddingVertical: 7,
              paddingHorizontal: 10,
              borderRadius: 30,
              alignItems: 'center',
              color: 'black',
            }}>
            <AntDesign
              name="clockcircle"
              size={11}
              style={{marginRight: 6, color: 'black'}}
            />
            <Text style={{color: 'black'}}>Search</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
