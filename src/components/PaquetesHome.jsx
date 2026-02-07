import React from 'react';
import {PaqueteMarfil, PaqueteCeleste, LozaTresTiempos, EventoTiffany, PaqueteRey, PaqueteNube, LozaBase} from '@/assets/img/index.js';
import { motion } from 'motion/react';

const Home = () => {
    

    return (
        <div className="pt-4 flex flex-col items-center justify-center gap-8">   
                
                <h1 className="text-center text-5xl md:text-7xl font-google-sans font-bold text-w leading-tight">
                    Nuestros paquetes 
                </h1>
               
                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 md:gap-10 w-full justify-items-center">
                    <motion.img 
                        src={PaqueteMarfil} 
                        alt="Paquete Mesas y Sillas" 
                        className="rounded-xl shadow-xl m-4 col-span-1"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05, filter: "contrast(1.25)" }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5 }}
                    />
                    <motion.img 
                        src={PaqueteCeleste} 
                        alt="Paquete Mesas y Sillas" 
                        className="rounded-xl shadow-xl m-4 col-span-1"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05, filter: "contrast(1.25)" }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5 }}
                    />
                    <motion.img 
                        src={PaqueteRey} 
                        alt="Paquete Mesas y Sillas" 
                        className="rounded-xl shadow-xl m-4 col-span-1"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05, filter: "contrast(1.25)" }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5 }}
                    />
                    <motion.img 
                        src={PaqueteNube} 
                        alt="Paquete Mesas y Sillas" 
                        className="rounded-xl shadow-xl m-4 col-span-1"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05, filter: "contrast(1.25)" }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5 }}
                    />
                    <motion.img 
                        src={LozaTresTiempos} 
                        alt="Paquete Mesas y Sillas" 
                        className="rounded-xl shadow-xl m-4 col-span-1"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05, filter: "contrast(1.25)" }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5 }}
                    />
                    <motion.img 
                        src={LozaBase} 
                        alt="Paquete Mesas y Sillas" 
                        className="rounded-xl shadow-xl m-4 col-span-1"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05, filter: "contrast(1.25)" }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
    
        </div>
    )
}

export default Home;
