/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import OurRecipes from './components/OurRecipes';
import Recipies from './components/Recipies';
import SidBar from './components/SidBar';

const App = () => {
  const [recipeQueue, setRecipeQueue] = useState([])

  const addRecipeToQueue = (recipe) => {
    const isExits = recipeQueue.find(previousRecipe => previousRecipe.recipe_id === recipe.recipe_id)
    if (isExits){
      alert('already exits')
    }
    else {
      setRecipeQueue([...recipeQueue, recipe])
    }
  }
  console.log(recipeQueue)
  return (
    <div className='container mx-auto p-4'>
      <Header></Header>
      <Banner></Banner>
      <OurRecipes></OurRecipes>
      <section className='flex flex-col md:flex-row gap-6 mt-5'>
        {/* cards */}
        <Recipies p={addRecipeToQueue}></Recipies>
        <SidBar recipeQueue={recipeQueue}></SidBar>
      </section>
    </div>
  );
};

export default App;