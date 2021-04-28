import React, { Fragment } from 'react';
import './App.css';
// import Narbar2 from './components/Navbar/Narbar2'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import AboutUs from './components/pages/AboutUs'
import Footer from './components/Footer'
import ContactUs from './components/pages/ContactUs'

function App() {
  return (
    <>
    
      <Router>
      
        <Navbar/>

        <Switch>
            <Route path = '/' exact component ={Home}/>
            <Route path='/about-us' component={AboutUs} />
            <Route path='/contact-us' component={ContactUs} />
        </Switch>
        <Footer/>
     
      </Router>
    </>
  );
}

export default App;
