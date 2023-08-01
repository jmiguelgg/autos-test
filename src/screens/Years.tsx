import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import NavSteep, {SteepOption} from '../components/NavSteep';
import ListOptionSelector from '../components/ListOptionSelector';
import {SafeAreaView} from 'react-native-safe-area-context';

const Years = (): React.ReactNode => {
  const yearStart = 1995;
  const yearStop = 2024;
  const years = Array.from(
    {length: yearStop - yearStart + 1},
    (_, i) => yearStart + i,
  );

  return (
    <SafeAreaView style={styles.container}>
      <NavSteep navSteepSelected={SteepOption.Years} />
      <FlatList
        keyExtractor={(_, index) => `year-${index}`}
        data={years}
        renderItem={({item}) => (
          <ListOptionSelector onPress={() => console.log('[Years]: ', item)}>
            {item}
          </ListOptionSelector>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    top: '-7%',
  },
});

export default Years;
