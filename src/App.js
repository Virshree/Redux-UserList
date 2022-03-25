
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import User from './User';
import Adduser from './Adduser';
import Product from './Product';
import ProductList from './ProductList';
function App() {
  return (
    <div className="app">
       <BrowserRouter>
           <Nav/>
    <div className='app-body'>
       
          <Routes>
            <Route path='/' element={<User/>}></Route>
            <Route path='/user-list' element={<Adduser/>}></Route>
            <Route path='/product' element={<Product/>}></Route>
            <Route path='/product-list' element={<ProductList/>}></Route>
          </Routes>
       
    </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
