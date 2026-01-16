
const Pedido = ({pedido}) =>{
    return(
            <div className="pedido-row">
            <div className="pedido-cell fecha-entrega">
                <span className="cell-label">FECHA ENTREGA</span>
                <div className="cell-date">{pedido.fecha}</div>
                <div className="cell-time">{pedido.hora}</div>
            </div>

            <div className="pedido-cell cliente">
                <span className="cell-label">CLIENTE</span>
                <div className="cell-content">{pedido.cliente.nombre}</div>
            </div>

            <div className="pedido-cell telefono">
                <span className="cell-label">TELÉFONO</span>
                <div className="cell-content">{pedido.cliente.telefono}</div>
            </div>

            <div className="pedido-cell domicilio">
                <span className="cell-label">DOMICILIO</span>
                <div className="cell-content">
                    {pedido.direccion?.fraccionamiento && 
                        <div>{pedido.direccion.fraccionamiento} {pedido.direccion.privada && `, ${pedido.direccion.privada}`}</div>
                    }
                    {pedido.direccion?.municipio && 
                        <div>{pedido.direccion.municipio} {pedido.direccion.cp && `, CP ${pedido.direccion.cp}`}</div>
                    }
                </div>
            </div>

            <div className="pedido-cell total">
                <span className="cell-label">TOTAL</span>
                <div className="cell-content">${pedido.total.toLocaleString('es-MX')}</div>
                <div className="cell-subtext">2 días</div>
            </div>

            <div className="pedido-cell estado">
                <span className="cell-label">ESTATUS</span>
                <div className={`badge estado-${pedido.estado.toLowerCase().replace(/\s+/g, '-')}`}>
                    {pedido.estado}
                </div>
            </div>

            <div className="pedido-cell recoleccion">
                <span className="cell-label">RECOLECCIÓN</span>
                <div className="cell-content">16/1/2025</div>
            </div>

            <div className="pedido-cell acciones">
                <span className="cell-label">ACCIONES</span>
                <div className="acciones-buttons">
                    <button className="btn-icon" title="Ver detalles">👁️</button>
                    <button className="btn-icon" title="Eliminar">🗑️</button>
                </div>
            </div>
        </div>
    )
}

{/*
    "id_pedido": 1,
    "fecha": "2024-03-15",
    "hora": "14:00",
    "cliente": { "nombre": "Ricardo Mendoza", "telefono": "7711234567" },
    "direccion": { "fraccionamiento": "Viñedos", "privada": "Circuito de la Vid", "municipio": "Zempoala", "cp": "43845" },
    "items": [
      { "producto": "Paquete Celeste", "cantidad": 2, "precio_unitario": 120 },
      { "producto": "Inflable Multicastillo", "cantidad": 1, "precio_unitario": 500 }
    ],
    "total": 740,
    "estado": "Confirmado"
  */}
export default Pedido;