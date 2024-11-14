/* eslint-disable no-unused-vars */
import React from 'react';

const Header = () => {
    return (
        <div className='flex justify-evenly'>
                <h1 className='text-3xl font-bold'>Recipe Calories</h1>
                <ul className='flex gap-5'>
                <li><a href="">Home</a></li>
                <li><a href="">Recipies</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Search</a></li>
                </ul>
            {/* search */}
            <div className='flex gap-5 items-center justify-between'>
            <p className='px-8 py-3 bg-gray-100 rounded-full inline-block'><i className="fa-solid fa-magnifying-glass"></i> Search</p>
            <i className="fa-solid fa-user"></i>
            </div>
        </div>
    );
};

export default Header;