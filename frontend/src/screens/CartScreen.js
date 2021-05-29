import React from 'react';

export default function CartScreen(props) {

    const id = props.match.params.id;
    const cantidad = props.location.search
        ? Number(props.location.search.split('=')[1])
        : 1;

    return (
        <div>
            <h1>Carrito</h1>
            <p>Productos: id: {id} cantidad: {cantidad}</p>
        </div>
    )
}