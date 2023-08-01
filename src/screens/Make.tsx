import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';

const Make = (): React.ReactNode => {
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <StatusBar barStyle="light-content" backgroundColor="white" />
      <Text style={{color: '#000000'}}>Years</Text>
    </SafeAreaView>
  );
};

export default Make;
