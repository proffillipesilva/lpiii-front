import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { BACKEND_URL } from '../constants';
import FeedBack from '../Layouts/FeedBack';
import axiosInstance from '../myaxios';

const UserForm = (props) => {

    const [feedBack, setfeedBack] = useState(false)
    const [isOk, setIsOk] = useState(false);

    const pathParam = useParams("id");
    const [user, setUser] = useState(null);

    const [form, setForm] = useState({ name: '', email: '', password: '', phoneNumber: '' })
    const updateForm = (e) => {

        setForm({ ...form, [e.target.name]: e.target.value })
    }
    // ... spread operation --> copia de uma lista ou dicionario

    const submitForm = async (e) => {
        e.preventDefault();
        try{
            if (!pathParam.id) {
                const res = await axiosInstance.post("/users", form);
                
                const data = await res.data;
                setfeedBack(true);
                setIsOk(true);
                
            } else {
                const res = await axiosInstance.put(`/users/${pathParam.id}`, form);
             
                const data = await res.data;
                setfeedBack(true);
                setIsOk(true);
                setTimeout(() => setfeedBack(false), 1000);
            }
        } catch(ex) {
            console.log(ex);
            setfeedBack(true);
            setIsOk(false);
        }
    }

    const loadUser = async (id) => {
        try {
            const res = await axiosInstance.get(`/users/${id}`);
            const user = await res.data;
            setForm({
                name: user.name,
                email: user.email,
                password: user.password,
                phoneNumber: user.phoneNumber
            })
            setUser(user);
        } catch (ex) {

        }
    }


    const submitImageForUser = async (id) => {
        try {
            const formData = new FormData();
            formData.append("image", file);
            const res = await axiosInstance.put(`/users/image/${id}`, formData);
            const user = await res.data;

        } catch (ex) {

        }
    }


    useEffect(() => {
        if (pathParam.id != null)
            loadUser(pathParam.id)
    }, [])

    // IMAGE PROCESSING
    const [file, setFile] = useState(null);
    const [fileDataURL, setFileDataURL] = useState(null);

    const changeHandler = (e) => {
        const file = e.target.files[0];

        setFile(file);
        if (file) {
            let fileReader = new FileReader();
            fileReader.onload = (e) => {
                const { result } = e.target;
                if (result) {
                    setFileDataURL(result)
                }
            }
            fileReader.readAsDataURL(file);
        }
    }

    return (
        <div>
            { feedBack ? <FeedBack isOk={isOk} closeFeedBack={setfeedBack} ><div>a</div></FeedBack> : null }
            <hr />
            <h2>{pathParam.id == null ? "Create User" : "Edit User" } </h2>
            <Form>
                <Form.Group controlId="name-id">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" name="name" onChange={updateForm} value={form.name} />
                </Form.Group>
                <Form.Group controlId="email-id">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" onChange={updateForm} value={form.email} />
                </Form.Group>
                <Form.Group controlId="password-id">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" name="password" onChange={updateForm} value={form.password} />
                </Form.Group>
                <Form.Group controlId="phone-id">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Phone Number" name="phoneNumber" onChange={updateForm} value={form.phoneNumber} />
                </Form.Group>
                <br />
                <Button variant="success" onClick={submitForm}>
                    { pathParam.id ? "Edit User" : "Create User"}
                </Button>
            </Form>
            <hr />
            { pathParam.id != null ?
                <div>
                    <h2> Imagem </h2>
                    <Form>
                        <div>
                            <img src={fileDataURL == null ? (user != null && user.profileImage != null ?
                                `${BACKEND_URL}/images/${user.profileImage}.jpg` : '') : fileDataURL} width={300} />
                        </div>
                        <Form.Control onChange={changeHandler} type="file" />
                        <br />
                        <Button variant="success" onClick={() => submitImageForUser(pathParam.id)}>
                            Submeter Imagem
                        </Button>
                    </Form>
                </div>
            : null}
        </div>
    )
}

export default UserForm