/** @format */

import React from 'react';
import './About.css';

const About = () => {
  return (
    <div
      className='wrapper bg-white flex m-auto'
      style={{
        height: '100vh',
      }}>
      <section className='section flex flex-row gap-8 items-center justify-center m-auto z-0'>
        <div className='leftSide flex flex-col text-left w-2/3 leading-none z-20'>
          <h2 className='text-6xl font-normal'>Som</h2>
          <h1 className='font-semibold text-7xl'>Kristína Svoradová</h1>
          <p className='w-1/2 font-normal my-10 leading-normal'>
            Som kreatívna hlava s množstvom nápadov, ktoré sa snažím pretvoriť do videí. Tvoreniu
            amatérskych videí sa venujem približne 3 roky a stále ma to neprestalo baviť!{' '}
          </p>
        </div>
        <div className='centerSide absolute rounded-full bg-black z-10 '>
          <p className='text-white text-9xl flex mt-80 justify-center'>kikulik</p>
        </div>
        <div className='rightSide flex flex-col text-center w-1/3 p-20 pr-2'>
          <p className='pb-6'>
            Pozrite si moje{' '}
            <a
              className='text-black font-bold '
              href='#Portfolio'>
              portfolio
            </a>{' '}
            a ak Vás moja tvorba zaujme neváhajte ma kontaktovať
          </p>
          <div className='flex gap-6 m-auto text-center '>
            <a
              href=''
              className='bg-black rounded-full'>
              <i className='fa-brands fa-facebook '></i>
            </a>
            <a
              href=''
              className='bg-black rounded-full'>
              <i className='fa-brands fa-instagram'></i>
            </a>
            <a
              href=''
              className='bg-black rounded-full '>
              <i className='fa-brands fa-tiktok'></i>
            </a>
            <a
              href=''
              className='bg-black rounded-full'>
              <i className='fa-solid fa-envelope'></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
