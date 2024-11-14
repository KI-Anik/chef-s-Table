/* eslint-disable no-unused-vars */
import React from 'react';

const Banner = () => {
    return (
        <div className='bg-cover bg-no-repeat rounded-3xl w-full md:h-[45.5rem] mb-10'
       style ={{
        backgroundImage: 'url(https://i.ibb.co.com/3kYtv41/banner.png)',
       }}>
        <div className='w-9/12  text-white m-auto p-10 space-y-6 md:w-1/2'>
       <h1 className='text-3xl font-bold'>Discover an exceptional cooking class tailored for you!</h1>
       <p>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
       <div className='flex gap-5 mx-auto md:w-1/2'>
        <button className='btn bg-success rounded-full'>Explore Now</button>
        <button className='btn btn-outline text-white rounded-full'>Our Feedback</button>
       </div>
        </div>
        </div>
    );
};

export default Banner;