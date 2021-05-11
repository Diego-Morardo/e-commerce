import React, { useEffect } from 'react';
import Producto from '../components/Producto';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux'
import { listarProductos } from '../actions/productActions';

export default function HomeScreen() {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, productos } = productList;
    useEffect(() => {
        dispatch(listarProductos());
    }, [dispatch]);
    return (
        <div>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                <div className="row center">
                    {productos.map(producto => (
                        <Producto key={producto._id} producto={producto}></Producto>
                    ))}
                </div> 
            )}          
        </div>
    );
}