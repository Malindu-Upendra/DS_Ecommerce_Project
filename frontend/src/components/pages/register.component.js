import React, { Component } from 'react';
import { Form, Input, Label, FormGroup, FormFeedback, Button } from 'reactstrap';
import { isEmail } from 'validator';
import axios from "axios";
// import '../css/register.css';

class Register extends Component {
   constructor(props) {
    super(props);

    this.state = this.getInitialState();
}

getInitialState = () => ({
    data: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    },
    errors: {}
});

handleChange = (e) => {
    this.setState({
        data: {   //works in browser console where gets the entered details in console (ES6)
            ...this.state.data,
            [e.target.name]: e.target.value
        },
        errors: {
            ...this.state.errors,
            [e.target.name]: ''
        }
    });
}

validate = () => {
    const { data } = this.state;
    let errors = {};

    if (data.firstName === '') errors.firstName = 'Enter Your First name!!!';
    if (data.lastName === '') errors.lastName = 'Enter Your Last name!!!';
    if (!isEmail(data.email)) errors.email = 'Enter a Valid Email Address!!!';
    if (data.email === '') errors.email = 'Enter Your Email!!!';
    if (data.password === '') errors.password = 'Password must be valid.';
    if (data.confirmPassword !== data.password) errors.confirmPassword = 'Passwords must match.';

    return errors;
}

handleSubmit = () => {

    const { data } = this.state;

    const errors = this.validate();

    if (Object.keys(errors).length === 0) {
        console.log(data);
        //Call an api here

        //Resetting the form
        this.setState(this.getInitialState());
    } else {
        this.setState({ errors });
    }

    const customer = {
        fname: this.state.data.firstName,
        lname: this.state.data.lastName,
        email: this.state.data.email,
        password: this.state.data.password
    }

        axios.post('http://localhost:5000/customer/', customer)
            .then(response => {
                if (response.data.success) {
                    alert(response.data.message)
                    window.location = '/login'
                } else {
                    alert('Failed to upload Product')
                }
            })
            .catch(err => console.log(err));

}

render() {
    const { data, errors } = this.state;
    return (
        <div>    <br></br>
        <div className="container">
        <Form onSubmit={this.handleSubmit}>
            <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input id="firstName" value={data.firstName} invalid={errors.firstName ? true : false} name="firstName" placeholder="Enter Your First Name" onChange={this.handleChange} />
                <FormFeedback>{errors.firstName}</FormFeedback>
            </FormGroup>
            <br></br>

            <FormGroup>
                <Label for="lastName">Last Name</Label>
                <Input id="lastName" value={data.lastName} invalid={errors.lastName ? true : false} name="lastName"  placeholder="Enter Your Last Name" onChange={this.handleChange} />
                <FormFeedback>{errors.lastName}</FormFeedback>
            </FormGroup>

            <br></br>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input id="email" value={data.email} invalid={errors.email ? true : false} name="email"  placeholder="Enter Your Email ID" onChange={this.handleChange} />
                <FormFeedback>{errors.email}</FormFeedback>
            </FormGroup>

            <br></br>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input id="password" value={data.password} type="password" name="password" invalid={errors.password ? true : false} placeholder="Enter a password" onChange={this.handleChange} />
                <FormFeedback>{errors.password}</FormFeedback>
            </FormGroup>

            <br></br>

            <FormGroup>
                <Label for="confirmPassword">Confirm Password</Label>
                <Input id="confirmPassword" value={data.confirmPassword} type="password" name="confirmPassword" invalid={errors.confirmPassword ? true : false} placeholder="Re-enter your password"  onChange={this.handleChange} />
                <FormFeedback>{errors.confirmPassword}</FormFeedback>
            </FormGroup>

            <br></br>
            <Button type="submit" color="primary">Register</Button>

            <br></br> <br></br>
        </Form>
        </div>

        <br></br>
            </div>
         
    );
}
}
 
export default Register;