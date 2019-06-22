import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from '../store';

import ListBugets from '../components/list/ListBugets';
import Menu from '../components/menu/Menu';
import axios from 'axios';
import { HOME_API } from '../utils/variables/variables';


function App() {
  /*const [data, setData] = useState([]);

  useEffect( async () => {
    await axios.get(HOME_API)
      .then(result =>{
        console.log(result);
        setData(result);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);*/


  return (
    <Provider store={store}>
      <Menu />
      <ListBugets />
    </Provider>
  );
}

export default App;
