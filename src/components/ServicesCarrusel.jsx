import {useState} from 'react';
import {PaqueteMarfil, PaqueteCeleste, LozaTresTiempos} from '@/assets/img/index.js';
import '../App.css';
import FlowingMenu from './../helpers/FlowingMenu.jsx';

const ServicesCarrusel = () => {
  const demoItems = [
    { link: '#', text: 'Mesas y sillas', image: PaqueteMarfil },
    { link: '#', text: 'Carpas', image: PaqueteCeleste },
    { link: '#', text: 'Brincolines', image: LozaTresTiempos },
  ];

  return (
        <div style={{ height: '600px', position: 'relative' }}>
          <FlowingMenu items={demoItems}
          speed={15}
          textColor="#ffffff"
          bgColor="#27272a"
          marqueeBgColor="#ffffff"
          marqueeTextColor="#060010"
          borderColor="#ffffff"
        />
        </div>
        );
}

export default ServicesCarrusel;