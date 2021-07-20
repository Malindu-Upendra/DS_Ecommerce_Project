import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';
import Loginn from '../pages/Login';
import '../css/regform.css'


class Regform extends Component {
    // state = {  }
    render() { 
        return (  

<div className="Log_Container">
   <Row>
      <Col md={9}>
         <Loginn />
       </Col>
     </Row>
     </div>

        );
    }
}
 
export default Regform;
