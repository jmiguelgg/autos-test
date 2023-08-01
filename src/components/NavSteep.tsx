import React from 'react';
import {FlatList, Text} from 'react-native';

const NavSteep = (): React.ReactNode => {
  return (
    <FlatList
      data={['Years', 'Make', 'Model', 'Data']}
      renderItem={({item}) => <Text>{item}</Text>}
      keyExtractor={(_, index) => `steep-${index}`}
      horizontal
    />
  );
};

export default NavSteep;
