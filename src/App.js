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


const App = () => {

  return (  // retorna a  pagina ou porção que serah mostrada
  <div>
    <Header />
    <Container>
    <Routes>
      <Route path='/user-details' element={<UserDetail />} />
      <Route path='/user-form' element={<UserForm />}/>
      <Route path='/users/:id' element={<UserForm />} />
      <Route path='/users' element={<UsersTable />} />
      <Route path='/products' element={<Products />} />
      <Route path='/checkout' element={<Checkout />} />

    </Routes>
   
    <Outlet />
   
  </Container>
  </div>
  )
  
}

export default App
