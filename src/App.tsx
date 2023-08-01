import React from 'react';
import StackRouter from './StackRouter';
import {Provider} from 'react-redux';
import {store} from './Store';

const App = (): React.ReactNode => {
  return (
    <Provider store={store}>
      <StackRouter />
    </Provider>
  );
};

export default App;
