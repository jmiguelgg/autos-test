import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import NavSteep, {SteepOption} from '../components/NavSteep';
import ListOptionSelector from '../components/ListOptionSelector';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {setYear} from '../slices/AutoPartSlice';

const yearStart = 1995;
const yearStop = 2024;

const Years = ({navigation}): React.ReactNode => {
  const dispatch = useDispatch();
  const years = Array.from(
    {length: yearStop - yearStart + 1},
    (_, i) => yearStart + i,
  );

  const onSelectYear = (year: number): void => {
    dispatch(setYear(year));
    navigation.navigate('Make');
  };

  return (
    <SafeAreaView style={styles.container}>
      <NavSteep navSteepSelected={SteepOption.Years} />
      <FlatList
        keyExtractor={(_, index) => `year-${index}`}
        data={years}
        renderItem={({item}) => {
          const handleOnPress = () => onSelectYear(item);
          return (
            <ListOptionSelector onPress={handleOnPress}>
              {item}
            </ListOptionSelector>
          );
        }}
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
