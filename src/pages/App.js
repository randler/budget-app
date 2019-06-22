import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import ListBugets from '../components/list/ListBugets';
import Menu from '../components/menu/Menu';

function App() {
  return (
    <Provider store={store}>
      <Menu />
      <ListBugets />
    </Provider>
  );
}

export default App;
