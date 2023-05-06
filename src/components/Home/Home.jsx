/** @format */

import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className='container h-screen '>
      <section className='homeSection absolute'>
        <h1 className='font-normal '>Ahoj.</h1>
        <p className='tracking-widest absolute'>Toto je moje portfólio</p>
      </section> 
    </div>
  );
};

export default Home;
