import React from 'react';
import FlyingPosters from './FlyingPosters'
import {PaqueteMarfil, PaqueteCeleste, LozaTresTiempos, EventoTiffany, PaqueteRey, PaqueteNube, LozaBase} from '@/assets/img/index.js';

const Home = () => {
    

    return (
        <div className="pt-4 flex flex-col items-center justify-center gap-8">   
                
                <h1 className="text-5xl md:text-7xl font-google-sans font-bold text-w leading-tight">
                    Nuestros paquetes 
                </h1>
               
                <div className="grid grid-cols-3 grid-rows-2 gap-10 w-full">
                    <img src={PaqueteMarfil} alt="Paquete Mesas y Sillas" className=" animate-fade-in-up rounded-xl shadow-xl m-4 col-span-1 hover:scale-105 hover:contrast-125 transition"/>
                    <img src={PaqueteCeleste} alt="Paquete Mesas y Sillas" className="animate-fade-in-up rounded-xl shadow-xl m-4 col-span-1 hover:scale-105 hover:contrast-125 transition"/>
                    <img src={PaqueteRey} alt="Paquete Mesas y Sillas" className="animate-fade-in-up rounded-xl shadow-xl m-4 col-span-1 hover:scale-105 hover:contrast-125 transition"/>
                    <img src={PaqueteNube} alt="Paquete Mesas y Sillas" className="animate-fade-in-up rounded-xl shadow-xl m-4 col-span-1   hover:scale-105 hover:contrast-125 transition"/>
                    <img src={LozaTresTiempos} alt="Paquete Mesas y Sillas" className="animate-fade-in-up rounded-xl shadow-xl m-4 col-span-1 hover:scale-105 hover:contrast-125 transition"/>
                    <img src={LozaBase} alt="Paquete Mesas y Sillas" className="animate-fade-in-up rounded-xl shadow-xl m-4 col-span-1 hover:scale-105 hover:contrast-125 transition"/>
                </div>
    
        </div>
    )
}

export default Home;
