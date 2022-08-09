import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap';
import axiosInstance from '../myaxios';

const UserForm = (props) => {
    const [form, setForm] = useState({name: '', email: '', password: '', phoneNumber: ''})
    const updateForm = (e) => {
        setForm({...form, [e.target.name]: e.target.value })
    }
    // ... spread operation --> copia de uma lista ou dicionario

    const submitForm = async (e) => {
        e.preventDefault();
        //console.log(form);
        const res = await axiosInstance.post("/users", form);
        const data = await res.data;
        alert(JSON.stringify(data))
    }

    /*
    String name;
    String email;
    String password;
    String phoneNumber;
    */

    return (
        <div>
            <hr />
            <h2>Create User</h2>
            <Form>
                <Form.Group controlId="name-id">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" name="name" onChange={updateForm} value={form.name} />
                </Form.Group>
                <Form.Group controlId="email-id">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"  name="email" onChange={updateForm} value={form.email} />
                </Form.Group>
                <Form.Group controlId="password-id">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password"  name="password" onChange={updateForm} value={form.password} />
                </Form.Group>
                <Form.Group controlId="phone-id">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Phone Number"  name="phoneNumber" onChange={updateForm} value={form.phoneNumber} />
                </Form.Group>
                <Button variant="success" onClick={submitForm}>
                    Create User
                </Button>
            </Form>
            <hr />
        </div>
    )
}

export default UserForm