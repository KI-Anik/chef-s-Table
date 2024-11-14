/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import OurRecipes from './components/OurRecipes';
import Recipies from './components/Recipies';
import SidBar from './components/SidBar';

const App = () => {
  return (
    <div className='container mx-auto p-4'> 
      <Header></Header>
      <Banner></Banner>
      <OurRecipes></OurRecipes>
      <section className='flex flex-col md:flex-row gap-6 mt-5'>
        <Recipies></Recipies>
        <SidBar></SidBar>
      </section>
    </div>
  );
};

export default App;