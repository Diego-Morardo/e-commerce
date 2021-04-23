import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import data from '../data';

export default function ProductScreen(props) {
    const producto = data.productos.find((x) => x._id === parseInt(props.match.params.id));
    if (!producto) {
        return <div>Producto No Encontrado</div>;
    }
    return (
        <div>
            <Link to="/">Volver</Link>
            <div className="row top">
                <div className="col-2">
                    <img className="large" src={producto.imagen} alt={producto.nombre}></img>
                </div>
                <div className="col-1">
                    <ul>
                        <li><h1>{producto.nombre}</h1></li>
                        <li><Rating rating={producto.rating} numReviews={producto.numReviews}></Rating></li>
                        <li>Precio: ${producto.precio}</li>
                        <li>Descripción: <p>{producto.descripcion}</p></li>
                    </ul>                
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Precio</div>
                                    <div className="precio">${producto.precio}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Estado</div>
                                    <div>{producto.cantidadEnStock > 0 ? (
                                        <span className="success">En Stock</span>
                                    ) : (
                                        <span className="error">No Disponible</span>
                                    )}</div>
                                </div>
                            </li>
                            <li>
                                <button className="primary block">Agregar al carrito</button>
                            </li>
                        </ul>
                    </div>                
                </div>
            </div>    
        </div>
    );
}