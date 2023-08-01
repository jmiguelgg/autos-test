import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {SteepOption} from '../components/NavSteep';
import ListOptionSelector from '../components/ListOptionSelector';
import {useDispatch} from 'react-redux';
import {setIdsMfr, setYear} from '../slices/AutoPartSlice';
import {useNavigation} from '@react-navigation/native';
import ScreenLayout from '../components/ScreenLayout';
import {getMfr} from '../api/Vehicles';

const yearStart = 1995;
const yearStop = 2024;

const Years = (): React.ReactNode => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const years = Array.from(
    {length: yearStop - yearStart + 1},
    (_, i) => yearStart + i,
  );

  const onSelectYear = (year: number): void => {
    dispatch(setYear(year));
    navigation.navigate('Make');
  };

  const requestMfr = async (): Promise<void> => {
    const result = await getMfr();
    const idsMfr = result.map(item => item.Mfr_ID);
    dispatch(setIdsMfr(idsMfr));
  };

  useEffect(() => {
    requestMfr();
  }, []);

  return (
    <ScreenLayout navSteep={SteepOption.Years}>
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
    </ScreenLayout>
  );
};

export default Years;
