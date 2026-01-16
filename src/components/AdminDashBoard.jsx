import {useEffect,useState} from 'react';
import Bitacora from './Bitacora.jsx';

const AdminDashBoard = () => {

    const [categoria, setCategoria]=useState("Hola");

    


    return (
        <div>
            <h1>Admin Dashboard</h1>
            <input></input>
            <Bitacora categoria={categoria}/>
        </div>
    )
}   

export default AdminDashBoard;