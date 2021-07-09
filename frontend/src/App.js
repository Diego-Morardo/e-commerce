import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';


function App() {
  return (
    <BrowserRouter>  
        <div className="grid-container">
            <header className="row">
                <div>
                    <Link className="brand" to="/">inicio</Link>
                </div>
                <div>
                    <Link to="/carrito">Carrito</Link>
                    <Link to="/signin">Sign In</Link>
                </div>
            </header>
            <main>
                <Route path="/carrito/:id?" component={CartScreen}></Route>
                <Route path="/producto/:id" component={ProductScreen}></Route>
                <Route path="/" component={HomeScreen} exact></Route> 
            </main>
            <footer className="row center">Todos los derechos reservados </footer>
        </div>
    </BrowserRouter>
  );
}

export default App;
