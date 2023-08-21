import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route,} from 'react-router-dom'
import { Provider } from 'react-redux';
import Cart from './Page/Cart';
import Home from './Page/Home'
import Navbar from './component/Navbar';
import store from './store/store';

function App() {
  
  return (
    <div className='App' >

         <Provider store={store}>
           <BrowserRouter>
           <Navbar/>
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/Page/Cart.js' element={<Cart/>}></Route>
            </Routes>
           </BrowserRouter>
           </Provider>
    </div>
  );
}

export default App;
