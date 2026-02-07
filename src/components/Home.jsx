import React from 'react';
import Hero from './Hero';
import ServicesHome from './ServicesHome';

const Home = () => {

    return (
        <div>   
            <Hero className="timeline-view animate-zoom-in animate-range-cover" />
            <ServicesHome className="timeline-view animate-zoom-in animate-range-cover"/>
        </div>
    )
}

export default Home;
