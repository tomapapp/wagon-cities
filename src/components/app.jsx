import React from 'react';

import City from '../containers/city';
import CityList from '../containers/city_list';

const App = () => {
  return (
    <div className="app">
      <ul className="cities">
        <CityList />
      </ul>
      <City />
    </div>
  );
};

export default App;
