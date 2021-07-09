import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
import MessageBox from '../components/MessageBox';

export default function CartScreen(props) {

    const id = props.match.params.id;
    const cantidad = props.location.search
        ? Number(props.location.search.split('=')[1])
        : 1;

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart; 

    const dispatch = useDispatch();
    useEffect(() => {
        if (id) {
            dispatch(addToCart(id, cantidad));
        }
    }, [dispatch, id, cantidad]);
    
    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    };

    const checkoutHandler = () => {
        props.history.push('/signin?redirect=shipping')
    }

    return (
        <div className="row top">
            <div className="col-2">
                <h1>Carrito de Compras</h1>
                {cartItems.length === 0? <MessageBox>
                    El carrito esta vacio. <Link to="/">Go Shopping</Link>
                </MessageBox>
                :
                (
                    <ul>
                        {
                            cartItems.map((item) => (
                                <li key={item.producto}>
                                    <div className="row">
                                        <div>
                                            <img 
                                                src={item.imagen} 
                                                alt={item.nombre} 
                                                className="small"
                                            ></img>
                                        </div>
                                        <div className="min-30">
                                            <Link to={`/producto/${item.producto}`}>{item.nombre}</Link>
                                        </div>
                                        <div>
                                            <select 
                                                value={item.cant} 
                                                onChange={(e) => 
                                                    dispatch(
                                                        addToCart(item.producto, Number(e.target.value))
                                                    )}
                                            >
                                                {
                                                    [...Array(item.stock).keys()].map(x => (
                                                        <option key={x+1} value={x+1}>{x+1}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div>
                                            ${item.precio}
                                        </div>
                                        <div>
                                            <button type="button" onClick={() => removeFromCartHandler(item.producto)}>Borrar</button>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                )
                }
            </div>
            <div className="col-1">
                <div className="card card-body">
                    <ul>
                        <li>
                            <h2>
                                Subtotal ({cartItems.reduce((a, c) => a + c.cant, 0)} items) : 
                                ${cartItems.reduce((a, c) => a + c.precio * c.cant, 0)}
                            </h2>
                        </li>
                        <li>
                            <button 
                                type="button" 
                                onClick={checkoutHandler} 
                                className="primary block" 
                                disabled={cartItems.length === 0}
                            >
                                Proceed to Checkout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}