import React from 'react';
import './App.css';
import  Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import Contact from './components/pages/Contact/Contact';
import AboutUs from './components/pages/AboutUS/AboutUs';
import Footer from './components/pages/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' exact component={Services} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/about-us' exact component={AboutUs} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
