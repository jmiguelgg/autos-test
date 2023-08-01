import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';

const Home = (): React.ReactNode => {
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <StatusBar barStyle="light-content" backgroundColor="white" />
      <Text style={{color: '#000000'}}>Years</Text>
    </SafeAreaView>
  );
};

export default Home;
