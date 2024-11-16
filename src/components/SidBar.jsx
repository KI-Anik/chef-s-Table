/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const SidBar = ({ recipeQueue, handleRemove, preparedRecipe, calculate, totalTime, totalcalorieus }) => {
    return (
        <div className='md:w-1/3 border-2 rounded-2xl p-2'>
            {/* want cook */}
            <div className="overflow-x-auto">
                <h2 className='text-xl mx-auto p-3 font-semibold border-b-2 w-2/3 text-center'>Want To Cook: {recipeQueue.length}</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {recipeQueue.map((recipe, idx) =>
                            <tr key={idx} className='hover'>
                                <td>{idx + 1}</td>
                                <td>{recipe.recipe_name}</td>
                                <td>{recipe.preparing_time}</td>
                                <td>{recipe.calories}</td>
                                <td><button onClick={() => {
                                    handleRemove(recipe.recipe_id)
                                    calculate(recipe.preparing_time, recipe.calories)
                                }
                                }
                                    className="btn  bg-green-600 rounded-full font-semibold">Preparing</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            {/* cooking */}
            <div className="overflow-x-auto mt-8">
                <h2 className='text-xl mx-auto p-3 font-semibold border-b-2 w-2/3 text-center'>Currently Cooking: {preparedRecipe.length}</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {preparedRecipe.map((recipe, idx) =>
                            <tr key={idx} className='hover'>
                                <td>{idx + 1}</td>
                                <td>{recipe.recipe_name}</td>
                                <td>{recipe.preparing_time}</td>
                                <td>{recipe.calories}</td>
                            </tr>
                        )}
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Total Time: {totalTime} </td>
                            <td>Total Calories:{totalcalorieus} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SidBar;