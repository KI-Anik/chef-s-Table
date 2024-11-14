/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import OurRecipes from './components/OurRecipes';

const App = () => {
  return (
    <div className='container mx-auto p-4'> 
      <Header></Header>
      <Banner></Banner>
      <OurRecipes></OurRecipes>
    </div>
  );
};

export default App;