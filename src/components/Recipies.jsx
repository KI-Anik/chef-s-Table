/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const Recipies = () => {
    const [recipies,setrecipies] =useState([])

    useEffect(() => {
        fetch('./fake.json')
        .then(res => res.json())
        .then(data => setrecipies(data))
    }
        ,[])
        console.log(recipies)
    return (
        <div className='md:w-2/3'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {
            recipies.map(recipe => 
                <div key={recipe.recipe_id} className="card bg-base-100 shadow-xl">
                <figure className='px-8 pt-6'>
                  <img
                  className='md:h-52 w-full object-cover rounded-xl'
                    src= {recipe.recipe_image}
                    alt="food" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title font-bold">{recipe.recipe_name}</h2>
                  <p className='text-gray-600'>{recipe.short_description}</p>
                  <h3 className='text-xl font-medium'>Ingredients: {recipe.ingredients.length}</h3>
                  <p className='ml-8'>
                    {
                        recipe.ingredients.map((item, idx)=> <li key={idx}>{item}</li>)
                    }
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            )
           }
          </div>
        </div>
    );
};

export default Recipies;