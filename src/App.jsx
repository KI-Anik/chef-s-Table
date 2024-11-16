/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import OurRecipes from './components/OurRecipes';
import Recipies from './components/Recipies';
import SidBar from './components/SidBar';

const App = () => {
  const [recipeQueue, setRecipeQueue] = useState([])
  const [preparedRecipe, setPreparedRecipe] = useState([])
  const [totalTime, setTotalTime] = useState(0)
  const [totalcalorieus, setTotalCalories] = useState(0)

  const addRecipeToQueue = (recipe) => {
    const isExits = recipeQueue.find(previousRecipe => previousRecipe.recipe_id === recipe.recipe_id)
    if (isExits){
      alert('already exits')
    }
    else {
      setRecipeQueue([...recipeQueue, recipe])
    }
  }

  const handleRemove = id => {
    const updateQueue = recipeQueue.filter(r => r.recipe_id !== id)
    setRecipeQueue(updateQueue)

    const deleteRecipe = recipeQueue.find(r => r.recipe_id === id)
    setPreparedRecipe([...preparedRecipe, deleteRecipe])
  }

  const calculate = (time, calories) => {
    setTotalTime(totalTime + time)
    setTotalCalories(totalcalorieus + calories)
  }
  return (
    <div className='container mx-auto p-4'>
      <Header></Header>
      <Banner></Banner>
      <OurRecipes></OurRecipes>
      <section className='flex flex-col md:flex-row gap-6 mt-5'>
        {/* cards */}
        <Recipies p={addRecipeToQueue}></Recipies>
        <SidBar 
        recipeQueue={recipeQueue}
        handleRemove = {handleRemove}
        preparedRecipe={preparedRecipe}
        calculate={calculate}
        totalTime ={totalTime}
        totalcalorieus={totalcalorieus}
        ></SidBar>
      </section>
    </div>
  );
};

export default App;