import React, { useEffect, useState } from 'react'
import {Button} from "antd";
import axios from "axios";

function AddToCartButton(props){

        const [Product, setProduct] = useState({})

        useEffect(() => {

            setProduct(props.detail)

        }, [props.detail])

        const addToCarthandler = () => {
            const cart = {
                title: Product.title,
                price: Product.price
            }

            axios.post('http://localhost:5000/Cart/', cart)
                .then(response => {
                if (response.data.success) {
                    alert(response.data.message)
                } else {
                    alert('Failed to upload Product')
                }
            })
        }

        return (
            <div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button size="large" shape="round" type="danger"
                            onClick={addToCarthandler}
                    >
                        Add to Cart
                    </Button>
                </div>
            </div>
        )
    }

export default AddToCartButton

