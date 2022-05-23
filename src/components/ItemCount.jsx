import React from 'react';
import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import add from '../assets/anadir.png';
import remove from '../assets/resta.png'


const ItemCount = ({ stock, initial }) => {
    const [count, setCount] = useState(initial); // agrego un estado que setea el estado inicial


    const increment = () => {
        if (count < (stock)) setCount(count + 1); //funcion donde se va incrementando el estado inicial y no superara el stock
    }

    const decrement = () => {
        if (count > (initial)) setCount(count - 1); // se va restando 1 
    }

    const onAdd = () => {

        alert("Agregaste: " + count + " items");

    }


    return (
        <>
            <Container>
                <Row>

                    <Col> <img src={remove} onClick={decrement} /> </Col>
                    <Col> <h2>{count}</h2></Col>
                    <Col> <img src={add} onClick={increment} /> </Col>
                </Row>
                {
                    stock
                        ? <Button color="primary" onClick={onAdd}>Agregar al carrito</Button>
                        : <Button disabled>Agregar al carrito</Button>
                        
                } 
                {/* Si hay stock  el boton hace el onClick y llama a onAdd*/}

            </Container>
        </>
    )
}

export default ItemCount