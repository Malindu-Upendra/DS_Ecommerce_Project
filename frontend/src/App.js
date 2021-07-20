import React from 'react';
// import {Row, Col} from 'reactstrap';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
// import Register from './components/pages/register.component';

import Section from './components/Section'
import {DataProvider} from './components/Context'

function App() {
  return (

  <DataProvider>
       <div className="app">
  <Router> 
    <Header />

     <Section />

   <Footer />

   </Router>
   </div>
  </DataProvider>



  );
}

export default App;
