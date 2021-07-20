import React, { Component} from 'react';
import { isEmail } from 'validator';
import { Form, Input, Label, FormGroup, FormFeedback, Button } from 'reactstrap';
// import '../css/Login.css';
import {Link} from 'react-router-dom'

class Login extends Component {
    //state = {  }

    constructor(props)  {
        super(props);
    
        this.state = this.getInitialState();
    }


    getInitialState = () => ({
        data: {
            email: '',
            password: '',
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
        if (!isEmail(data.email)) errors.email = 'Enter a Valid Email Address!!!';
        if (data.email === '') errors.email = 'Enter Your Email!!!';
        if (data.password === '') errors.password = 'Password must be valid.';
        return errors;
    }

    handleSubmit = (e) => {
        e.preventDefault();
    
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
    }

    
    render() { 

        const { data, errors } = this.state;
        
        return (  
          
            <div> 
                 <p> </p>

                 {/* <div className="container"> */}
             <Form onSubmit={this.handleSubmit}> 

             <FormGroup>
                <Label for="uname"> <b>User Name </b></Label>
                <Input id="Uname" value={data.email} invalid={errors.email ? true : false} name="email" placeholder="Enter Your User Name" onChange={this.handleChange} />
                <FormFeedback>{errors.email}</FormFeedback>
            </FormGroup>
            <p> </p>

            <FormGroup>
                <Label for="pass"><b> Password </b></Label>
                <Input id="password" value={data.password} invalid={errors.password ? true : false} name="password" placeholder="Enter Your Password" onChange={this.handleChange} />
                <FormFeedback>{errors.password}</FormFeedback>
            </FormGroup>
                    
                    <p> </p>

         <Button type="submit" color="primary">Login</Button>
         <p> </p>

        <div className="linktoReg">
        <Link to="register"> No Account yet? Register Now with Panitan | <b>Join</b> </Link>
    
            </div>

         </Form>
         {/* </div> */}
           <p> </p> 
          
            </div>

        );
    }
}
 
export default Login;