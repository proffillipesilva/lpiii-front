import React from 'react'
import { Form, Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import axiosInstance from '../myaxios';

const Auth = () => {
  const [form, setform] = React.useState({email: "", password: ""})
  const dispatch = useDispatch();

  const handleChange = e => {
    e.preventDefault();
    setform({...form, [e.target.name]: e.target.value})
  }

  const signIn = async () => {
    const res = await axiosInstance.post("/auth/signIn", form);
    const data = await res.data;
    const token = data.token;
    localStorage.setItem("token", token);
    dispatch({type: "LOGIN"});
  }
  return (
    <div>
        <Container>
            <h1>Please Log In</h1>
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" value={form.email} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" onChange={handleChange} value={form.password}/>
            </Form.Group>
            
            <Button onClick={signIn} variant="primary" type="submit" >
                Submit
            </Button>
        </Form>
        </Container>

    </div>
  )
}

export default Auth