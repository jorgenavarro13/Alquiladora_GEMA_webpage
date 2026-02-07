import React from 'react';
import Hero from './Hero';
import ServicesHome from './ServicesHome';
import PaquetesHome from './PaquetesHome';

const Home = () => {

    return (
        <div>   
            <Hero className="timeline-view animate-zoom-in animate-range-cover" />
            <ServicesHome className="timeline-view animate-zoom-in animate-range-cover"/>
            <PaquetesHome className="p-4 timeline-view animate-zoom-in animate-range-cover"/>
        </div>
    )
}

export default Home;
