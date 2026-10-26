import React, { useEffect } from 'react';
import './App.scss';
import {BrowserRouter as Router, Switch, Route, useLocation} from 'react-router-dom';
import Navbar from './components/navbar';
import PreHeader from './components/pre-header';
import Footer from './components/footer';
import Home from './pages/home-page/home-page';
import Contact from './pages/contact-us';
import AboutUs from './pages/about-us';
import Services from './pages/services';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL || '/'}>
      <ScrollToTop />
      <PreHeader />
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/servicios' exact component={Services} />
        <Route path='/nosotros' exact component={AboutUs} />
        <Route path='/contacto' exact component={Contact} />
        
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
