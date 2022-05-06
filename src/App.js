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
import ManageInventory from './Pages/ManageInventory/ManageInventory.jsx';
import MyItems from './Pages/MyItems/MyItems.jsx';
import Footer from './Pages/Shared/Footer/Footer.jsx';
import NotFound from './Pages/Shared/NotFound/NotFound.jsx';
import Blog from './Pages/Blog/Blog.jsx';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/product/:itemId' element={
          <RequireAuth>
            <ProductDetails></ProductDetails>
          </RequireAuth>
        }></Route>
        <Route path='/addItems' element={<RequireAuth>
          <AddItems></AddItems>
        </RequireAuth>}></Route>
        <Route path='/myItems' element={<MyItems></MyItems>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
       <ToastContainer />
    </div>
  );
}

export default App;
