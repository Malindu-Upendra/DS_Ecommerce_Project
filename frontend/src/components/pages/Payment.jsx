import React , {Component} from "react";
 import '../css/paypall.css'
import PayPal from "./PayPal";
import axios from "axios";
import {Input} from "reactstrap";

export class Pay extends Component{

    state = {
        total:0,
        email:'',
        address:'',
        phoneNumber:''
    }

    componentDidMount = () => {
        const total = this.props.match.params.total;

        this.setState({total})
    }

    handleEmail = (e) => {
        this.setState({email:e.target.value})
    }

    handleAddress = (e) => {
        this.setState({address:e.target.value})
    }

    handlePhoneNumber = (e) => {
        this.setState({phoneNumber:e.target.value})
    }

    render() {

        return (
            <div className="pay">
                <label>Your Email Address</label>
                <Input type="text" placeholder="email" value={this.state.email} onChange={this.handleEmail}/>
                <label>Your Delivery Address</label>
                <Input type="text" placeholder="address" value={this.state.address} onChange={this.handleAddress}/>
                <label>Your Phone Number</label>
                <Input type="number" placeholder="phone numbet" value={this.state.phoneNumber} onChange={this.handlePhoneNumber}/>
                <PayPal
                email={this.state.email}
                toPay={this.state.total}/>

            </div>
        );
    }
}

export default Pay;
