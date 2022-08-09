import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const UserProfile = (props) => {
  const variavel1 = "Ola@mail.com";
  return (
    <div>
        <Container>
            <h1>User Profile for ID {props.id}</h1>
            <hr />
            <Row>
                 <Col md={6}>
                    Profile Image
                    <img src={props.image} className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="" />
                    </Col>
                 <Col md={6}>
                    Email : {props.email} <br />

                    Nome: {props.name}
                 </Col>
            </Row>
        </Container>

    </div>
  )
}

export default UserProfile