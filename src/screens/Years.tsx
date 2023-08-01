import React from 'react';
import {FlatList, Text} from 'react-native';
import NavSteep from '../components/NavSteep';

const Years = (): React.ReactNode => {
  const yearStart = 1995;
  const yearStop = 2024;
  const years = Array.from(
    {length: yearStop - yearStart + 1},
    (_, i) => yearStart + i,
  );

  return (
    <>
      <NavSteep />
      <FlatList
        keyExtractor={(_, index) => `year-${index}`}
        data={years}
        renderItem={({item}) => <Text>{item}</Text>}
      />
    </>
  );
};

export default Years;
