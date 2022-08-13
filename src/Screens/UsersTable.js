import React, {useState, useEffect} from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MyModal from '../Layouts/MyModal';
import axiosInstance from '../myaxios';

const UsersTable = () => {
  const [users, setusers] = useState(null)
  const [showModal, setshowModal] = useState(false)
  const [user, setuser] = useState(null)

  const loadUsers = async () => {
    try{
        const res = await axiosInstance.get('/users');
        const data = await res.data;
        setusers(data)
    } catch (ex) {

    }
  }

  const deleteUser = async (id) => {
    try{
      const res = await axiosInstance.delete(`/users/${id}`);
      const data = await res.data;
      //setusers(data)
    } catch (ex) {

    }
  }

  useEffect(() => {
    loadUsers();
  }, [])

  const openModal = (user) => {
    setshowModal(true);
    setuser(user);
  }

  const closeModal = () => {
    setshowModal(false);
  }

  const confirmDelete = async () => {
    setshowModal(false);
    await deleteUser(user?.id)
    await loadUsers();
  }

  return (
    <div>
        <MyModal showModal={showModal}  handleCloseModal={closeModal} title="Deletando Usuario"
        confirmTitle="Confirmar Deleção"
        confirmOperation={confirmDelete}
        >
          <p>
            Deletando usuario {user?.name}
          </p>
        </MyModal>
        <hr />
        <Table striped bordered responsive hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {users ? users.map((user,idx) => (
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phoneNumber}</td>
                        <td><Link to={`/users/${user.id}`} ><span><i class="fa fa-pencil" aria-hidden="true"></i></span></Link></td>
                        <td ><span onClick={() => openModal(user)}><i class="fa fa-eraser" aria-hidden="true"></i></span></td>
                    </tr>
                )) : <tr><td colSpan={4} >Sem usuarios no Banco</td></tr> }
            </tbody>
        </Table>
        <hr />
    </div>
  )
}

export default UsersTable