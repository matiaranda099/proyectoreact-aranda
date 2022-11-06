import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import { Carrito } from "./components/Carrito/Carrito";
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/itemDetailContainer';
import CartProvider from './context/CartContext'



function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
            <Route path='/carrito/Carrito' element={<Carrito />}></Route>
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
          </Routes>
        </CartProvider>
      </div>
    </BrowserRouter>

  );
}

export default App;
