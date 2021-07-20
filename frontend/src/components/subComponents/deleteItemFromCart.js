import React, { useEffect, useState } from 'react'
import {Button} from "antd";
import axios from "axios";

function DeleteItemFromCart(props){

    const [item, setItem] = useState({})

    useEffect(() => {

        setItem(props.id)

    }, [props.id])

    const DeleteCartItemhandler = () => {

        axios.delete(`http://localhost:5000/Cart/${item}`)
            .then(response => {
                if (response.data.success) {
                    alert(response.data.message)
                } else {
                    alert('Failed to remove from cart')
                }
            }).then( () => {
            window.location.reload(false);
        })
    }

    return (
        <Button className="delete" onClick={DeleteCartItemhandler}>X</Button>
    )
}

export default DeleteItemFromCart

