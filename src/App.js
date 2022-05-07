import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header.jsx';
import {  Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home.jsx';
import Login from './Pages/Login/Login/Login.jsx';
import Register from './Pages/Login/Register/Register.jsx';
import AddItems from './Pages/AddItems/AddItems.jsx';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth.jsx';
import ProductDetails from './Pages/ProductDetails/ProductDetails.jsx';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='product/:productId' element={<ProductDetails></ProductDetails>}></Route>
        <Route path='/addItems' element={<RequireAuth>
          <AddItems></AddItems>
        </RequireAuth>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
