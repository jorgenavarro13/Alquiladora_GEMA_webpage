import {useState} from 'react';
import ServicesCarrusel from './ServicesCarrusel';

const ServicesHome = () => {
    return (
        <div>
            <h1>Servicios</h1>
            <p>Ofrecemos una amplia gama de servicios de alquiler para eventos y ocasiones especiales.</p>
            <ServicesCarrusel />
        </div>
    )
}

export default ServicesHome;