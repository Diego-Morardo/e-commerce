import React from 'react';
import data from './data';

function App() {
  return (
    <div className="grid-container">
            <header className="row">
                <div>
                    <a className="brand" href="/">inicio</a>
                </div>
                <div>
                    <a href="/carrito">Carrito</a>
                    <a href="/signin">Sign In</a>
                </div>
            </header>
            <main>
                <div className="row center">
                  {
                    data.productos.map(producto => (
                      <div key={producto._id} className="card">
                        <a href={`/producto/${producto._id}`}>
                            <img className="medium" src={producto.imagen} alt={producto.nombre}/>
                        </a>
                        <div className="card-body">
                            <a href={`/producto/${producto._id}`}>
                                <h2>{producto.nombre}</h2>
                            </a>
                            <div className="rating">
                                <span><i className="fa fa-star"></i></span>
                                <span><i className="fa fa-star"></i></span>
                                <span><i className="fa fa-star"></i></span>
                                <span><i className="fa fa-star"></i></span>
                                <span><i className="fa fa-star"></i></span>
                            </div>
                            <div className="precio">
                                ${producto.precio}
                            </div>
                        </div>
                    </div>
                    ))
                  }
                </div>
            </main>
            <footer className="row center">Todos los derechos reservados </footer>
        </div>
  );
}

export default App;
