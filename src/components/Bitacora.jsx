import{useState,useEffect} from 'react';
import pedirDatos from '../helpers/helpers.js';
import Pedido from './Pedido.jsx';

const Bitacora = ({categoria}) => {

    const [pedidos, setPedidos]=useState([]);

    {/*llama a la funcion que pide los datos, recuerda que en useEffect lo necesitas*/}

    useEffect ( ()=>{ 
        pedirDatos()
            .then((res)=> {
                setPedidos(res);
            })
    },[]);

    return (
        <div className="bitacora-section">
            <h1>{categoria}</h1>
            {pedidos.map((pedido)=>(
                <Pedido  pedido={pedido}/>
            ))}
        </div>
    )
}
export default Bitacora;