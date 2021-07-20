import React, { Component } from 'react'
import axios from "axios";
import { Form, Input, Label, FormGroup, FormFeedback, Button } from 'reactstrap';

export class UpdateProduct extends Component {

    state = {
        productID : '',
        description : '',
        title:'',
        price:0,
    }

    componentDidMount = () => {
        const title = this.props.match.params.title;

        axios.get(`http://localhost:5000/product/${title}`)
            .then(res => {
                this.setState({product:res.data._id});
                this.setState({description: res.data.description});
                this.setState({title: res.data.title});
                this.setState({price: res.data.price});
            })
    }

    handleDescription = (e) => {
        this.setState({description:e.target.value})
    }

    handlePrice = (e) => {
        this.setState({price:e.target.value})
    }

    handleTitle = (e) => {
        this.setState({title:e.target.value})
    }

    onSubmitHandler = () =>
    {
        console.log("dilan R.D.A")

        const product = {
            _id: this.state.productID,
            title : this.state.title,
            price : this.state.price,
            description : this.state.description
        }

        axios.put(`http://localhost:5000/product/update/${this.state.productID}` , product)
            .then(res => {
                if(res.data.success){
                    alert(res.data.message)
                    window.location = '/Admin'
                }
                else{
                    alert("didn't Update The Product")
                }
            })
    }

    render() {
        return (
            <div>
                    <div className="details" key={this.state.productID}>
                        <img src="https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE-768x768.jpg" alt=""/>
                        <Form onSubmit={this.onSubmitHandler}>
                        <div className="box">
                            <div className="row">
                                <Input type="text" value={this.state.title} onChange={this.handleTitle}/>
                                <Input type="number" value={this.state.price} onChange={this.handlePrice}/>

                            </div>
                            <Input style={{width:'105%', height:'200px'}} type="textarea" value={this.state.description} onChange={this.handleDescription}/>

                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <Button type="submit" color="primary" >Update</Button>
                            </div>
                        </div>
                    </Form>
                    </div>
            </div>
        )
    }
}

export default UpdateProduct
