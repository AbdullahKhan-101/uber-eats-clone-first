import {StyleSheet, ScrollView, SafeAreaView, Text, View} from 'react-native';
import React, {useState} from 'react';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import ResturantItems, {localResturants} from '../components/ResturantItems';

const YEALP_API_KEY = '';

const Home = () => {
  const [resturantData, setResturantData] = useState(localResturants);

  return (
    <SafeAreaView style={{height: '100%', backgroundColor: '#eee'}}>
      <View style={{backgroundColor: 'white', padding: 10}}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <ResturantItems resturantData={resturantData} />
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
