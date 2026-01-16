import data from '../assets/data/pedidos_sample.json';

export const pedirDatos = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(data);  
        },500)
    })
}

export default pedirDatos;