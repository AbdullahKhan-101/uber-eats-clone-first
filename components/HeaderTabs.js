import {
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';

const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState('Delivery');
  return (
    <View
      style={{
        flexDirection: 'row',
        alignSelf: 'center',
        // padding: 2,
        // backgroundColor: 'green',
      }}>
      <HeaderButton
        text="Delivery"
        btnColor="black"
        textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        btnColor="white"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

export default HeaderTabs;

const styles = StyleSheet.create({});

const HeaderButton = ({text, btnColor, textColor, activeTab, setActiveTab}) => (
  <View>
    <Pressable
      style={{
        backgroundColor: activeTab === text ? 'black' : 'white',
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
        margin: 2,
      }}
      onPress={() => setActiveTab(text)}>
      <Text
        style={{
          color: activeTab === text ? 'white' : 'black',
          fontSize: 15,
          fontWeight: '900',
        }}>
        {' '}
        {text}
      </Text>
    </Pressable>
  </View>
);
