import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import ScreenLayout from '../components/ScreenLayout';
import {SteepOption} from '../components/NavSteep';
import ListOptionSelector from '../components/ListOptionSelector';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {setMake} from '../slices/AutoPartSlice';
import {RootState} from '../Store';
import {getMakeByMfrAndYear} from '../api/Vehicles';
import {MakeI} from '../interfaces/MakeI';

const Make = (): React.ReactNode => {
  const {year, idsMfr} = useSelector((state: RootState) => state.autoParts);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [makeOptons, setMakeOptions] = useState<MakeI[]>();

  const onSelectMake = (make: MakeI): void => {
    dispatch(setMake(make));
    navigation.navigate('Model');
  };

  const getMakesByYear = async (): Promise<void> => {
    if (idsMfr) {
      const result = await getMakeByMfrAndYear(idsMfr, year);
      setMakeOptions(result);
    }
  };

  useEffect(() => {
    getMakesByYear();
  }, []);

  return (
    <ScreenLayout navSteep={SteepOption.Make}>
      <FlatList
        keyExtractor={(_, index) => `year-${index}`}
        data={makeOptons}
        renderItem={({item}) => {
          const handleOnPress = () => onSelectMake(item);
          return (
            <ListOptionSelector onPress={handleOnPress}>
              {item.MakeName}
            </ListOptionSelector>
          );
        }}
      />
    </ScreenLayout>
  );
};

export default Make;
