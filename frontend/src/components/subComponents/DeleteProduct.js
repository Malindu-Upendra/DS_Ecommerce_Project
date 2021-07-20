import React, { useEffect, useState } from 'react'
import {Button} from "antd";
import axios from "axios";

function DeleteProduct(props){

    const [ProductId, setProductId] = useState({})

    useEffect(() => {

        setProductId(props.id)

    }, [props.id])

    const DeleteProducthandler = () => {

        axios.delete(`http://localhost:5000/product/${ProductId}`)
            .then(response => {
                if (response.data.success) {
                    alert(response.data.message)
                } else {
                    alert('Failed to Delete Product')
                }
            }).then( () => {
            window.location.reload(false);
        })
    }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button size="large" shape="round" type="danger"
                        onClick={DeleteProducthandler}
                >
                    Delete Product
                </Button>
            </div>
        </div>
    )
}

export default DeleteProduct

