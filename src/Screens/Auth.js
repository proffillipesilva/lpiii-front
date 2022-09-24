import React from 'react'
import { Form, Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import axiosInstance from '../myaxios';
import { GoogleLogin } from 'react-google-login';




const Auth = () => {
  const [form, setform] = React.useState({email: "", password: ""})
  const dispatch = useDispatch();

  const responseGoogle = async (response) => {
    const tokenId = response.tokenId;
    const res = await axiosInstance.post("/auth/loginWithGoogle", { tokenId })
    const data = await res.data;
    const token = data.token;
    localStorage.setItem("token", token);
    dispatch({type: "LOGIN"});
  }
  

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
            <GoogleLogin
    clientId="277380091468-1pe2je91eas7almtof0bf0bfhmehbvgi.apps.googleusercontent.com"
    buttonText="Login With Google"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
        </Form>
        </Container>

    </div>
  )
}

export default Auth