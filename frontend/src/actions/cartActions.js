import Axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const addToCart = (productId, cant) => async (dispatch, getState) => {
    const { data } = await Axios.get(`/api/productos/${productId}`);
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            nombre: data.nombre,
            imagen: data.imagen,
            precio: data.precio,
            stock: data.cantidadEnStock,
            producto: data._id,
            cant,
        },
    });
};

export const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({type: CART_REMOVE_ITEM, payload: productId});
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}; 