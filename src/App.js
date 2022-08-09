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

const App = () => {
  return (  // retorna a  pagina ou porção que serah mostrada
  <div>
    <Header />
    <Container>
    <Routes>
      <Route path='/user-details' element={<UserDetail />} />
      <Route path='/user-form' element={<UserForm />}/>
      <Route path='/users' element={<UsersTable />} />

    </Routes>
    <Outlet />
  </Container>
  </div>
  )
  
}

export default App
