import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import StackRouter from './src/StackRouter';

AppRegistry.registerComponent(appName, () => StackRouter);
