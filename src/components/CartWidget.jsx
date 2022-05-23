import React from "react"
import { Container } from "react-bootstrap"
import icon from "../assets/icon.png"
const CartWidget = () => {
    return(
        <Container>
           
            <img src={icon} alt="icon" width={30}/>
            
        </Container>
    )
}

export default CartWidget