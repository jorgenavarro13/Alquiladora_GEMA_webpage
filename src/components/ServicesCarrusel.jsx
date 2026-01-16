import {useState} from 'react';
import {PaqueteMarfil, PaqueteCeleste, LozaTresTiempos} from '@/assets/img/index.js';
import '../App.css';

const ServicesCarrusel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const products = [
        { id: 1, image: PaqueteMarfil, name: "Paquete Marfil" },
        { id: 2, image: PaqueteCeleste, name: "Paquete Celeste" },
        { id: 3, image: LozaTresTiempos, name: "Loza Tres Tiempos" },
    ];

    const next = () => {
        setCurrentIndex((prev) =>
            prev === products.length - 1 ? 0 : prev + 1
        );
    };
    


    const prev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? products.length - 1 : prev - 1
    );
    };
   return (
        <div className="carousel">
            <button onClick={prev}>‹</button>

            <img
            src={products[currentIndex].image}
            alt={products[currentIndex].name}
            />

            <button onClick={next}>›</button>
        </div>
        );
    }

export default ServicesCarrusel;