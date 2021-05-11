import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detallesProducto } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating';

export default function ProductScreen(props) {
    const dispatch = useDispatch();
    const id = props.match.params.id;
    const productDetails = useSelector(state => state.productDetails);
    const { loading, error, producto } = productDetails;
    
    useEffect(() => {
        dispatch(detallesProducto(id));
    }, [dispatch, id])

    return (
        <div>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
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
                                                <span className="danger">No Disponible</span>
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
            )}          
        </div>
        
    );
}