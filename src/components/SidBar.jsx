/* eslint-disable no-unused-vars */
import React from 'react';

const SidBar = ({recipeQueue}) => {
    return (
        <div className='md:w-1/3'>
            sidebar: {recipeQueue.length}
        </div>
    );
};

export default SidBar;