import { useState } from 'react'

import viteLogo from '/vite.svg'

import Header from './components/navbar/Header';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Cart from './pages/Cart'
import Shop from './pages/shop';
import Product from './pages/product';
import ShopCategory from './pages/shopcategory';
import Loginsignup from './pages/Loginsignup';


function App() {
  const [count, setCount] = useState(0)

  return (

    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path ='/' element={<Shop/>}/>
      <Route path ='/men' element={<ShopCategory category ="mens"/>}/>
      <Route path ='/women' element={<ShopCategory category ="women"/>}/>
      <Route path ='/kids' element={<ShopCategory category ="kids"/>}/>
      <Route path ='/Product' element={<Product/>}>
      <Route path =':ProductId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element ={<Loginsignup/>}/>
    </Routes>
    </BrowserRouter>
  
       </>
  )
}

export default App
