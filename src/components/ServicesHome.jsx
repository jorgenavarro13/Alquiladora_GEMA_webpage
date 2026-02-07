import {useState} from 'react';
import SpotlightCard from './SpotlightCard';

const ServicesHome = () => {
    return (
        <div>
            <h1 className="text-center mt-8 font-google-sans font-bold text-3xl md:text-5xl text-gray-800">Servicios</h1>
            <p className="text-center mt-4 font-google-sans text-xl md:text-2xl">Ofrecemos una amplia gama de servicios de alquiler para eventos y ocasiones especiales.</p>
            <div className=" p-4 grid grid-cols-3 grid-rows-2 gap-2 w-full">
                <SpotlightCard className="text-white col-span-2 justify-items-center font-google-sans font-medium text-xl custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2) ">
                 Mesas y Sillas  🪑
                </SpotlightCard>

                <SpotlightCard className="text-white font-google-sans font-medium text-xl custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2) ">
                 Vajillas 🍽️
                </SpotlightCard>
                

                <SpotlightCard className="text-white font-google-sans font-medium text-xl custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2) ">
                 Carpas ⛺
                </SpotlightCard>

                <SpotlightCard className="text-white font-google-sans font-medium text-xl custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2) ">
                 Juegos de Fiesta 🎡
                </SpotlightCard>

                <SpotlightCard className="text-white font-google-sans font-medium text-xl custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2) ">
                 Y mucho mas.. ✨
                </SpotlightCard>




            </div>

        </div>
    )
}

export default ServicesHome;