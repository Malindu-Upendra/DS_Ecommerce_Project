import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';
import Registerr from '../pages/register.component';
import '../css/regform.css'


class Regform extends Component {
    // state = {  }
    render() { 
        return (  

<div className="Reg_Container">
   <Row>
      <Col md={12}>
         <Registerr />
       </Col>
     </Row>
     </div>

        );
    }
}
 
export default Regform;
