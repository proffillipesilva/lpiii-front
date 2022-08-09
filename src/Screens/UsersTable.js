import React, {useState, useEffect} from 'react';
import { Table, Button } from 'react-bootstrap';
import axiosInstance from '../myaxios';

const UsersTable = () => {
  const [users, setusers] = useState(null)
  const loadUsers = async () => {
    try{
        const res = await axiosInstance.get('/users');
        const data = await res.data;
        setusers(data)
    } catch (ex) {

    }
  }

  useEffect(() => {
    loadUsers();
  }, [])

  return (
    <div>
        
        <hr />
        <Table striped bordered responsive hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                </tr>
            </thead>
            <tbody>
                {users ? users.map((user,idx) => (
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phoneNumber}</td>
                    </tr>
                )) : <tr><td colSpan={4} >Sem usuarios no Banco</td></tr> }
            </tbody>
        </Table>
        <hr />
    </div>
  )
}

export default UsersTable