import React, {useState, useEffect} from 'react'
import axiosInstance from '../myaxios';
import { Col, Row, Button } from 'react-bootstrap';
import ProductTemplate from '../Layouts/ProductTemplate';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';

const Products = () => {

const navigate = useNavigate();

  const [products, setproducts] = useState(null);
  const dispatch = useDispatch();

  const loadProducts = async () => {
    const res = await axiosInstance.get(`/products`);
    const data = await res.data;
    setproducts(data);
  }

  const addToCart = (p) => {
    dispatch({type: "ADD_TO_CART", product: p});
  }

  const removeFromCart = (p) => {
    dispatch({type: "REMOVE_FROM_CART", product: p});
  }

  useEffect(() => {
    loadProducts();
  }, [])

  return (
    <div>
        <h1>Products</h1>
        <Row>
            {products != null ? products.map((p,i) =>  
             <Col id={i} sm={12} md={6}>
                <ProductTemplate product={p} remove={removeFromCart} add={addToCart} />
             </Col>
            )
             : null } 
        </Row>
        <Button onClick={() => navigate("/checkout")} >Go to Checkout</Button>
    </div>

  )
}

export default Products