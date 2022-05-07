import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import ManageItems from './Pages/ManageItems/ManageItems';
import AddITems from './Pages/Home/AddItems/AddITems';
import MyItems from './Pages/Home/MyItems/MyItems';
import ItemDetail from './Pages/ItemDetail/ItemDetail';
import RequireAuth from '../src/Pages/Auth/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import Login from './Pages/Auth/Login/Login.js';
import Signup from './Pages/Auth/Signup/Signup.js';
import NotFound from './Pages/Shared/NotFound/NotFound.jsx';
import Blog from './Pages/Blog/Blog.jsx';
import About from './Pages/About/About.jsx';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/manageItems' element={
          <RequireAuth>
            <ManageItems></ManageItems>
          </RequireAuth>
        }></Route>
        <Route path='/addItems' element={
          <RequireAuth>
            <AddITems></AddITems>
          </RequireAuth>
        }></Route>
        <Route path='/myItems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path='/item/:itemId' element={
        <RequireAuth>
          <ItemDetail></ItemDetail>
        </RequireAuth>
        }></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
