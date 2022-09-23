import React from 'react'
import axiosInstance from './myaxios'
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import UserProfile from './Layouts/UserProfile';
import UserDetail from './Screens/UserDetail';
import UserForm from './Screens/UserForm';
import UsersTable from './Screens/UsersTable';
import {Route, Routes, Outlet} from 'react-router-dom';
import Users from './Screens/UserDetail';
import Header from './Screens/Header';
import Products from './Screens/Products';
import Checkout from './Screens/Checkout';

import { useSelector } from 'react-redux'
import Auth from './Screens/Auth';


const App = () => {

  const loggedIn = useSelector(state => state.loggedIn);

  return (  // retorna a  pagina ou porção que serah mostrada
  <div>
    {loggedIn ?  <Header /> : null }
    
    <Container>
      
    <Routes>
    {loggedIn ? 
      <>
      <Route path='/user-details' element={<UserDetail />} />
      <Route path='/user-form' element={<UserForm />}/>
      <Route path='/user-form/:id' element={<UserForm />} />
      <Route path='/users' element={<UsersTable />} />
      <Route path='/products' element={<Products />} />
      <Route path='/checkout' element={<Checkout />} />
      </> :
      <Route path='*' element={<Auth />} /> 
      }
    </Routes>
   
    <Outlet />
   
  </Container>
  </div>
  )
  
}

export default App
