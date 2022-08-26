import React from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap';
import { BACKEND_URL } from '../constants';


const ProductTemplate = (props) => {
  return (
    <div>
        <Card style={{ width: '18rem', height: '36rem', margin: '1rem' }}>
            <Card.Img variant="top" src={`${BACKEND_URL}/images/${props.product.productImage}.jpg`} />
            
            <Card.Body>
                <Card.Title>{props.product.price}</Card.Title>
                <Card.Subtitle>{props.product.name}</Card.Subtitle>
                <Card.Text>
                    {props.product.description}
                </Card.Text>
                <Row>
                    <Col><Button onClick={() => props.remove(props.product)} variant='danger' >Remove From Cart </Button></Col>
                    <Col><Button onClick={() => props.add(props.product)} variant='primary'>Add To Cart </Button></Col>
                </Row>
            </Card.Body>
           
           
        </Card>
    </div>
  )
}

export default ProductTemplate