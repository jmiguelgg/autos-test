import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import ScreenLayout from '../components/ScreenLayout';
import {SteepOption} from '../components/NavSteep';
import ListOptionSelector from '../components/ListOptionSelector';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {setModel} from '../slices/AutoPartSlice';
import {RootState} from '../Store';
import {getModelByMakeAndYear} from '../api/Vehicles';
import {ModelI} from '../interfaces/ModelI';
import Loader from '../components/Loader';

const Model = (): React.ReactNode => {
  const {year, make} = useSelector((state: RootState) => state.autoParts);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [makeOptons, setMakeOptions] = useState<ModelI[]>();

  const onSelectMake = (model: ModelI): void => {
    dispatch(setModel(model));
    navigation.navigate('Data');
  };

  const getModelByMakerYear = async (): Promise<void> => {
    const result = await getModelByMakeAndYear(make, year);
    setMakeOptions(result);
  };

  useEffect(() => {
    getModelByMakerYear();
  }, []);

  return (
    <ScreenLayout navSteep={SteepOption.Model}>
      <FlatList
        keyExtractor={(_, index) => `year-${index}`}
        data={makeOptons}
        ListEmptyComponent={<Loader />}
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

export default Model;
