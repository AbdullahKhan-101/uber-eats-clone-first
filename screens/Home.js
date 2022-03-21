import {StyleSheet, SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import HeaderTabs from '../components/HeaderTabs';
// import SearchBar from '../components/SearchBar';

const Home = () => {
  return (
    <SafeAreaView
      style={{
        height: '100%',
        backgroundColor: '#eee',
        flexDirection: 'column',
      }}>
      <View style={{backgroundColor: 'white', padding: 13}}>
        <HeaderTabs />
        {/* <SearchBar /> */}
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
